import { Command } from 'commander';
import path from 'path';

import { version } from '../package.json';
import validateOptions from './validateOptions';
import discoverWidgetDefinitionFiles from './webpack/widgetDefinition/discoverWidgetDefinitionFiles';
import loadWidgetDefinitionFile from './webpack/widgetDefinition/loadWidgetDefinitionFile';
import buildWebpackConfiguration from './webpack/buildWebpackConfiguration';
import webpack, { Stats } from 'webpack';
import { WidgetDefinition } from 'WidgetDefinition';
import writeNewRegistry from './registry/writeNewRegistry';
import { SideEffects } from 'common';

function initProgram(program: Command, argv: string[]): void {
  program
    .version(version, '-v, --version')
    .argument(
      '<path>',
      'Path to the project containing the .widgetRegistry directory.',
    )
    .option('-d, --debug', 'output extra debugging')
    .option(
      '--existing-registry <url>',
      'HTTP URL to the existing registry. Used to get all the versions of all the widgets in this registry. Omit this to start a new registry from scratch.',
    )
    .requiredOption(
      '--output-dir <path>',
      'a path to a directory where to save all the compiled widgets and the registry. CAUTION: the directory will be emptied.',
    )
    .option(
      '--widget-definitions <widget-definitions>',
      'when used, the glob(s) provided here will supersede the "register" key in the config file. Use commas to separate multiple values.',
    )
    .option(
      '--omit-missing',
      'when used, widgets in the existing registry that cannot be found will not appear in the new registry.',
    )
    .option(
      '--new-version <version-string>',
      'the new version for the widgets being compiled. If none provided a new version will be automatically generated if possible.',
    );
  program.parse(argv);
}

export default async (
  program: Command,
  argv: string[],
  logger: SideEffects,
): Promise<void> => {
  initProgram(program, argv);
  let opts;
  try {
    opts = await validateOptions({
      ...program.opts(),
      sourceDir: program.args[0],
    });
    logger(`\n`);
    logger(`Debug: ${opts.debug}`);
    logger(`Output dir: ${opts.outputDir}`);
    logger(`Existing registry: ${opts.existingRegistry}`);
    logger(`Source dir: ${opts.sourceDir}`);
    logger(`Config file: ${opts.configFile}`);
    logger(`New version: ${opts.newVersion}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger(`[FATAL ERROR] ${error || ''}\n\n${program.helpInformation()}`);
    }
    throw error;
  }
  // For now we don't allow bringing in your own webpack configuration file. In
  // the future this file name may be part of the CLI's input.
  const defaultWebpackConfigFile = path.join(
    __dirname,
    'defaultConfig',
    'webpack.config.js',
  );
  const configuration = (await import(defaultWebpackConfigFile)).default;
  const widgetDefinitionFiles = await discoverWidgetDefinitionFiles(
    opts.configFile,
    opts.widgetDefinitions,
  );
  logger('\nWidget definition files:');
  logger('  - ' + widgetDefinitionFiles.join(`\n  - `));
  const loadedDefinitionsPromises = widgetDefinitionFiles
    .map((filename) => {
      try {
        return loadWidgetDefinitionFile(filename);
      } catch (error: unknown) {
        if (error instanceof Error) {
          logger(`[WARNING] ${error.message || ''}`);
        }
      }
    })
    .filter((i) => i);
  const widgetDefinitions = await Promise.all(loadedDefinitionsPromises);
  // Typescript does not deal well with the type refinement using filter.
  const cleanDefinitions: WidgetDefinition[] = [];
  for (const definition of widgetDefinitions) {
    if (typeof definition !== 'undefined') {
      cleanDefinitions.push(definition);
    }
  }
  const cwd = process.cwd();
  process.chdir(opts.sourceDir);
  const webpackConfig = await buildWebpackConfiguration(
    cleanDefinitions,
    configuration,
    opts.configFile,
    opts.outputDir,
    opts.debug ? logger : undefined,
  );
  const compiler = webpack(webpackConfig);
  let stats: Stats;
  try {
    stats = await new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        err || !stats ? reject(err) : resolve(stats);
      });
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      compiler.getInfrastructureLogger('CLI').error(error.message);
    }
    process.exit(1);
    process.chdir(cwd);
  }
  process.chdir(cwd);
  const message = stats.toString();
  if (stats.hasErrors()) {
    logger(message);
    process.exit(2);
  }
  // Now generate the new registry with the update data.
  const pathToNewRegistry = path.join(opts.outputDir, 'registry.json');
  const pathToCompiledWidgets = path.join(opts.outputDir, 'widgets');
  const newVersion = await writeNewRegistry(
    opts.omitMissing,
    opts.existingRegistry,
    cleanDefinitions,
    opts.configFile,
    pathToCompiledWidgets,
    pathToNewRegistry,
    opts.newVersion,
    logger,
  );
  logger(
    `\n✅ SUCCESS!\n  - New registry written to "${pathToNewRegistry}".\n  - Webpack compiled all widgets in "${pathToCompiledWidgets}".\n  - New registry version is "${newVersion}".\n`,
  );
};

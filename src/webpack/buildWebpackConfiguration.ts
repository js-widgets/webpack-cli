import path from 'path';
import { Configuration } from 'webpack';
import { WidgetDefinition } from 'WidgetDefinition';
import { RegistryConfig } from 'RegistryConfig';
import { SideEffects } from 'common';

export default async function buildWebpackConfiguration(
  definitions: WidgetDefinition[],
  configuration: Configuration,
  registryConfig: string,
  outputDir: string,
  logger?: SideEffects,
): Promise<Configuration> {
  let configData: RegistryConfig;
  try {
    const importData = await import(registryConfig);
    configData = importData?.default || importData;
    if (configData.webpackFinal) {
      configuration = await configData.webpackFinal(configuration);
    }
    const { externalPeerDependencies = {} } = configData;
    if (Object.keys(externalPeerDependencies).length) {
      configuration.externals = Object.keys(externalPeerDependencies).reduce(
        (ext, key) => ({
          ...ext,
          [key]: externalPeerDependencies[key].varName,
        }),
        {},
      );
    }
  } catch (error: unknown) {
    logger && logger(error);
  }
  configuration.entry = {};
  for (const definition of definitions) {
    const libName = `render-${definition.shortcode}`.replace(/-./g, (match) =>
      match[1].toUpperCase(),
    );
    configuration.entry[definition.shortcode] = {
      import: definition.entry,
      library: {
        name: libName,
        type: 'window',
        export: 'default',
      },
    };
  }
  if (typeof configuration.output === 'undefined') {
    configuration.output = {};
  }
  configuration.output.path = path.join(outputDir, 'widgets');
  configuration.output.filename =
    configuration.mode === 'production'
      ? '[name]/js/main.[fullhash].js'
      : '[name]/js/main.js';
  configuration.output.assetModuleFilename = '[name]/images/[hash][ext][query]';
  if (logger) {
    logger('\n---------------------------------------------------');
    logger('              Webpack Config                       ');
    logger('---------------------------------------------------');
    logger(JSON.stringify(configuration, null, 2));
    logger('---------------------------------------------------\n\n');
  }
  return configuration;
}

import path from 'path';
import { inspect } from 'util';
import { Configuration } from 'webpack';
import { WidgetDefinition } from 'WidgetDefinition';
import { RegistryConfig } from 'RegistryConfig';
import { SideEffects } from 'common';
import CopyPlugin from 'copy-webpack-plugin';

export default async function buildWebpackConfiguration(
  definitions: WidgetDefinition[],
  configuration: Configuration,
  registryConfig: string,
  outputDir: string,
  logger?: SideEffects,
): Promise<Configuration> {
  let configData: RegistryConfig;
  // Default to do no changes if it is not defined.
  let webpackFinal = (c: Configuration): Promise<Configuration> =>
    Promise.resolve(c);
  try {
    const importData = await import(registryConfig);
    configData = importData?.default || importData;
    if (configData.webpackFinal) {
      webpackFinal = configData.webpackFinal;
    }
    const { externalPeerDependencies = {} } = configData;
    if (Object.keys(externalPeerDependencies).length) {
      configuration.externals = Object.keys(externalPeerDependencies).reduce(
        (ext, key) => ({
          ...ext,
          [key]: externalPeerDependencies[key].external,
        }),
        {},
      );
      configuration.externalsPresets = { webAsync: true };
      configuration.externalsType = 'window';
    }
  } catch (error: unknown) {
    console.error(error);
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
      ? '[name]/js/main.[contenthash:8].js'
      : '[name]/js/main.js';
  configuration.output.chunkFilename = ({ runtime }) =>
    `${runtime}/js/[contenthash:8].chunk.js`;
  // Dynamic thumbnail copy.
  const copyOptions = definitions.map((definition) => ({
    from: 'thumbnail.png',
    to: path.join(
      configuration.output?.path || '',
      definition.shortcode,
      '[name].[contenthash:8][ext]',
    ),
    noErrorOnMissing: true,
    context: path.dirname(definition.entry),
  }));
  if (copyOptions.length) {
    configuration.plugins?.push(new CopyPlugin({ patterns: copyOptions }));
  }
  // Execute the function in .widgetRegistry/main.js
  configuration = await webpackFinal(configuration);
  if (logger) {
    logger('\n---------------------------------------------------');
    logger('              Webpack Config                       ');
    logger('---------------------------------------------------');
    logger(inspect(configuration, false, null, true));
    logger('---------------------------------------------------\n\n');
  }
  return configuration;
}

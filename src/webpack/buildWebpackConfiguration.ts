import path from 'path';
import { Configuration } from 'webpack';
import { WidgetDefinition } from 'WidgetDefinition';
import { RegistryConfig } from 'RegistryConfig';

export default async function buildWebpackConfiguration(
  definitions: WidgetDefinition[],
  configuration: Configuration,
  registryConfig: string,
  outputDir: string,
  logger?: (input: string) => void,
): Promise<Configuration> {
  let configData: RegistryConfig;
  try {
    const importData = await import(registryConfig);
    configData = importData?.default || importData;
    if (configData.webpackFinal) {
      configuration = await configData.webpackFinal(configuration);
    }
  } catch (error: any) {
    logger && logger(error);
  }
  const entry: Record<string, any> = {};
  for (const definition of definitions) {
    const libName = `render-${definition.shortcode}`.replace(/-./g, (match) =>
      match[1].toUpperCase(),
    );
    entry[definition.shortcode] = {
      import: definition.entry,
      library: {
        name: libName,
        type: 'window',
        export: 'default',
      },
    };
  }
  configuration.entry = entry;
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

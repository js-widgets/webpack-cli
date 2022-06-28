import buildWebpackConfiguration from './buildWebpackConfiguration';
import loadWidgetDefinitionFile from './widgetDefinition/loadWidgetDefinitionFile';
import { join as pathJoin } from 'path';
import configuration from '../defaultConfig/webpack.config';
import { Configuration } from 'webpack';

describe('buildWebpackConfiguration', () => {
  it('builds the correct configuration with empty data', async () => {
    expect.assertions(1);
    const actual = await buildWebpackConfiguration(
      [],
      configuration as Configuration,
      '',
      '',
    );
    expect(actual).toMatchSnapshot();
  });
  it('builds the correct configuration', async () => {
    expect.assertions(1);
    const definitions = [
      await loadWidgetDefinitionFile(
        pathJoin(__dirname, '../__testData__/widgetDefinitions/fake.widget'),
      ),
    ];
    const actual = await buildWebpackConfiguration(
      definitions,
      configuration as Configuration,
      pathJoin(
        __dirname,
        '../__testData__/validProject/.widgetRegistry/main.js',
      ),
      './src/__testData__/widgetDefinitions/',
    );
    expect(actual).toMatchSnapshot();
  });
});

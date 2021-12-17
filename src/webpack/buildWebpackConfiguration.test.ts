import buildWebpackConfiguration from './buildWebpackConfiguration';
import loadWidgetDefinitionFile from './widgetDefinition/loadWidgetDefinitionFile';
import { join as pathJoin } from 'path';

describe('buildWebpackConfiguration', () => {
  it('builds the correct configuration with empty data', async () => {
    expect.assertions(1);
    const actual = await buildWebpackConfiguration([], {}, '', '');
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
      {},
      pathJoin(
        __dirname,
        '../__testData__/validProject/.widgetRegistry/main.js',
      ),
      './src/__testData__/widgetDefinitions/',
    );
    expect(actual).toMatchSnapshot();
  });
});

import listFilesSync from '../util/listFilesSync';
import { WidgetMetadataBasic } from 'WidgetDefinition';
import { WidgetRegistry } from 'WidgetRegistry';

const exploreCompiledWidgets = (
  existingRegistry: WidgetRegistry,
  definitions: WidgetMetadataBasic[],
  dirname: string,
): Map<string, string[]> =>
  new Map<string, string[]>(
    definitions.map(({ shortcode }) => [
      shortcode,
      listFilesSync(`${dirname}/${shortcode}`),
    ]),
  );

export default exploreCompiledWidgets;

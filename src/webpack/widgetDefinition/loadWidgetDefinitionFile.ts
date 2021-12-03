import { WidgetDefinition } from 'WidgetDefinition';
import validateWidgetDefinitionFile from './validateWidgetDefinitionFile';
import { dirname, join } from 'path';

/**
 * Loads the widget definition file.
 *
 * @param {string} filename
 */
export default async function loadWidgetDefinitionFile(
  filename: string,
): Promise<WidgetDefinition> {
  const importData = await import(filename);
  // If there is no entry point defined, use `index.tsx` in that folder.
  if (typeof importData.entry === 'undefined') {
    importData.entry = join(dirname(filename), 'index.js');
  }
  validateWidgetDefinitionFile(importData);
  return importData;
}

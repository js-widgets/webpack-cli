import { WidgetDefinition } from 'WidgetDefinition';
import validateWidgetDefinitionFile from './validateWidgetDefinitionFile';

/**
 * Loads the widget definition file.
 *
 * @param {string} filename
 */
export default async function loadWidgetDefinitionFile(
  filename: string,
): Promise<WidgetDefinition> {
  const importData = await import(filename);
  validateWidgetDefinitionFile(importData);
  return importData;
}

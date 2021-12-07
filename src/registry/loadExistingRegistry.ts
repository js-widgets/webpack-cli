import { WidgetRegistry } from 'WidgetRegistry';

import validateRegistry from './validateRegistry';
import downloadFileContents from '../util/downloadFileContents';

export default async function loadExistingRegistry(
  fileUrl: URL | undefined,
): Promise<WidgetRegistry> {
  if (!fileUrl) {
    return [];
  }
  const fileContents = await downloadFileContents(fileUrl);
  const existingRegistry = JSON.parse(fileContents);
  return validateRegistry(existingRegistry);
}

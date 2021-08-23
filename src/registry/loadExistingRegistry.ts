import { WidgetRegistry } from 'WidgetRegistry';

import validateRegistry from './validateRegistry';
import downloadFileContents from '../util/downloadFileContents';

export default async function loadExistingRegistry(
  fileUrl: URL | undefined,
): Promise<WidgetRegistry> {
  if (!fileUrl) {
    return [];
  }
  const existingRegistry = JSON.parse(await downloadFileContents(fileUrl));
  return validateRegistry(existingRegistry);
}

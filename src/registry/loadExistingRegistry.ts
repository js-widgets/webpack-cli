import { WidgetRegistry } from 'WidgetRegistry';

import validateRegistry from './validateRegistry';
import downloadFileContents from '../util/downloadFileContents';
import { SideEffects } from 'common';

export default async function loadExistingRegistry(
  fileUrl: URL | undefined,
  logger: SideEffects,
): Promise<WidgetRegistry> {
  if (!fileUrl) {
    return [];
  }
  let existingRegistry;
  try {
    const fileContents = await downloadFileContents(fileUrl);
    existingRegistry = JSON.parse(fileContents);
  } catch (e) {
    existingRegistry = [];
    logger(
      `Unable to download and parse the registry at ${fileUrl}. Defaulting to an empty registry.`,
    );
  }
  return validateRegistry(existingRegistry);
}

import fs from 'fs';
import { promisify } from 'util';
import buildNewRegistry from './buildNewRegistry';
import loadExistingRegistry from './loadExistingRegistry';
import { WidgetDefinition } from 'WidgetDefinition';
import guessNewVersion from './guessNewVersion';
import buildTemplatedDirectoryUrl from './buildTemplatedDirectoryUrl';

const writeFile = promisify(fs.writeFile);

export default async function writeNewRegistry(
  omitMissing: boolean,
  existingRegistryUrl: URL | undefined,
  widgetDefinitions: WidgetDefinition[],
  registryConfigFile: string,
  pathToCompiledWidgets: string,
  pathToNewRegistry: string,
  newVersion: string | undefined,
): Promise<string> {
  const existingRegistry = await loadExistingRegistry(existingRegistryUrl);
  const version = newVersion || guessNewVersion(existingRegistry);
  if (!version) {
    throw new Error(`Unable to guess the new version for the registry.`);
  }
  const newRegistry = buildNewRegistry(
    omitMissing,
    existingRegistry,
    widgetDefinitions,
    await buildTemplatedDirectoryUrl(
      registryConfigFile,
      existingRegistryUrl?.href || '',
    ),
    pathToCompiledWidgets,
    version,
  );
  await writeFile(pathToNewRegistry, JSON.stringify(newRegistry));
  return version;
}

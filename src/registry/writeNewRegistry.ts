import fs from 'fs';
import { promisify } from 'util';
import buildNewRegistry from './buildNewRegistry';
import loadExistingRegistry from './loadExistingRegistry';
import { WidgetDefinition } from 'WidgetDefinition';
import guessNewVersion from './guessNewVersion';
import buildTemplatedDirectoryUrl from './buildTemplatedDirectoryUrl';
import loadWidgetRegistryConfig from '../webpack/widgetDefinition/loadWidgetRegistryConfig';

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
  const registryConfig = await loadWidgetRegistryConfig(registryConfigFile);
  const newRegistry = buildNewRegistry(
    omitMissing,
    existingRegistry,
    widgetDefinitions,
    await buildTemplatedDirectoryUrl(
      registryConfig,
      existingRegistryUrl?.href || '',
    ),
    pathToCompiledWidgets,
    version,
    registryConfig?.externalPeerDependencies || {},
  );
  await writeFile(pathToNewRegistry, JSON.stringify(newRegistry));
  return version;
}

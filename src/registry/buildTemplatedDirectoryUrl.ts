import { dirname as pathDirname } from 'path';
import loadWidgetRegistryConfig from '../webpack/widgetDefinition/loadWidgetRegistryConfig';

export default async function buildTemplatedDirectoryUrl(
  registryConfigFile: string,
  existingRegistryFile: string,
) {
  const registryConfig = await loadWidgetRegistryConfig(registryConfigFile);
  const directoryUrl = registryConfig.directoryUrl.replace(/\/$/, '') || '';
  try {
    const remoteUrl = new URL(directoryUrl);
    return `${remoteUrl.href}widgets/{shortcode}`;
  } catch (e) {}
  const widgetPath = [directoryUrl, 'widgets/{shortcode}']
    .filter((i) => i)
    .join('/');
  return `${pathDirname(existingRegistryFile)}/${widgetPath}`;
}

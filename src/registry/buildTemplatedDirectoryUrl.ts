import { dirname as pathDirname } from 'path';
import { RegistryConfig } from 'RegistryConfig';

export default async function buildTemplatedDirectoryUrl(
  registryConfig: RegistryConfig,
  existingRegistryFile: string,
) {
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

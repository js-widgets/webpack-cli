import { RegistryConfig } from 'RegistryConfig';

let configData: RegistryConfig;

export default async function loadWidgetRegistryConfig(
  filename: string,
): Promise<RegistryConfig> {
  if (configData) {
    return configData;
  }
  const defaultData: RegistryConfig = { directoryUrl: '', register: [] };
  try {
    configData = { ...defaultData, ...(await import(filename)) };
  } catch (error: unknown) {
    return defaultData;
  }
  return configData;
}

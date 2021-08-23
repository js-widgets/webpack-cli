import glob from 'glob';
import { dirname, join, resolve as resolvePath } from 'path';

import { RegistryConfig } from 'RegistryConfig';
import loadWidgetRegistryConfig from './loadWidgetRegistryConfig';

/**
 * Discover all the widget definition files based on the config directory.
 *
 * @param {string} configFile
 *   The path to the main.js file that contains all the widget registry config.
 *
 * @return {string[]}
 *   The list of paths leading to the widget definitions.
 */
export default async function discoverWidgetDefinitionFiles(
  configFile: string,
): Promise<string[]> {
  const configData = await loadWidgetRegistryConfig(configFile);
  const workingDir = dirname(configFile);
  // Discover the widget definitions based on the glob pattern.
  const register = configData.register;
  const unflattenned = await Promise.all(
    register.map((pattern): Promise<string[]> => {
      return new Promise((resolve, reject) =>
        glob(pattern, { cwd: workingDir }, (err, matches) => {
          if (err) {
            reject(err);
            return;
          }
          const filenames = matches.map((filename) =>
            resolvePath(join(workingDir, filename)),
          );
          resolve(filenames);
        }),
      );
    }),
  );
  // Each register pattern can yield a list of files that we need to flatten in
  // one list.
  return unflattenned.reduce(
    (carry: string[], batch: string[]) => [...carry, ...batch],
    [],
  );
}

import semverMajor from 'semver/functions/major';
import exploreCompiledWidgets from './exploreCompiledWidgets';
import validateRegistry from './validateRegistry';
import isString from '../util/isString';

import { WidgetRegistry, WidgetRegistryItem } from 'WidgetRegistry';
import { WidgetDefinition } from 'WidgetDefinition';
import currentTime from '../util/currentTime';
import { RegistryConfig } from 'RegistryConfig';

export default function buildNewRegistry(
  omitMissing: boolean,
  existingRegistry: WidgetRegistry,
  widgetDefinitions: WidgetDefinition[],
  templateUrl: string,
  pathToCompiledWidgets: string,
  version: string,
  allExternalPeerDependencies: RegistryConfig['externalPeerDependencies'] = {},
): WidgetRegistry {
  const compiledFiles = exploreCompiledWidgets(
    existingRegistry,
    widgetDefinitions,
    pathToCompiledWidgets,
  );
  let newRegistry = widgetDefinitions.map(
    ({
      shortcode,
      title,
      status,
      settingsSchema,
      description,
      additionalCustomProperties,
      useExternalPeerDependencies = [],
      preview = {},
    }): WidgetRegistryItem => {
      const existingEntry: WidgetRegistryItem | undefined =
        existingRegistry.find((item) => item.shortcode === shortcode);
      // If there is an existing entry, that means this is an update, and not an
      // insert.
      const createdAt =
        typeof existingEntry === 'undefined'
          ? currentTime()
          : existingEntry.createdAt;
      // Only set the external peer dependencies explicitly selected.
      const externalPeerDependencies = useExternalPeerDependencies.reduce(
        (deps: WidgetRegistryItem['externalPeerDependencies'], key: string) => {
          if (!isString(allExternalPeerDependencies[key]?.src)) {
            return deps;
          }
          return {
            ...deps,
            [key]: { src: allExternalPeerDependencies[key].src },
          };
        },
        {},
      );
      const files = compiledFiles.get(shortcode) || [];
      const directoryUrl = templateUrl
        .replace(/{shortcode}/, shortcode)
        .replace(/{majorVersion}/, `v${semverMajor(version)}`);
      const thumbnail_filename = files.find((file) =>
        file.match(/(thumbnail)(\..{8})?(\.png)/),
      );
      if (thumbnail_filename) {
        preview.thumbnail = `${directoryUrl}/${thumbnail_filename}`;
      }
      const newItem: WidgetRegistryItem = {
        files: compiledFiles.get(shortcode) || [],
        createdAt,
        updatedAt: currentTime(),
        title,
        status: status,
        settingsSchema,
        description,
        ...(additionalCustomProperties || {}),
        directoryUrl,
        shortcode,
        version,
        externalPeerDependencies,
        preview,
      };
      return newItem;
    },
  );
  if (!omitMissing) {
    // Add the registry items that were not compiled.
    newRegistry = [
      ...newRegistry,
      // The items in the existing registry not present in the newRegistry.
      ...existingRegistry.filter(
        (item) =>
          newRegistry
            .map(({ shortcode }) => shortcode)
            .indexOf(item.shortcode) === -1,
      ),
    ];
  }
  try {
    validateRegistry(newRegistry);
  } catch (e) {
    return existingRegistry;
  }
  return newRegistry;
}

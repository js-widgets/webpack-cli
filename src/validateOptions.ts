import fs from 'fs/promises';
import path from 'path';
import { URL } from 'url';
import coerceSemver from 'semver/functions/coerce';
import validateSemver from 'semver/functions/valid';
import { CLIOptions } from 'CLIOptions';

export default async function validateOptions(
  rawOptions: Record<string, any>,
): Promise<CLIOptions> {
  const {
    debug,
    omitMissing,
    outputDir,
    existingRegistry,
    sourceDir,
    newVersion,
  } = rawOptions;
  let isDir = false;
  try {
    isDir = (await fs.stat(outputDir)).isDirectory();
  } catch (e: any) {
    throw new Error(`Unable to find the output dir: "${outputDir}"`);
  }
  if (!isDir) {
    throw new Error(
      `The provided path is not a directory: "${path.resolve(outputDir)}"`,
    );
  }
  let theUrl;
  if (existingRegistry) {
    try {
      theUrl = new URL(existingRegistry);
    } catch (e: any) {
      throw new Error(
        `Invalid URL for the existing registry: "${existingRegistry}"`,
      );
    }
    if (!theUrl.pathname.match(/\.json$/)) {
      throw new Error(
        `Please provide a URL to a valid JSON file: ${existingRegistry}`,
      );
    }
  }

  try {
    isDir = (await fs.stat(sourceDir)).isDirectory();
  } catch (e: any) {
    throw new Error(`Unable to find the source dir: "${sourceDir}"`);
  }
  if (!isDir) {
    throw new Error(
      `The provided path is not a directory: "${path.resolve(sourceDir)}"`,
    );
  }
  let isFile = false;
  const configFile = path.join(sourceDir, '.widgetRegistry', 'main.js');
  try {
    isFile = (await fs.stat(configFile)).isFile();
  } catch (e: any) {}
  if (!isFile) {
    throw new Error(
      `Unable to find the main config file for the registry: "${configFile}"`,
    );
  }
  let version;
  if (newVersion) {
    version = `v${coerceSemver(newVersion)}`;
    if (!validateSemver(version)) {
      throw new Error(
        `The new version is not a valid semver specifier (vX.Y.Z): "${version}"`,
      );
    }
  }
  return {
    debug: !!debug,
    omitMissing: !!omitMissing,
    outputDir: path.resolve(outputDir),
    existingRegistry: theUrl,
    sourceDir: path.resolve(sourceDir),
    configFile: path.resolve(configFile),
    newVersion: version,
  };
}

import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { URL } from 'url';
import coerceSemver from 'semver/functions/coerce';
import validateSemver from 'semver/functions/valid';
import { CLIOptions } from 'CLIOptions';

const stat = promisify(fs.stat);

export default async function validateOptions(
  rawOptions: Record<string, unknown>,
): Promise<CLIOptions> {
  const {
    debug,
    omitMissing,
    outputDir,
    existingRegistry,
    sourceDir,
    newVersion,
    widgetDefinitions,
  } = rawOptions;
  let isDir = false;
  // Some string casting to deal easily with types.
  const outDir = `${outputDir}`;
  const srcDir = `${sourceDir}`;
  const newVer = `${newVersion}`;
  try {
    isDir = (await stat(outDir)).isDirectory();
  } catch (error: unknown) {
    throw new Error(`Unable to find the output dir: "${outDir}"`);
  }
  if (!isDir) {
    throw new Error(
      `The provided path is not a directory: "${path.resolve(outDir)}"`,
    );
  }
  let theUrl;
  if (existingRegistry) {
    try {
      theUrl = new URL(`${existingRegistry}`);
    } catch (error: unknown) {
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
    isDir = (await stat(srcDir)).isDirectory();
  } catch (error: unknown) {
    throw new Error(`Unable to find the source dir: "${srcDir}"`);
  }
  if (!isDir) {
    throw new Error(
      `The provided path is not a directory: "${path.resolve(srcDir)}"`,
    );
  }
  let isFile = false;
  const configFile = path.join(srcDir, '.widgetRegistry', 'main.js');
  try {
    isFile = (await stat(configFile)).isFile();
  } catch (error: unknown) {}
  if (!isFile) {
    throw new Error(
      `Unable to find the main config file for the registry: "${configFile}"`,
    );
  }
  let version;
  if (newVersion) {
    version = `v${coerceSemver(newVer)}`;
    if (!validateSemver(version)) {
      throw new Error(
        `The new version is not a valid semver specifier (vX.Y.Z): "${version}"`,
      );
    }
  }
  return {
    debug: !!debug,
    omitMissing: !!omitMissing,
    outputDir: path.resolve(outDir),
    existingRegistry: theUrl,
    sourceDir: path.resolve(srcDir),
    configFile: path.resolve(configFile),
    newVersion: version,
    widgetDefinitions: widgetDefinitions
      ? `${widgetDefinitions}`.split(',').map((s: string) => s.trim())
      : [],
  };
}

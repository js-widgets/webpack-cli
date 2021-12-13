import fs from 'fs';
import path from 'path';

/**
 * Recursive function to extract all files with its relative path.
 *
 * @param {string} folder
 *   The folder containing the files to list.
 * @param {string} _subpath
 *   Used internally to track the directory when traversing recursively.
 * @param {string[]} _files
 *   Used internally to track the files discovered so far.
 */
const listFilesSync = (
  folder: string,
  _subpath = '',
  _files: string[] = [],
): string[] => {
  fs.readdirSync(path.join(folder, _subpath)).forEach((file) => {
    if (fs.lstatSync(path.join(folder, _subpath, file)).isDirectory()) {
      listFilesSync(folder, path.join(_subpath, file), _files);
    } else {
      _files.push(path.join(_subpath, file));
    }
  });
  return _files;
};

export default listFilesSync;

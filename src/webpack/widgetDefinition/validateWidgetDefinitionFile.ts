/**
 * Throws an error when a `*.widget.js` file is not valid.
 *
 * @param {*} importData
 *   The imported data.
 *
 * @throws Error
 *   When the data is not valid.
 */
import isString from '../../util/isString';

type WidgetDefinitionImportData = Partial<{
  entry: unknown;
  shortcode: unknown;
  title: unknown;
  status: unknown;
  settingsSchema: unknown;
}>;

export default function validateWidgetDefinitionFile(
  importData: WidgetDefinitionImportData,
): void {
  const { entry, shortcode, title, status, settingsSchema } = importData;
  if (!entry || !shortcode) {
    throw new Error(
      'The "entry" and "shortcode" properties are required in `*.widget.json` files.',
    );
  }
  if (!isString(entry)) {
    throw new Error('Unexpected type: "entry" should be a string.');
  }
  if (!isString(shortcode)) {
    throw new Error('Unexpected type: "shortcode" should be a string.');
  }
  if (typeof title !== 'undefined' && !isString(title)) {
    throw new Error('Unexpected type: "title" should be a string.');
  }
  if (typeof status !== 'undefined' && !isString(status)) {
    throw new Error('Unexpected type: "status" should be a string.');
  }
  const validStatuses = ['stable', 'beta', 'wip', 'deprecated'];
  if (validStatuses.indexOf(`${status}`) === -1) {
    throw new Error(
      `Unexpected status value: allowed values are ${validStatuses.join(', ')}`,
    );
  }
  if (
    typeof settingsSchema !== 'undefined' &&
    typeof settingsSchema !== 'object'
  ) {
    throw new Error('Unexpected type: "settingsSchema" should be an object.');
  }
}

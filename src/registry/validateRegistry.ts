import Ajv, { JSONSchemaType } from 'ajv';
import addFormats from 'ajv-formats';
import path from 'path';
import { WidgetRegistry } from 'WidgetRegistry';
import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

// This is necessary so the typescript compiler copies the schema to the dist.
import * as schema from './registry.schema.json';

export default async function validateRegistry(
  registry: any,
): Promise<WidgetRegistry> {
  const ajv = new Ajv();
  addFormats(ajv);
  const schemaFilename = path.join(__dirname, './registry.schema.json');
  // This is the way to refine the type for input data into TypeScript.
  const schemaContents = await readFile(schemaFilename);
  let schema: JSONSchemaType<WidgetRegistry>;
  try {
    schema = JSON.parse(schemaContents.toString());
  } catch (e) {
    console.log(schemaContents.toString());
    throw new Error('Invalid registry. Unable to parse registry schema.');
  }
  const validate = ajv.compile(schema);
  const valid = validate(registry);
  if (!valid) {
    throw new Error(
      `Invalid registry. Errors:\n${JSON.stringify(validate.errors, null, 2)}.`,
    );
  }
  return registry;
}

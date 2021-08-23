import Ajv, { JSONSchemaType } from 'ajv';
import addFormats from 'ajv-formats';
import path from 'path';
import { WidgetRegistry } from 'WidgetRegistry';
import fs from 'fs/promises';

// This is necessary so the typescript compiler copies the schema to the dist.
import * as schema from './registry.schema.json';

export default async function validateRegistry(
  registry: any,
): Promise<WidgetRegistry> {
  const ajv = new Ajv();
  addFormats(ajv);
  const schemaFilename = path.join(__dirname, './registry.schema.json');
  // This is the way to refine the type for input data into TypeScript.
  const schema: JSONSchemaType<WidgetRegistry> = JSON.parse(
    (await fs.readFile(schemaFilename)).toString(),
  );
  const validate = ajv.compile(schema);
  const valid = validate(registry);
  if (!valid) {
    throw new Error(
      `Invalid registry. Errors:\n${JSON.stringify(validate.errors, null, 2)}.`,
    );
  }
  return registry;
}

export default function isString(input: unknown): boolean {
  return typeof input === 'string' || input instanceof String;
}

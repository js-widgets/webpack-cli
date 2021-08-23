export default function isString(input: any): boolean {
  return typeof input === 'string' || input instanceof String;
}

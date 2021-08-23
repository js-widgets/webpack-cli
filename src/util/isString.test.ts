import isString from './isString';

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('foo')).toBe(true);
    expect(isString(String('bar'))).toBe(true);
    expect(isString(new String('bar'))).toBe(true);
  });
  it('should return false for non-strings', () => {
    expect(isString(true)).toBe(false);
    expect(isString(3)).toBe(false);
    expect(isString(5.6)).toBe(false);
    expect(isString(NaN)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString({ foo: 'bar' })).toBe(false);
    expect(isString(['foo'])).toBe(false);
  });
});

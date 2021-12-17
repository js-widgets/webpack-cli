import validateWidgetDefinitionFile from './validateWidgetDefinitionFile';

describe('validateWidgetDefinitionFile', () => {
  const importData = {
    entry: 'lorem',
    shortcode: 'foo',
    title: 'Foo',
    status: 'stable',
    settingsSchema: {},
  };
  it('validates correct definition', () => {
    expect.assertions(1);
    expect(() => validateWidgetDefinitionFile(importData)).not.toThrow();
  });
  it('throws error on empty import', () => {
    expect.assertions(1);
    const importData = {};
    expect(() => validateWidgetDefinitionFile(importData)).toThrow();
  });
  it('throws error on empty entry or shortcode', () => {
    expect.assertions(2);
    expect(() =>
      validateWidgetDefinitionFile({
        ...importData,
        entry: undefined,
      }),
    ).toThrow(
      'The "entry" and "shortcode" properties are required in `*.widget.json` files.',
    );
    expect(() =>
      validateWidgetDefinitionFile({
        ...importData,
        shortcode: undefined,
      }),
    ).toThrow(
      'The "entry" and "shortcode" properties are required in `*.widget.json` files.',
    );
  });
  it('throws error on invalid title', () => {
    expect.assertions(1);
    expect(() =>
      validateWidgetDefinitionFile({
        ...importData,
        title: 34,
      }),
    ).toThrow('Unexpected type: "title" should be a string.');
  });
  it('throws error on invalid status', () => {
    expect.assertions(2);
    expect(() =>
      validateWidgetDefinitionFile({
        ...importData,
        status: 34,
      }),
    ).toThrow('Unexpected type: "status" should be a string.');
    expect(() =>
      validateWidgetDefinitionFile({
        ...importData,
        status: 'oof',
      }),
    ).toThrow(
      'Unexpected status value: allowed values are stable, beta, wip, deprecated',
    );
  });
  it('throws error on invalid settings schema', () => {
    expect.assertions(1);
    expect(() =>
      validateWidgetDefinitionFile({
        ...importData,
        settingsSchema: 34,
      }),
    ).toThrow('Unexpected type: "settingsSchema" should be an object.');
  });
});

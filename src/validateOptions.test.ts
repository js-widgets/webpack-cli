import validateOptions from './validateOptions';

describe('validateOptions', () => {
  it('should succeed with valid options', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './src/__testData__/validProject',
      newVersion: '9.0.11',
    };
    const { debug, outputDir, existingRegistry, sourceDir, configFile } =
      await validateOptions(rawOptions);
    expect(debug).toBe(false);
    expect(outputDir).toMatch(/\/src/);
    expect(existingRegistry?.href).toMatch(/\/tsconfig\.json/);
    expect(sourceDir).toMatch(/\/src\/__testData__\/validProject/);
    expect(configFile).toMatch(
      /\/src\/__testData__\/validProject\/.widgetRegistry\/main.js/,
    );
  });

  it('should fail if outputDir does not exist', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './invalid-path',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './src/__testData__/validProject',
    };
    expect.assertions(2);
    try {
      await validateOptions(rawOptions);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error) {
        expect(error.message).toBe(
          'Unable to find the output dir: "./invalid-path"',
        );
      }
    }
  });

  it('should fail if existingRegistry does not exist', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: './invalid-path',
      sourceDir: './src/__testData__/validProject',
    };
    expect.assertions(2);
    try {
      await validateOptions(rawOptions);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error) {
        expect(error.message).toBe(
          'Invalid URL for the existing registry: "./invalid-path"',
        );
      }
    }
  });

  it('should fail if source dir does not exist', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './invalid-directory',
    };
    expect.assertions(2);
    try {
      await validateOptions(rawOptions);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error) {
        expect(error.message).toBe(
          'Unable to find the source dir: "./invalid-directory"',
        );
      }
    }
  });

  it('should fail if source dir is no a dir', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './tsconfig.json',
    };
    expect.assertions(2);
    try {
      await validateOptions(rawOptions);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error) {
        expect(error.message).toMatch(
          /^The provided path is not a directory: /,
        );
      }
    }
  });

  it('should fail if source dir has no .widgetRegistry/main.js', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './src/__testData__/invalidProject',
    };
    expect.assertions(2);
    try {
      await validateOptions(rawOptions);
    } catch (error: unknown) {
      expect(error).toBeInstanceOf(Error);
      if (error instanceof Error) {
        expect(error.message).toMatch(/^Unable to find the /);
      }
    }
  });
});

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
    try {
      await validateOptions(rawOptions);
      expect(false).toBe(true);
    } catch (error: any) {
      expect(error.message).toBe(
        'Unable to find the output dir: "./invalid-path"',
      );
    }
  });

  it('should fail if existingRegistry does not exist', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: './invalid-path',
      sourceDir: './src/__testData__/validProject',
    };
    try {
      await validateOptions(rawOptions);
      expect(false).toBe(true);
    } catch (error: any) {
      expect(error.message).toBe(
        'Invalid URL for the existing registry: "./invalid-path"',
      );
    }
  });

  it('should fail if source dir does not exist', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './invalid-directory',
    };
    try {
      await validateOptions(rawOptions);
      expect(false).toBe(true);
    } catch (error: any) {
      expect(error.message).toBe(
        'Unable to find the source dir: "./invalid-directory"',
      );
    }
  });

  it('should fail if source dir is no a dir', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './tsconfig.json',
    };
    try {
      await validateOptions(rawOptions);
      expect(false).toBe(true);
    } catch (error: any) {
      expect(error.message).toMatch(/^The provided path is not a directory: /);
    }
  });

  it('should fail if source dir has no .widgetRegistry/main.js', async () => {
    const rawOptions = {
      debug: undefined,
      outputDir: './src',
      existingRegistry: 'https://example.org/tsconfig.json',
      sourceDir: './src/__testData__/invalidProject',
    };
    try {
      await validateOptions(rawOptions);
      expect(false).toBe(true);
    } catch (error: any) {
      expect(error.message).toMatch(/^Unable to find the /);
    }
  });
});

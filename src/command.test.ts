jest.mock('./registry/writeNewRegistry', () => jest.fn());
import command from './command';
import { Command } from 'commander';

describe('command', () => {
  it('should log the expected data', async () => {
    const logger = jest.fn();
    expect(
      await command(
        new Command(),
        [
          '',
          '',
          '--existing-registry',
          'https://example.org/tsconfig.json',
          '--output-dir',
          './src/__testData__/output',
          '--new-version',
          '1.2.3-beta3',
          './src/__testData__/validProject',
        ],
        logger,
      ),
    ).toBe(undefined);
    expect(logger).toHaveBeenCalledTimes(10);
  });

  it('should log the error message', async () => {
    const logger = jest.fn();
    try {
      await command(
        new Command(),
        [
          '',
          '',
          '--existing-registry',
          './invalid-file',
          '--output-dir',
          './src',
          './src/__testData__/validProject',
        ],
        logger,
      );
    } catch (error: any) {
      expect(logger).toHaveBeenCalledTimes(1);
    }
  });
});

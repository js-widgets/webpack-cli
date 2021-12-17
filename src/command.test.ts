jest.mock('./registry/writeNewRegistry', () => jest.fn());
import { mkdtemp } from 'fs';
import { promisify } from 'util';
import command from './command';
import { Command } from 'commander';

const mkdtempP = promisify(mkdtemp);

describe('command', () => {
  it('should log the expected data', async () => {
    const tempDir = await mkdtempP('/tmp/wdgt-test');
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
          tempDir,
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
    } catch (error: unknown) {
      expect(logger).toHaveBeenCalledTimes(1);
    }
  });
});

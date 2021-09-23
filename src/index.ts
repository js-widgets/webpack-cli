#!/usr/bin/env node

import command from './command';
import { Command } from 'commander';

(async () => {
  await command(new Command(), process.argv, console.log);
  process.exit(0);
})();

#!/usr/bin/env node
import { Command } from 'commander';
import { readFile } from 'fs/promises';
import {
  FromPt,
  ToPt,
  FromRem,
  ToRem,
  ToRGB,
  ToJoules,
  TablePt,
  TableRem,
} from '../lib/index.js';
import { DEFAULT_BASEFONT } from '../lib/constants.js';

const { version } = JSON.parse(
  await readFile(
    new URL('../package.json', import.meta.url)
  )
);

const program = new Command();

program
  .version(version)
  .description('Pixel Conversion CLI');

program
  .command('from:pt')
  .arguments('<point>', 'Point to convert')
  .description('Convert a given point (pt) value to the corresponding pixel value')
  .action(FromPt);

program
  .command('to:pt')
  .arguments('<pixel>', 'Pixel to convert')
  .description('Convert a given pixel value to the corresponding point value')
  .action(ToPt);

program
  .command('from:rem')
  .arguments('<rem>', 'Rem to convert')
  .description('Convert a given rem value to the corresponding pixel value')
  .option('-b, --base', 'Base pixel', DEFAULT_BASEFONT)
  .action(FromRem);

program
  .command('to:rem')
  .arguments('<pixel>', 'Pixel to convert')
  .description('Convert a given pixel value to the corresponding rem value')
  .option('-b, --base', 'Base pixel', DEFAULT_BASEFONT)
  .action(ToRem);

program
  .command('to:rgb')
  .arguments('<hex>', 'Hex value')
  .description('Convert a given hex value to the corresponding rgb value')
  .action(ToRGB);

program
  .command('joules')
  .description('Take mass and height as input and returns the potential energy in Joules')
  .action(ToJoules);

program
  .command('table:pt')
  .description('Return a table of conversions between pixels and points')
  .option('-r, --range', '[default: 10,42] Range of pixels')
  .action(TablePt);

program
  .command('table:rem')
  .description('Return a table of conversions between pixels and rems, if no BASEPIXEL value is passed, it will default to 16 pixels')
  .option('-b, --base', 'Base pixel', DEFAULT_BASEFONT)
  .option('-r, --range', '[default: 10,42] Range of pixels')
  .action(TableRem);

program.parse(process.argv);
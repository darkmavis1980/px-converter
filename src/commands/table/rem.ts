import { generateRemTable } from '../../lib/conversion.js';
import { DEFAULT_RANGE, DEFAULT_BASEFONT } from '../../constants.js';
import { printTable } from '../../lib/table.js';

interface Opts {
  range?: string;
  base?: number;
}

export const TableRem = (options: Opts) => {
  const range: number[] = options.range ? options.range.split(',').map(i => Number(i)) : DEFAULT_RANGE;
  const basepixel = options.base ?? DEFAULT_BASEFONT;

  const headers = [
    {
      name: 'px',
      label: 'Pixels',
    },
    {
      name: 'rem',
      label: 'Rem',
    },
  ];

  const table = generateRemTable(range, basepixel);

  printTable(table, { headers });
};

export default TableRem;

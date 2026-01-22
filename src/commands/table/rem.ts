import { generateRemTable } from '../../lib/conversion';
import { DEFAULT_RANGE, DEFAULT_BASEFONT } from '../../constants';
import { printTable } from '../../lib/table';

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

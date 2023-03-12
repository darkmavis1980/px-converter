import {generateRemTable} from '../../lib/conversion';
import {DEFAULT_RANGE, DEFAULT_BASEFONT} from '../../constants';
import { printTable } from '../../lib/table';

interface Opts {
  range: string;
  base: number;
}

export const TableRem = (_: null, flags: Opts) => {
  const range: number[] = flags.range ? flags.range.split(',').map(i => Number(i)) : DEFAULT_RANGE;
  const basepixel = flags.base ?? DEFAULT_BASEFONT;

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

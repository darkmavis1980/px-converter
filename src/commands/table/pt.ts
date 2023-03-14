
import { generatePtTable } from '../../lib/conversion.js';
import { DEFAULT_RANGE } from '../../constants.js';
import { printTable } from '../../lib/table.js';

interface Opts {
  range: string;
}

export const TablePt = (_: null, flags: Opts) => {
  const range: number[] = flags.range ? flags.range.split(',').map(i => Number(i)) : DEFAULT_RANGE;

  const table = generatePtTable(range);

  const headers = [
    {
      name: 'px',
      label: 'Pixels',
    },
    {
      name: 'pt',
      label: 'Points',
    },
  ];

  printTable(table, { headers });
};

export default TablePt;

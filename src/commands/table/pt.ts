import { generatePtTable } from '../../lib/conversion';
import { DEFAULT_RANGE } from '../../constants';
import { printTable } from '../../lib/table';

interface Opts {
  range?: string;
}

export const TablePt = (options: Opts) => {
  const range: number[] = options.range ? options.range.split(',').map(i => Number(i)) : DEFAULT_RANGE;

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

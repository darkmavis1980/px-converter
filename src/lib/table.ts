const PADDING = 1; // 1 space

/**
 * ASCII Boxes found from https://waylonwalker.com/drawing-ascii-boxes/
 */

type DataTable = Record<string, any>;

interface OptionsTableHeaders {
  name: string;
  label: string;
  maxWidth?: number;
  maxPaddedWidth?: number;
}

interface OptionsTable {
  headers?: OptionsTableHeaders[];
}

export const getDataKeys = (data: DataTable) => {
  const keys = Object.keys(data[0]);
  return keys.map(key => ({
    name: key,
    label: key,
  }));
}

export const findMaxWidth = (data: DataTable, headers: OptionsTableHeaders[]): OptionsTableHeaders[] => {
  return headers.map((header) => {
    const { name } = header;
    let maxLength = 0;
    const dataLength = data.length ?? 0;
    for (let i = 0; i < dataLength; i++) {
      if(data[i][name].length > maxLength) {
        maxLength = data[i][name].length;
      }
    }
    header.maxWidth = maxLength;
    header.maxPaddedWidth = maxLength + (PADDING * 2);
    return header;
  });
}

export const calculateTableWidth = (headers: OptionsTableHeaders[]): number => {
  let tableWidth = 2;
  // add separators
  tableWidth += (headers.length * 2) - 1;
  // add width for each header
  headers.forEach(({maxWidth = 1}) => {
    tableWidth += (PADDING * 2) + maxWidth;
  });

  return tableWidth;
}

export const printHeaders = (headers: OptionsTableHeaders[]): void => {
  const headersList = headers.map(({label, maxPaddedWidth = 5}) => ` ${label.padEnd(maxPaddedWidth, ' ')}`);
  const line = `┃${headersList.join(' | ')}┃`;
  console.info(line);
}

export const printDataLine = (data: DataTable, headers: OptionsTableHeaders[]): void => {
  data.forEach((row: Record<string, any>) => {
    const line = `┃${headers.map(({name, maxPaddedWidth = 5}) => ` ${row[name].padEnd(maxPaddedWidth, ' ')}`).join(' | ')}┃`;
    console.info(line);
  });
}

export const printTable = (data: DataTable, options: OptionsTable = {}) => {
  let headers = options.headers ?? getDataKeys(data);
  headers = findMaxWidth(data, headers);
  const tableWidth = calculateTableWidth(headers);
  console.info(`┎${'─'.repeat(tableWidth)}┒`);
  // Print headers
  printHeaders(headers);
  console.info(`┠${'─'.repeat(tableWidth)}┨`);
  // Print data
  printDataLine(data, headers);
  console.info(`┖${'─'.repeat(tableWidth)}┚`);
  return headers;
}
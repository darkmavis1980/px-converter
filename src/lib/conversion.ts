import { DEFAULT_BASEFONT, DEFAULT_PRECISION, DEFAULT_RANGE, DEFAULT_PT_CONVERSION } from '../constants';
import { TTable } from './interfaces/types';

export function pxToPt(pixel: number): number {
  return Math.round(pixel * DEFAULT_PT_CONVERSION * DEFAULT_PRECISION) / DEFAULT_PRECISION;
}

export function ptToPx(point: number): number {
  return Math.round((point / 3) * 4 * DEFAULT_PRECISION) / DEFAULT_PRECISION;
}

export function pxToRem(pixel: number, base: number = DEFAULT_BASEFONT): number {
  return Math.round((pixel / base) * DEFAULT_PRECISION) / DEFAULT_PRECISION;
}

export function remToPx(rem: number, base: number = DEFAULT_BASEFONT): number {
  return Math.round(rem * base * DEFAULT_PRECISION) / DEFAULT_PRECISION;
}

export function generateRemTable(range: number[] = DEFAULT_RANGE, base: number = DEFAULT_BASEFONT): TTable {
  const table: TTable = [];

  for (let i: number = range[0]; i <= range[1]; i++) {
    const rem: number = pxToRem(i, base);
    table.push({ px: `${i}px`, rem: `${rem}rem` });
  }

  return table;
}

export function generatePtTable(range: number[] = DEFAULT_RANGE): TTable {
  const table: TTable = [];

  for (let i: number = range[0]; i <= range[1]; i++) {
    const rem: number = pxToPt(i);
    table.push({ px: `${i}px`, pt: `${rem}pt` });
  }

  return table;
}

/**
 * Converts an Hex value to RGB
 * @param hex The Hex value to convert to RGB
 * @returns An array of numbers with exactly 3 elements
 */
export function hexToRgb(hex = '000000'): number[] {
  if (!hex || !(hex.length === 6 || hex.length === 3) || hex === null) {
    throw new Error('Hex value cannot be null');
  }

  if (hex.includes('#')) {
    hex = hex.slice(1);
  }

  if (!hex || hex === null) {
    return [0, 0, 0];
  }

  const colors = hex.match(hex.length === 6 ? /.{2}/g : /./g);
  if (!colors || colors === null) {
    throw new Error('Cannot resolve the colours');
  }

  const rgb = colors.map(color => {
    color = hex.length === 3 ? color + color : color;
    return Number.parseInt(color, 16);
  });
  return rgb;
}

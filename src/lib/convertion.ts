import {
  DEFAULT_BASEFONT,
  DEFAULT_PRECISION,
  DEFAULT_RANGE,
  DEFAULT_PT_CONVERSION,
} from '../constants'

type ITableRow = {
  px: string;
  rem: string;
}

type TTable = Array<ITableRow>

export function pxToPt(pixel: number): number {
  return Math.round((pixel * DEFAULT_PT_CONVERSION) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function ptToPx(point: number): number {
  return Math.round(((point / 3) * 4) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function pxToRem(pixel: number, base: number = DEFAULT_BASEFONT): number {
  return Math.round((pixel / base) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function remToPx(rem: number, base: number = DEFAULT_BASEFONT): number {
  return Math.round((rem * base) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function generateTable(base: number = DEFAULT_BASEFONT, range: number[] = DEFAULT_RANGE): TTable {
  const table: TTable = []

  for (let i: number = range[0]; i <= range[1]; i++) {
    const rem: number = pxToRem(i, base)
    table.push({px: `${i}px`, rem: `${rem}rem`})
  }
  return table
}

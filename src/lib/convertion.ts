import {
  DEFAULT_BASEFONT,
  DEFAULT_PRECISION,
  DEFAULT_RANGE,
  DEFAULT_PT_CONVERSION,
} from '../constants'
import {TTable} from './interfaces/types'

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

export function generateRemTable(range: number[] = DEFAULT_RANGE, base: number = DEFAULT_BASEFONT): TTable {
  const table: TTable = []

  for (let i: number = range[0]; i <= range[1]; i++) {
    const rem: number = pxToRem(i, base)
    table.push({px: `${i}px`, rem: `${rem}rem`})
  }
  return table
}

export function generatePtTable(range: number[] = DEFAULT_RANGE): TTable {
  const table: TTable = []

  for (let i: number = range[0]; i <= range[1]; i++) {
    const rem: number = pxToPt(i)
    table.push({px: `${i}px`, rem: `${rem}pt`})
  }
  return table
}

export function hexToRgb(hex = '000000'): number[] {
  if (!hex || hex === null) {
    throw new Error('Hex value cannot be null')
  }
  if (hex.indexOf('#') !== -1) {
    hex = hex.substr(1)
  }
  const rgb = hex.match(hex.length === 6 ? /.{2}/g : /.{1}/g).map(color => {
    color = hex.length === 3 ? color + color : color
    return parseInt(color, 16)
  })
  return rgb
}
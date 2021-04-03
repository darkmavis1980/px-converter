import {
  DEFAULT_BASEFONT,
  DEFAULT_PRECISION,
  DEFAULT_RANGE,
  DEFAULT_PT_CONVERSION,
  FEET_TO_METRES,
  METRES_TO_FEET,
} from '../constants'
import {TTable} from './interfaces/types'

export function pxToPt(pixel: number): number {
  return Math.round((pixel * DEFAULT_PT_CONVERSION) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function pxToPc(pixel: number): number {
  return Math.round((pixel / DEFAULT_BASEFONT))
}

export function ptToPx(point: number): number {
  return Math.round(((point / 3) * 4) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function pcToPx(pica: number): number {
  return Math.round((((pica * 12) / 3) * 4) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function pxToRem(pixel: number, base: number = DEFAULT_BASEFONT): number {
  return Math.round((pixel / base) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function remToPx(rem: number, base: number = DEFAULT_BASEFONT): number {
  return Math.round((rem * base) * DEFAULT_PRECISION) / DEFAULT_PRECISION
}

export function feetToMetres(feet: number): number {
  const convertion = feet * Number(FEET_TO_METRES)
  return Number(convertion.toFixed(2))
}

export function metresToFeet(metres: number): number {
  const convertion = metres * Number(METRES_TO_FEET)
  return Number(convertion.toFixed(2))
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

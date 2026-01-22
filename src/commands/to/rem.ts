import { pxToRem } from '../../lib/conversion.js';
import { DEFAULT_BASEFONT } from '../../constants.js';

interface Opts {
  base?: number;
}

export const ToRem = (pixel: string, options: Opts) => {
  const base = options.base ?? DEFAULT_BASEFONT;
  const conversion: number = pxToRem(Number(pixel), base);
  console.log(`${conversion}rem`);
};

export default ToRem;

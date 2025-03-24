import { pxToRem } from '../../lib/conversion';
import { DEFAULT_BASEFONT } from '../../constants';

interface Args {
  pixel: number;
}

interface Opts {
  base: number;
}

export const ToRem = (args: Args, flags: Opts) => {
  const pixel = args.pixel ?? DEFAULT_BASEFONT;
  const base = flags.base ?? DEFAULT_BASEFONT;
  const conversion: number = pxToRem(pixel, base);
  console.log(`${conversion}rem`);
};

export default ToRem;

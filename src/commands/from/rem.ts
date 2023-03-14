import {remToPx} from '../../lib/conversion.js'
import {DEFAULT_BASEFONT} from '../../constants.js'

interface Args {
  rem: number;
}

interface Opts {
  base: number;
}

export const FromRem = (args: Args, flags: Opts) => {
  const rem = args.rem ?? DEFAULT_BASEFONT;
  const base = flags.base ?? DEFAULT_BASEFONT;
  const conversion: number = remToPx(rem, base);
  console.log(`${conversion}px`);
}

export default FromRem;

import { remToPx } from '../../lib/conversion';
import { DEFAULT_BASEFONT } from '../../constants';

interface Opts {
  base?: number;
}

export const FromRem = (rem: string, options: Opts) => {
  const base = options.base ?? DEFAULT_BASEFONT;
  const conversion: number = remToPx(Number(rem), base);
  console.log(`${conversion}px`);
};

export default FromRem;

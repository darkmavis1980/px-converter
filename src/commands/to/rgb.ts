import {hexToRgb} from '../../lib/conversion';

interface Args {
  hex: string;
}

export const ToRGB = (args: Args) => {
  const conversion: number[] = hexToRgb(args.hex);
  console.log(`rgb(${conversion.join(',')})`);
};

export default ToRGB;

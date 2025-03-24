import { pxToPt } from '../../lib/conversion';
import { DEFAULT_BASEFONT } from '../../constants';

interface Args {
  pixel: number;
}

export const ToPt = (args: Args) => {
  const pixel = args.pixel ?? DEFAULT_BASEFONT;
  const conversion: number = pxToPt(pixel);
  console.log(`${conversion}pt`);
};

export default ToPt;

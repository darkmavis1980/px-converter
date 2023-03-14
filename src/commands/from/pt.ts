import {ptToPx} from '../../lib/conversion.js'
import {DEFAULT_BASEFONT} from '../../constants.js'

interface Args {
  point: number;
}

export const FromPt = (args: Args) => {
  const point = args.point ?? DEFAULT_BASEFONT;
  const conversion: number = ptToPx(point);
  console.log(`${conversion}px`);
}

export default FromPt;

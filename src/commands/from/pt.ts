import {ptToPx} from '../../lib/conversion'
import {DEFAULT_BASEFONT} from '../../constants'

interface Args {
  point: number;
}

export const FromPt = (args: Args) => {
  const point = args.point ?? DEFAULT_BASEFONT;
  const conversion: number = ptToPx(point);
  console.log(`${conversion}px`);
}

export default FromPt;

import { ptToPx } from '../../lib/conversion.js';

export const FromPt = (point: string) => {
  const conversion: number = ptToPx(Number(point));
  console.log(`${conversion}px`);
};

export default FromPt;

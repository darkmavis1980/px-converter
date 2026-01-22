import { pxToPt } from '../../lib/conversion.js';

export const ToPt = (pixel: string) => {
  const conversion: number = pxToPt(Number(pixel));
  console.log(`${conversion}pt`);
};

export default ToPt;

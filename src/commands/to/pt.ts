import { pxToPt } from '../../lib/conversion';

export const ToPt = (pixel: string) => {
  const conversion: number = pxToPt(Number(pixel));
  console.log(`${conversion}pt`);
};

export default ToPt;

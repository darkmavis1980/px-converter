import { hexToRgb } from '../../lib/conversion';

export const ToRGB = (hex: string) => {
  const conversion: number[] = hexToRgb(hex);
  console.log(`rgb(${conversion.join(',')})`);
};

export default ToRGB;

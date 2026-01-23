import { hexToRgb } from '../../lib/conversion.js';

export const ToRGB = (hex: string) => {
  const conversion: number[] = hexToRgb(hex);
  console.log(`rgb(${conversion.join(',')})`);
};

export default ToRGB;

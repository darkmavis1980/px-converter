import {
  pxToPt,
  ptToPx,
  pxToRem,
  remToPx,
  generateRemTable,
  generatePtTable,
  hexToRgb,
} from '../../src/lib/conversion';
import { TTable } from '../../src/lib/interfaces/types';

describe('conversion Library', () => {
  describe('Function pxToPt', () => {
    it('should return the pt value for the given px value', () => {
      expect(pxToPt(16)).toEqual(12);
    });
  });

  describe('Function ptToPx', () => {
    it('should return the pt value for the given px value', () => {
      expect(ptToPx(12)).toEqual(16);
    });
  });

  describe('Function pxToRem', () => {
    it('should return the rem value for the given px value', () => {
      expect(pxToRem(32)).toEqual(2);
    });

    it('should return the rem value for the given px value and the base font given', () => {
      expect(pxToRem(36, 18)).toEqual(2);
    });
  });

  describe('Function remToPx', () => {
    it('should return the px value for the given rem value', () => {
      expect(remToPx(2)).toEqual(32);
    });

    it('should return the px value for the given rem value and the base font given', () => {
      expect(remToPx(2, 18)).toEqual(36);
    });
  });

  describe('Function generateRemTable', () => {
    it('should return an array of conversion px to rem', () => {
      const result: TTable = generateRemTable();
      // expect(result).toBe.an('array');
      expect(result[0].px).not.toBeUndefined();
      const resultWithRange: TTable = generateRemTable([10, 18]);
      // expect(resultWithRange).toBe.an('array');
      expect(resultWithRange[0].px).not.toBeUndefined();
      expect(resultWithRange.length).toEqual(9);
      const resultWithBaseFont: TTable = generateRemTable([10, 18], 18);
      // expect(resultWithBaseFont).toBe.an('array');
      expect(resultWithBaseFont[0].px).not.toBeUndefined();
    });
  });

  describe('Function generatePtTable', () => {
    it('should return an array of conversion px to rem', () => {
      const result: TTable = generatePtTable();
      //expect(result).to.be.an('array')
      expect(result[0].px).not.toBeUndefined();
      const resultWithRange: TTable = generatePtTable([10, 18]);
      //expect(resultWithRange).to.be.an('array')
      expect(resultWithRange[0].px).not.toBeUndefined();
      expect(resultWithRange.length).toEqual(9);
    });
  });

  describe('Function hexToRgb', () => {
    it('should return an array of conversion from hex to rgb', () => {
      const resultWhite: number[] = hexToRgb('FFF');
      //expect(resultWhite).any(Array);
      expect(resultWhite[0]).toEqual(255);
      expect(resultWhite[1]).toEqual(255);
      expect(resultWhite[2]).toEqual(255);
      const resultWhiteLong: number[] = hexToRgb('FFFFFF');
      //expect(resultWhiteLong).to.be.an('array')
      expect(resultWhiteLong[0]).toEqual(255);
      const resultBlack: number[] = hexToRgb('000000');
      //expect(resultBlack).to.be.an('array')
      expect(resultBlack[0]).toEqual(0);
      expect(resultBlack[1]).toEqual(0);
      expect(resultBlack[2]).toEqual(0);
    });
  });
});

import {expect} from '@oclif/test'
import {
  pxToPt,
  ptToPx,
  pxToRem,
  remToPx,
  generateRemTable,
  generatePtTable,
} from '../../src/lib/convertion'
import {TTable} from '../../src/lib/interfaces/types'

describe('Convertion Library', () => {
  describe('Function pxToPt', () => {
    it('should return the pt value for the given px value', () => {
      expect(pxToPt(16)).to.equal(12)
    })
  })

  describe('Function ptToPx', () => {
    it('should return the pt value for the given px value', () => {
      expect(ptToPx(12)).to.equal(16)
    })
  })

  describe('Function pxToRem', () => {
    it('should return the rem value for the given px value', () => {
      expect(pxToRem(32)).to.equal(2)
    })

    it('should return the rem value for the given px value and the base font given', () => {
      expect(pxToRem(36, 18)).to.equal(2)
    })
  })

  describe('Function remToPx', () => {
    it('should return the px value for the given rem value', () => {
      expect(remToPx(2)).to.equal(32)
    })

    it('should return the px value for the given rem value and the base font given', () => {
      expect(remToPx(2, 18)).to.equal(36)
    })
  })

  describe('Function generateRemTable', () => {
    it('should return an array of conversion px to rem', () => {
      const result: TTable = generateRemTable()
      expect(result).to.be.an('array')
      expect(result[0].px).not.to.be.undefined
      const resultWithRange: TTable = generateRemTable([10, 18])
      expect(resultWithRange).to.be.an('array')
      expect(resultWithRange[0].px).not.to.be.undefined
      expect(resultWithRange.length).to.equal(9)
      const resultWithBaseFont: TTable = generateRemTable([10, 18], 18)
      expect(resultWithBaseFont).to.be.an('array')
      expect(resultWithBaseFont[0].px).not.to.be.undefined
    })
  })

  describe('Function generatePtTable', () => {
    it('should return an array of conversion px to rem', () => {
      const result: TTable = generatePtTable()
      expect(result).to.be.an('array')
      expect(result[0].px).not.to.be.undefined
      const resultWithRange: TTable = generatePtTable([10, 18])
      expect(resultWithRange).to.be.an('array')
      expect(resultWithRange[0].px).not.to.be.undefined
      expect(resultWithRange.length).to.equal(9)
    })
  })
})

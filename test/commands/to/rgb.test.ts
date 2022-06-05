import {expect, test} from '@oclif/test'

describe('to:rgb with short hex', () => {
  test
  .stdout()
  .command(['to:rgb', 'FFF'])
  .it('runs to:rgb FFF', ctx => {
    expect(ctx.stdout).to.contain('255,255,255')
  })
})

describe('to:rgb with normal hex', () => {
  test
  .stdout()
  .command(['to:rgb', 'FFFFFF'])
  .it('runs to:rgb FFFFFF', ctx => {
    expect(ctx.stdout).to.contain('255,255,255')
  })
})

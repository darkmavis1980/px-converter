import {expect, test} from '@oclif/test'

describe('from:pt', () => {
  test
  .stdout()
  .command(['from:pt', '12'])
  .it('runs from:pt 12', ctx => {
    expect(ctx.stdout).to.contain('16px')
  })
})

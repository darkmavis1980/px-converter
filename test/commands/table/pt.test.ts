import {expect, test} from '@oclif/test'

describe('table:pt', () => {
  test
  .stdout()
  .command(['table:pt'])
  .it('runs table:pt', ctx => {
    expect(ctx.stdout).to.contain('16px')
  })
})

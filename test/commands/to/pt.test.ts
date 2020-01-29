import {expect, test} from '@oclif/test'

describe('to:pt', () => {
  test
  .stdout()
  .command(['to:pt', '16'])
  .it('runs to:pt 16', ctx => {
    expect(ctx.stdout).to.contain('12pt')
  })
})

import {expect, test} from '@oclif/test'

describe('from:rem', () => {
  test
  .stdout()
  .command(['from:rem', '2'])
  .it('runs from:rem 2', ctx => {
    expect(ctx.stdout).to.contain('32px')
  })

  test
  .stdout()
  .command(['from:rem', '2', '--base', '18'])
  .it('runs from:rem 2 --base 18', ctx => {
    expect(ctx.stdout).to.contain('36px')
  })
})


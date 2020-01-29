import {expect, test} from '@oclif/test'

describe('table:rem', () => {
  test
  .stdout()
  .command(['table:rem'])
  .it('runs table:rem', ctx => {
    expect(ctx.stdout).to.contain('32px')
  })

  test
  .stdout()
  .command(['table:rem', '--base', '18'])
  .it('runs table:rem --base 18', ctx => {
    expect(ctx.stdout).to.contain('36px')
  })
})


import {expect, test} from '@oclif/test'

describe('to:rem', () => {
  test
  .stdout()
  .command(['to:rem', '32'])
  .it('runs to:rem 32', ctx => {
    expect(ctx.stdout).to.contain('2rem')
  })

  test
  .stdout()
  .command(['to:rem', '36', '--base', '18'])
  .it('runs to:rem 36 --base 18', ctx => {
    expect(ctx.stdout).to.contain('2rem')
  })
})


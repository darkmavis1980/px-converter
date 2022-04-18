import {expect, test} from '@oclif/test'

xdescribe('joules', () => {
  test
  .stdout()
  .command(['joules'])
  .stdin('0.249')
  .stdin('30')
  .it('runs joules', ctx => {
    expect(ctx.stdout).to.contain('16px')
  })
})

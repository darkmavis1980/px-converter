import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import {generateRemTable} from '../../lib/conversion'
import {DEFAULT_RANGE, DEFAULT_BASEFONT} from '../../constants'

export default class TableRem extends Command {
  static description = `Return a table of conversions between pixels and rems, if no BASEPIXEL value is passed, it will default to ${DEFAULT_BASEFONT} pixels`

  static examples = [
    `$ px-converter table:rem
Pixel     Rem
10px      0.625rem
11px      0.6875rem
12px      0.75rem
...
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    base: flags.integer({char: 'b', description: 'Base pixel', default: DEFAULT_BASEFONT}),
    // flag with a value (-r, --range=MIN,MAX)
    range: flags.string({char: 'r', description: 'Range of pixels', default: DEFAULT_RANGE.toString()}),
  }

  static args = [{name: 'basepixel', description: 'Base Pixel'}]

  async run(): Promise<void> {
    const {flags} = this.parse(TableRem)
    const basepixel = flags.base || DEFAULT_BASEFONT
    const range: number[]|string[] = flags.range ? flags.range.split(',').map(i => Number(i)) : DEFAULT_RANGE

    cli.table(generateRemTable(range, basepixel), {
      px: {
        header: 'Pixel',
        minWidth: 10,
      },
      rem: {
        header: 'Rem',
        minWidth: 10,
      },
    })
  }
}

import {Command, flags} from '@oclif/command'
import {cli} from 'cli-ux'
import {generateTable} from '../../lib/convertion'
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
    // flag with a value (-r, --range=MIN,MAX)
    range: flags.string({char: 'r', description: 'Range of pixels', default: DEFAULT_RANGE.toString()}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'basepixel', description: 'Base Pixel'}]

  async run() {
    const {args, flags} = this.parse(TableRem)
    const basepixel = args.basepixel || DEFAULT_BASEFONT
    const range: number[]|string[] = flags.range ? flags.range.split(',').map(i => Number(i)) : DEFAULT_RANGE

    cli.table(generateTable(basepixel, range), {
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

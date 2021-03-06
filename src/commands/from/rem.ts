import {Command, flags} from '@oclif/command'
import {remToPx} from '../../lib/convertion'
import {DEFAULT_BASEFONT} from '../../constants'

export default class ToRem extends Command {
  static description = 'Convert a given rem value to the corresponding pixel value'

  static examples = [
    `$ px-converter from:rem 2
32px
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    base: flags.integer({char: 'b', description: 'Base pixel', default: DEFAULT_BASEFONT}),
  }

  static args = [{name: 'rem', description: 'Rem to convert'}]

  async run(): Promise<void> {
    const {args, flags} = this.parse(ToRem)

    const rem: number = args.rem ? Number(args.rem) : DEFAULT_BASEFONT
    const base: number = flags.base ? Number(flags.base) : DEFAULT_BASEFONT
    const convertion: number = remToPx(rem, base)
    this.log(`${convertion}px`)
  }
}

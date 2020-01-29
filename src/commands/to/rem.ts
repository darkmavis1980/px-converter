import {Command, flags} from '@oclif/command'
import {pxToRem} from '../../lib/convertion'
import {DEFAULT_BASEFONT} from '../../constants'

export default class ToRem extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ px-converter to:rem 16
1rem
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-r, --range=MIN,MAX)
    base: flags.integer({char: 'b', description: 'Base pixel', default: DEFAULT_BASEFONT}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'pixel', description: 'Pixel to convert'}]

  async run() {
    const {args, flags} = this.parse(ToRem)

    const pixel: number = args.pixel ? Number(args.pixel) : DEFAULT_BASEFONT
    const base: number = flags.base ? Number(flags.base) : DEFAULT_BASEFONT
    const convertion: number = pxToRem(pixel, base)
    this.log(`${convertion} rem`)
  }
}

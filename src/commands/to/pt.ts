import {Command, flags} from '@oclif/command'
import {pxToPt} from '../../lib/convertion'
import {DEFAULT_BASEFONT} from '../../constants'

export default class ToPt extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ px-converter to:rem 16
1rem
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'pixel', description: 'Pixel to convert'}]

  async run() {
    const {args} = this.parse(ToPt)

    const pixel: number = args.pixel ? Number(args.pixel) : DEFAULT_BASEFONT
    const convertion: number = pxToPt(pixel)
    this.log(`${convertion} pt`)
  }
}

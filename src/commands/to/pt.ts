import {Command, flags} from '@oclif/command'
import {pxToPt} from '../../lib/convertion'
import {DEFAULT_BASEFONT} from '../../constants'

export default class ToPt extends Command {
  static description = 'Convert a given pixel value to the corresponding point value'

  static examples = [
    `$ px-converter to:pt 16
12pt
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'pixel', description: 'Pixel to convert'}]

  async run(): Promise<void> {
    const {args} = this.parse(ToPt)

    const pixel: number = args.pixel ? Number(args.pixel) : DEFAULT_BASEFONT
    const convertion: number = pxToPt(pixel)
    this.log(`${convertion}pt`)
  }
}

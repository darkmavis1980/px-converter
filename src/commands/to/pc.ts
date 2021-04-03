import {Command, flags} from '@oclif/command'
import {pxToPc} from '../../lib/convertion'

export default class ToPc extends Command {
  static description = 'Convert a given pixel value to the corresponding pica value'

  static examples = [
    `$ px-converter to:pc 16
1 pc
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'pixel', description: 'Pixel to convert'}]

  async run(): Promise<void> {
    const {args} = this.parse(ToPc)

    const pixel = Number(args.pixel)
    const convertion: number = pxToPc(pixel)
    this.log(`${convertion}pc`)
  }
}

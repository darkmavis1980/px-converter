import {Command, flags} from '@oclif/command'
import {ptToPx} from '../../lib/convertion'
import {DEFAULT_BASEFONT} from '../../constants'

export default class FromPt extends Command {
  static description = 'Convert a given point (pt) value to the corresponding pixel value'

  static examples = [
    `$ px-converter from:pt 12
16px
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'point', description: 'Point to convert'}]

  async run(): Promise<void> {
    const {args} = this.parse(FromPt)

    const point: number = args.point ? Number(args.point) : DEFAULT_BASEFONT
    const convertion: number = ptToPx(point)
    this.log(`${convertion}px`)
  }
}

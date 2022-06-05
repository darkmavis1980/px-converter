import {Command, flags} from '@oclif/command'
import {hexToRgb} from '../../lib/conversion'

export default class ToRGB extends Command {
  static description = 'Convert a given hex value to the corresponding rgb value'

  static examples = [
    `$ px-converter to:rgb FFFFFF
rgb(255,255,255)
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'hex', description: 'Hex value'}]

  async run(): Promise<void> {
    const {args} = this.parse(ToRGB)

    const conversion: number[] = hexToRgb(args.hex)
    this.log(`rgb(${conversion.join(',')})`)
  }
}

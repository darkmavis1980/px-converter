import {Command, flags} from '@oclif/command'
import {pcToPx} from '../../lib/convertion'
import {DEFAULT_BASEFONT} from '../../constants'

export default class FromPc extends Command {
  static description = 'Convert a given picas (pc) value to the corresponding pixel value'

  static examples = [
    `$ px-converter from:pc 1
16px
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'pica', description: 'Picas to convert'}]

  async run(): Promise<void> {
    const {args} = this.parse(FromPc)

    const pica: number = args.pica ? Number(args.pica) : DEFAULT_BASEFONT
    const convertion: number = pcToPx(pica)
    this.log(`${convertion}px`)
  }
}

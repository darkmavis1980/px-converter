import {Command, flags} from '@oclif/command'
import {feetToMetres} from '../../lib/convertion'

export default class FromFeet extends Command {
  static description = 'Convert a given feet value to the corresponding metres'

  static examples = [
    `$ px-converter from:feet 3
91.44 mt
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'feet', description: 'Feet to convert'}]

  async run(): Promise<void> {
    const {args: {feet}} = this.parse(FromFeet)

    const convertion: number = feetToMetres(feet)
    this.log(`${convertion} mt`)
  }
}

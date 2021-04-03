import {Command, flags} from '@oclif/command'
import {metresToFeet} from '../../lib/convertion'

export default class ToFeet extends Command {
  static description = 'Convert a given metres value to the corresponding feet'

  static examples = [
    `$ px-converter to:feet 1
3.28084 ft
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'metres', description: 'Metres to convert'}]

  async run(): Promise<void> {
    const {args: {metres}} = this.parse(ToFeet)

    const convertion: number = metresToFeet(metres)
    this.log(`${convertion} ft`)
  }
}

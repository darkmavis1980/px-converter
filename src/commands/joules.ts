import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'
import {GRAVITY} from '../constants'

export default class ToJoules extends Command {
  static description = 'Take mass and height as input and returns the potential energy in Joules'

  static examples = [
    `$ px-converter joules
? Specify the mass in Kg: 0.249
? Specify the height from the ground in meters: 50
An object with mass of 0.249Kg from an height of 50 meters, will generate 122.0928 Joules
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run(): Promise<void> {
    const {mass, height} = await inquirer.prompt([
      {
        name: 'mass',
        type: 'number',
        message: 'Specify the mass in Kg:',
        validate: ({mass}: {mass: number}): boolean|string => {
          if (!Number.isNaN(Number(mass))) {
            return 'Please enter a valid number'
          }

          return true
        },
      },
      {
        name: 'height',
        type: 'number',
        message: 'Specify the height from the ground in metres:',
        validate: ({height}: {height: number}): boolean|string => {
          if (!Number.isNaN(Number(height))) {
            return 'Please enter a valid number'
          }

          return true
        },
      },
    ])
    const velocity = (2 * height * GRAVITY)
    const joules = (mass * velocity) / 2
    this.log(`An object with mass of ${mass}Kg from an height of ${height} metres, will generate ${joules.toFixed(4)} Joules`)
  }
}

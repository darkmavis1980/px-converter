import * as inquirer from 'inquirer';
import { GRAVITY } from '../constants';

export const ToJoules = async () => {
  const { mass, height } = await inquirer.prompt([
    {
      name: 'mass',
      type: 'number',
      message: 'Specify the mass in Kg:',
      validate: ({ mass }: { mass: number }): boolean | string => {
        if (!Number.isNaN(Number(mass))) {
          return 'Please enter a valid number';
        }

        return true;
      },
    },
    {
      name: 'height',
      type: 'number',
      message: 'Specify the height from the ground in metres:',
      validate: ({ height }: { height: number }): boolean | string => {
        if (!Number.isNaN(Number(height))) {
          return 'Please enter a valid number';
        }

        return true;
      },
    },
  ]);
  const velocity = 2 * height * GRAVITY;
  const joules = (mass * velocity) / 2;
  console.log(
    `An object with mass of ${mass}Kg from an height of ${height} metres, will generate ${joules.toFixed(4)} Joules`,
  );
};

export default ToJoules;

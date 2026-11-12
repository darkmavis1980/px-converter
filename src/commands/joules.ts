import inquirer from 'inquirer';
import { GRAVITY } from '../constants.js';

const validateNumber = (value: number | undefined): boolean | string =>
  value !== undefined && !Number.isNaN(value) ? true : 'Please enter a valid number';

export const ToJoules = async () => {
  const { mass, height } = await inquirer.prompt<{ mass: number; height: number }>([
    {
      name: 'mass',
      type: 'number',
      message: 'Specify the mass in Kg:',
      validate: validateNumber,
    },
    {
      name: 'height',
      type: 'number',
      message: 'Specify the height from the ground in metres:',
      validate: validateNumber,
    },
  ]);
  const velocity = 2 * height * GRAVITY;
  const joules = (mass * velocity) / 2;
  console.log(
    `An object with mass of ${mass}Kg from an height of ${height} metres, will generate ${joules.toFixed(4)} Joules`,
  );
};

export default ToJoules;

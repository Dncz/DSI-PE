import {Student} from "../model/student";
import chalk from "chalk";

export const findOperation = (id: string) => {
  return new Promise((resolve, reject) => {
    if (!/^[0-9]{8}[a-zA-Z]$/.test(id)) {
      reject(new Error(chalk.red('dni debe tener a 8 números y una letra')));
    } else {
      Student.findOne({dni: id}).then((found) => {
        if (found) {
          resolve(found);
        } else {
          reject(new Error(chalk.red('El estudiante no existe')));
        }
      }).catch((err) => {
        reject(err);
      });
    }
  });
};

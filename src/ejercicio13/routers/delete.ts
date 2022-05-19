import {Student} from "../model/student";
import chalk from "chalk";

export const deleteOperation = (id: string) => {
  return new Promise((resolve, reject) => {
    if (!/^[0-9]{8}[a-zA-Z]$/.test(id)) {
      reject(new Error(chalk.red('dni debe tener a 8 números y una letra')));
    } else {
      Student.findOneAndDelete({dni: id}).then((found) => {
        if (found) {
          resolve(found);
        } else {
          reject(new Error(chalk.red('El usuario no existe')));
        }
      }).catch((err) => {
        reject(err);
      });
    }
  });
};

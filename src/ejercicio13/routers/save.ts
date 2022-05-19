import {Student} from "../model/student";
import {interfaz} from "../model/student";
import chalk from "chalk";

export const saveOperation = (user: interfaz) => {
  const user1 = new Student(user);
  return new Promise((resolve, reject) => {
    Student.findOne({dni: user1.dni}).then((found) => {
      if (found) {
        reject(new Error(chalk.red('El usuario ya existe')));
      } else {
        // guardamos el usuario a la base de datos
        user1.save().then(() => {
          resolve(user1);
        }).catch((err) => {
          reject(err);
        });
      }
    }).catch((err) => {
      reject(err);
    });
  });
};

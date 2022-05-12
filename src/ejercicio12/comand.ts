import {ResponseType} from './types';
import {spawn} from 'child_process';
import chalk from 'chalk';

/**
 * Función que ejecuta el comando
 * @param {string} command comando a ejecutar
 * @param  {string} args Argumentos
 * @returns {Promise<string>} Promesa con la respuesta
 */
export const execmd = (command: string, args: string) => {
  return new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (command === '' || args === '') {
        reject(new Error('Error'));
      } else {
        // aquí va spawn del comando
        const comandChildProcess = spawn(command, args.split(' '));
        // recogemos los datos del comando
        let comandoOutput: ResponseType = {output: ''};
        comandChildProcess.stdout.on('data', (data) => {
          comandoOutput.output += data;
        });

        // en caso de error
        comandChildProcess.stderr.on('data', () => {
          comandoOutput.err = 'Se ha producido un error de lectura de datos';
          // reject(new Error(comandoOutput.err));
          reject(JSON.stringify(comandoOutput.err));
        });
        // cuando termina el proceso
        comandChildProcess.on('close', (code) => {
          // mensaje de error
          if (code !== 0) {
            console.log(chalk.red('Comando process exited with code ' + code));
            reject(JSON.stringify('Comando process exited with code ' + code));
          }
          // envío del mensaje
          console.log(chalk.magenta(comandoOutput.output));
          resolve(JSON.stringify(comandoOutput.output));
        });
      }
    }, 1000);
  });
};

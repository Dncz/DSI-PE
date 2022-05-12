// import {ResponseType} from '../ejercicio12/types';
// import {spawn} from 'child_process';
// import chalk from 'chalk';


// export const comando = (comand: string, args: string,
//     cb: (error: ResponseType | undefined, respuesta: ResponseType | undefined) => void) => {
// // aquí va spawn del comando
//   const comandChildProcess = spawn(comand, args.split(','));

//   // recogemos los datos del comando
//   let comandoOutput: ResponseType = {success: true, output: ''};
//   comandChildProcess.stdout.on('data', (data) => comandoOutput.output += data);

//   // en caso de error
//   comandChildProcess.stderr.on('data', () => {
//     comandoOutput.err = 'Se ha producido un error de lectura de datos';
//     comandoOutput.success = false;
//   });

//   // cuando termina el proceso
//   comandChildProcess.on('close', (code) => {
//   // mensaje de error
//     if (code !== 0) {
//       console.log(chalk.red('Comando process exited with code ' + code));
//       cb(comandoOutput, undefined);
//     }
//     // envío del mensaje
//     console.log(comandoOutput);
//     cb(undefined, comandoOutput);
//   });
// };

import express from 'express';
import {join} from 'path';
import {execmd} from './comand';
/**
 * Para ejecutar en Thunder client:
 * http://localhost:3000/comando?cmd=cat&args=./src/ejercicio12/prueba.txt
 * http://localhost:3000/execmd?cmd=cat&args=-n ./src/ejercicio12/prueba.txt
 */

/**
 * Creamos un servidor con la invocación de la función express
 */
const app = express();

/**
 * Indicamos el directorio público de nuestro servidor
 */
app.use(express.static(join(__dirname, '../public')));

/**
 * Establecemos la ruta o punto de acceso
 */
app.get('/execmd', (req, res) => {
  // si no se introduce el comando y los argumentos
  if (!req.query.cmd || !req.query.args) {
    res.status(406).send({err: 'A command has to be provided'});
  } else {
    // ejecución de la función execmd
    execmd(req.query.cmd as string, req.query.args as string).then((result) => {
      res.send({result: result});
    }).catch((err) => {
      res.send({err: err});
    });
  }
});

/**
 * En caso de ruta por defecto
 */
app.get('*', (_, res) => {
  res.status(404).send('Not found');
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

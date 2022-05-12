import express from 'express';
import {join} from 'path';
import {execmd} from './comand';
/**
 * Para ejecutar en Thunder client:
 * http://localhost:3000/comando?cmd=cat&args=./src/ejercicio12/prueba.txt
 * http://localhost:3000/execmd?cmd=cat&args=-n ./src/ejercicio12/prueba.txt
 */

const app = express();

app.use(express.static(join(__dirname, '../public')));

app.get('/execmd', (req, res) => {
  if (!req.query.cmd || !req.query.args) {
    res.status(406).send({err: 'A command has to be provided'});
  } else {
    execmd(req.query.cmd as string, req.query.args as string).then((result) => {
      res.send({result: result});
    }).catch((err) => {
      res.send({err: err});
    });
  }
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});

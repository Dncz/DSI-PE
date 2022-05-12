import 'mocha';
import {expect} from 'chai';
import {execmd} from '../../src/ejercicio12/comand';

describe('Test comando', () => {
  it('comprobamos si hay error', () => {
    return execmd('cat', './src/ejercicio12/prueb.txt').catch((err) => {
      expect(err.toString()).to.be.equal('"Se ha producido un error de lectura de datos"');
    });
  });

  it('comprobamos si hay éxito', () => {
    return execmd('cat', './src/ejercicio12/prueba.txt').then((result) => {
      expect(result.toString()).to.be.equal('"Hello world!"');
    });
  });
});

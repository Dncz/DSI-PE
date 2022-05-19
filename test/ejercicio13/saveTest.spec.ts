import 'mocha';
import {expect} from 'chai';
import {saveOperation} from '../../src/ejercicio13/routers/save';
import {interfaz} from '../../src/ejercicio13/model/student';
import '../../src/ejercicio13/db/mongoose';
import {connection} from 'mongoose';

describe('Test si guarda un estudiante a la base de datos', () => {
  const student1: interfaz = {
    name: 'ThirdUser',
    surname: 'Surname',
    dni: '12344678C',
    age: 20,
    gmail: 'alu0164115711@ull.edu.es',
    degree: 'ing informática',
    subjects: ['UYA', 'Redes II'],
  };
  it('Guardando el usuario 1', () => {
    saveOperation(student1).then((result) => {
      expect(result).to.be.deep.equal(student1);
      connection.close();
    });
  });
  it('Error a guardar el usuario de nuevo', () => {
    saveOperation(student1).catch((err) => {
      expect(err).to.be.instanceOf(Error);
      connection.close();
    });
  });
});

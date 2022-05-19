import {connection} from "mongoose";
import {interfaz} from "./model/student";
import {saveOperation} from "./routers/save";
import {deleteOperation} from "./routers/delete";
import {findOperation} from "./routers/find";
import {updateOperation} from "./routers/update";
import './db/mongoose';


const student1: interfaz = {
  name: 'FirstUser',
  surname: 'Surname',
  dni: '12345678A',
  age: 20,
  gmail: 'alu0111111111@ull.edu.es',
  degree: 'ing informática',
  subjects: ['UYA', 'Redes II'],
};

const student2: interfaz = {
  name: 'SecondUser',
  surname: 'Surname',
  dni: '12345678B',
  age: 21,
  gmail: 'alu011328348@ull.edu.es',
  degree: 'ing informática',
  subjects: ['DSI'],
};

if (process.argv[2] == 'save') {
  saveOperation(student1).then((result) => {
    console.log(result);
    connection.close();
  }).catch((err) => {
    console.log(err);
    connection.close();
  });
}

if (process.argv[2] == 'delete') {
  deleteOperation(student2.dni).then((result) => {
    console.log(result);
    connection.close();
  }).catch((err) => {
    console.log(err);
    connection.close();
  });
}

if (process.argv[2] == 'find') {
  findOperation(student1.dni).then((result) => {
    console.log(result);
    connection.close();
  }).catch((err) => {
    console.log(err);
    connection.close();
  });
}

if (process.argv[2] == 'update') {
  updateOperation(student1.dni, student2).then((result) => {
    console.log(result);
    connection.close();
  }).catch((err) => {
    console.log(err);
    connection.close();
  });
}

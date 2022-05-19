import {Document, model} from 'mongoose';
import {Schema} from 'mongoose';
import validator from 'validator';

interface StudentInterface extends Document {
  name: string,
  surname: string,
  dni: string,
  age: number,
  gmail: string,
  degree: string,
  subjects: string[],
}

export interface interfaz {
  name: string,
  surname: string,
  dni: string,
  age: number,
  gmail: string,
  degree: string,
  subjects: string[],
}

const StudentSchema = new Schema<StudentInterface>({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length < 3) {
        throw new Error('Name must be at least 3 characters long');
      } else if (!validator.isAlphanumeric(value)) {
        throw new Error('Name must contain only letters');
      } else if (!value.match(/^[A-Z]/)) {
        throw new Error('Name must start with a capital letter');
      }
    },
  },
  surname: {
    type: String,
    required: true,
    trim: true,
    validate: (value: string) => {
      if (value.length < 3) {
        throw new Error('Surname must be at least 3 characters long');
      } else if (!validator.isAlphanumeric(value)) {
        throw new Error('Surname must contain only letters');
      } else if (!value.match(/^[A-Z]+/)) {
        throw new Error('Surname must start with a capital letter');
      }
    },
  },
  dni: {
    type: String,
    required: false,
    trim: true,
    unique: true,
    validate: (value: string) => {
      if (value.length !== 9) {
        throw new Error('NIF/NIE must be 9 characters long');
      } else if (!value.match(/^[0-9]{8}[a-zA-Z]$/)) {
        throw new Error('NIF/NIE must contain only numbers and one letter');
      }
    },
  },
  age: {
    type: Number,
    required: true,
  },
  gmail: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    validate: (value: string) => {
      if (value.length !== 24) {
        throw new Error('gmail must be of type aluxxxxxxxxxx@ull.edu.es');
      } else if (!value.match(/^alu[0-9]{10}@ull\.edu\.es$/)) {
        throw new Error('NIF/NIE must contain only numbers and one letter');
      }
    },
  },
  degree: {
    type: String,
    required: true,
  },
  subjects: {
    type: [String],
    required: true,
  },
});

export const Student = model<StudentInterface>('Student', StudentSchema);

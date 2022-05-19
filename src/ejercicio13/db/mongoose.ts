import {connect, connection} from 'mongoose';

connect('mongodb://127.0.0.1:27017/Practica13', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB: ', err.message);
  connection.close();
});


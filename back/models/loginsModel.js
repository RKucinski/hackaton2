const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoginSchema = new Schema({

  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
});

const Login = mongoose.model('login', LoginSchema); // nom de la collec, structure des éléments ajoutés

module.exports = Login;
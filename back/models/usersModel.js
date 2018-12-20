const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

  loginID: String,
  supplierID: {type: Schema.Types.ObjectId, ref: 'supplier', required: true},
  homeID: {type: Schema.Types.ObjectId, ref: 'home', required: true},
  equipment:[
    {
      equipmentID: {type: Schema.Types.ObjectId, ref: 'equipment', required: true},
      programID: {type: Schema.Types.ObjectId, ref: 'program', required: true},
      isOn: Boolean 
    }
  ]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
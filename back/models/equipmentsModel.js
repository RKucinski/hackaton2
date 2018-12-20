const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EquipmentSchema = new Schema({

  type: {
    type: String,
    required: [true, 'Type is required']
  },
  brand: {
    type: String,
    required: [true, 'brand is required']
  },
  model: {
    type: String,
    required: [true, 'model is required']
  },
});

const Equipment = mongoose.model('equipment', EquipmentSchema);

module.exports = Equipment;
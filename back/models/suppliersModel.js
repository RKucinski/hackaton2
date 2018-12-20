const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({

  name: {
    type: String,
    required: [true, 'Name is required']
  },
  price: {
    type: Number,
    required: [true, 'brand is required']
  },
});

const Supplier = mongoose.model('supplier', SupplierSchema);

module.exports = Supplier;
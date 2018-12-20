const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  house: {
    type: Boolean,
    required: [true, 'House type is required']
  },
  surface: {
    type: Number,
    required: [true, 'Surface is required']
  },
  people: {
    type: Number,
    required: [true, 'Number of people is required']
  },
  heatingSystem: {
    type: String,
    required: [true, 'Heating nature is required']
  },
  waterSystem: {
    type: String,
    required: [true, 'Water of people is required']
  },
  habits: [
    {
      day : String,
      plages : [
        {
          begin: String,
          end: String,
        }
      ]
    }
  ]
});

const Home = mongoose.model('home', HomeSchema);

module.exports = Home;
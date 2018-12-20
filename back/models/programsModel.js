const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgramsSchema = new Schema({

  days: [
    {
      day : String,
      plages : [
        {
          begin: String,
          end: String
        }
      ]
    }
  ]

});

const Program = mongoose.model('program', ProgramsSchema);

module.exports = Program;
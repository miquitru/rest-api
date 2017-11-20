const mongoose = require('mongoose');
const schema = mongoose.Schema;

const citySchema = new schema({
  name:{
    type: String,
    required:[true,'Name field is required']
  },
  country:{
    type: String
  },
  population:{
    type : Number,
    default: 0
  }
  // add geo location
});

const City = mongoose.model('city', citySchema);
module.exports = City;

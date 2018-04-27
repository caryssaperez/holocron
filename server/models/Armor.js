const mongoose = require('mongoose');
const { Schema } = mongoose;

const armorSchema = new Schema({
  name: String,
  type: String,
  rating: Integer
});

mongoose.model('armor', armorSchema);

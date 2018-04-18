const mongoose = require('mongoose');
const { Schema } = mongoose;

const armorSchema = new Schema({
  name: String
});

mongoose.model('armor', armorSchema);

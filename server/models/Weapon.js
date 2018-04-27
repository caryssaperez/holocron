const mongoose = require('mongoose');
const { Schema } = mongoose;

const weaponSchema = new Schema({
  name: String,
  damage: Integer
});

mongoose.model('weapons', weaponSchema);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const weaponSchema = new Schema({
  name: String
});

mongoose.model('weapons', weaponSchema);

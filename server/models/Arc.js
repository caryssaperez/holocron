const mongoose = require('mongoose');
const { Schema } = mongoose;

const arcSchema = new Schema({
  title: String
});

mongoose.model('arcs', arcSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roles: [{
    type: String,
    required: true,
    enum:['user','admin'],
    default:'usar',
  }]
});

module.exports = mongoose.model('Customer', schema);

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  grade: String,
  email: String,
});

module.exports = mongoose.model('Student', studentSchema);
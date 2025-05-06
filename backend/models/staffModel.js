
const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  role: { type: String, default: 'Staff' },  // Default role for staff
  password: { type: String, required: true },
});

module.exports = mongoose.model('Staff', staffSchema);

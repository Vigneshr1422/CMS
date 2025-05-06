// const mongoose = require('mongoose');

// const adminSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   department: String,
//   section: String,
//   role: { type: String, default: 'Admin' },
//   password: String,
// });

// module.exports = mongoose.model('Admin', adminSchema);

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  section: { type: String, required: true },
  role: { type: String, default: 'Admin' },  // Default role for admin
  password: { type: String, required: true },
});

module.exports = mongoose.model('Admin', adminSchema);

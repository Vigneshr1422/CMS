const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date },
  phoneNumber: { type: String },
  email: { type: String, required: true, unique: true },
  staff: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff' },  // Reference to Staff
  department: { type: String, required: true },
  section: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'Student' }, // Default role as Student
});

module.exports = mongoose.model('Student', studentSchema);

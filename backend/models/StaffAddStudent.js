const mongoose = require('mongoose');

const StaffAddStudentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true },
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  tenthPercentage: { type: Number, required: true },
  twelfthPercentage: { type: Number, required: true },
  undergradPercentage: { type: Number, required: true },
  arrears: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // User who added the student
});

module.exports = mongoose.model('StaffAddStudent', StaffAddStudentSchema);

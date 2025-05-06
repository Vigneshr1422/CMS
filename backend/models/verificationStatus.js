const mongoose = require('mongoose');

// Define the schema for verification status
const verificationStatusSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Reference to the Student model
    required: true,
  },
  internship: {
    type: Boolean,
    default: false,
  },
  project: {
    type: Boolean,
    default: false,
  },
  coCurricular: {
    type: Boolean,
    default: false,
  },
  certifications: {
    type: Boolean,
    default: false,
  },
});

const VerificationStatus = mongoose.model('VerificationStatus', verificationStatusSchema);

module.exports = VerificationStatus;

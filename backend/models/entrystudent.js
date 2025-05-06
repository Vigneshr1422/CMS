const mongoose = require('mongoose');

const entryStudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  YOP: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Optional, if you want to ensure unique emails
  },
  phone: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Referencing the User model
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('EntryStudent', entryStudentSchema);

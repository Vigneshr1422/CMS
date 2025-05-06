// controllers/studentController.js
const Student = require('../models/Student');

const addStudent = async (req, res) => {
  try {
    const staffId = req.user.id; // comes from verifyToken middleware
    const student = new Student({ ...req.body, staff: staffId });
    await student.save();
    res.status(201).json({ message: 'Student added successfully', student });
  } catch (error) {
    console.error('Error saving student:', error);
    res.status(500).json({ message: 'Failed to add student' });
  }
};

module.exports = { addStudent };

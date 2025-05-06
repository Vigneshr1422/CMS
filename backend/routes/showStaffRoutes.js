// routes/showstaffRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Staff = require('../models/staffModel');
const Student = require('../models/studentModel');

router.get('/show-staff', async (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const studentId = decoded.id;

    const student = await Student.findById(studentId);
    if (!student) return res.status(404).json({ message: 'Student not found' });

    const staffList = await Staff.find({
      department: student.department,
      section: student.section,
    }).select('-password');

    res.json(staffList);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch staff' });
  }
});

module.exports = router;

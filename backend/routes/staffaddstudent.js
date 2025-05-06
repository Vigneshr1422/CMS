const express = require('express');
const EntryStudent = require('../models/entrystudent'); // Correct model for entrystudents
const authenticate = require('../middleware/auth'); // JWT middleware

const router = express.Router();

// POST: Add a student entry
router.post('/add', authenticate, async (req, res) => {
  const { name, rollNumber, department, section, YOP } = req.body;

  try {
    const newStudent = new EntryStudent({
      name,
      rollNumber,
      department,
      section,
      YOP,
      userId: req.user.id, // Store the ID of the logged-in staff user
    });

    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET: List only students added by the logged-in user
router.get('/mystudent', authenticate, async (req, res) => {
  try {
    const students = await EntryStudent.find({ userId: req.user.id });
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

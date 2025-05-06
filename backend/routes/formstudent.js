const express = require('express');
const EntryStudent = require('../models/entrystudent'); // Import the EntryStudent model
const authenticate = require('../middleware/auth'); // Authentication middleware

const router = express.Router();

// Add student form route
router.post('/add', authenticate, async (req, res) => {
  const { name, rollNumber, department, section, YOP, email, phone } = req.body;

  try {
    // Create a new entry with the userId from the decoded JWT
    const newEntryStudent = new EntryStudent({
      name,
      rollNumber,
      department,
      section,
      YOP,
      email,   // New email field
      phone,   // New phone field
      userId: req.user.userId, // Link entry to the logged-in user
    });

    // Save the new entry to the database
    await newEntryStudent.save();
    res.status(201).json({ message: 'Student added to entrystudents successfully' });
  } catch (error) {
    console.error('Error adding student to entrystudents:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Get all entries for the logged-in user
// Get all entries for the logged-in user
router.get('/mystudent', authenticate, async (req, res) => {
  try {
    const userId = req.user.userId; // Get userId from the decoded JWT
    const entries = await EntryStudent.find({ userId }); // Fetch entries for the logged-in user

    res.json(entries); // Return the entries to the client
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ message: 'Error fetching entries' });
  }
});

// DELETE student by id
router.delete('/delete/:id', authenticate, async (req, res) => {
  try {
    const studentId = req.params.id;
    const userId = req.user.userId; // Logged-in user's ID

    const student = await EntryStudent.findOne({ _id: studentId, userId });

    if (!student) {
      return res.status(404).json({ message: 'Student not found or not authorized' });
    }

    await EntryStudent.deleteOne({ _id: studentId });
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;

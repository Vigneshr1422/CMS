const express = require('express');
const Request = require('../models/requestModel'); // Assuming you have a Request model
const authenticateToken = require('../middleware/auth'); // Middleware for token verification
const router = express.Router();

// POST route to create a new request
router.post('/', authenticateToken, async (req, res) => {
  const { title, description, staffId } = req.body;

  if (!title || !description || !staffId) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newRequest = new Request({
      title,
      description,
      staff: staffId,
      student: req.user.userId, // Automatically use logged-in student ID
    });

    await newRequest.save();
    res.status(201).json({ message: 'Request created successfully', request: newRequest });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// GET route to fetch all requests for a specific staff member
// GET route to fetch all requests for a specific staff member with full student info
router.get('/:staffId', authenticateToken, async (req, res) => {
  const { staffId } = req.params;

  try {
    const requests = await Request.find({ staff: staffId })
      .populate('student', 'name email department section')  // Include only needed student fields
      .populate('staff', 'name'); // Optional, if needed

    if (!requests.length) {
      return res.status(404).json({ message: 'No requests found for this staff' });
    }

    res.status(200).json(requests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;

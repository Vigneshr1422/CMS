const express = require('express');
const router = express.Router();
const VerificationStatus = require('../models/verificationStatus'); // Import the VerificationStatus model

// Fetch verification status for a specific student
router.get('/:studentId', async (req, res) => {
  try {
    const verification = await VerificationStatus.findOne({ studentId: req.params.studentId });

    if (!verification) {
      return res.status(404).json({ message: 'Verification data not found' });
    }

    res.json(verification);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching verification data', error });
  }
});

// Save or update verification status for a specific student
router.post('/:studentId', async (req, res) => {
  try {
    const { internship, project, coCurricular, certifications } = req.body;
    const studentId = req.params.studentId;

    // Find or create verification status for the student
    const verification = await VerificationStatus.findOneAndUpdate(
      { studentId },
      { internship, project, coCurricular, certifications },
      { new: true, upsert: true } // If not found, it will create a new document
    );

    res.json(verification);
  } catch (error) {
    res.status(500).json({ message: 'Error saving verification data', error });
  }
});

module.exports = router;

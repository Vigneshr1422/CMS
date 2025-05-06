
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/adminModel');
const Staff = require('../models/staffModel');
const Student = require('../models/studentModel');

const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;

    // Find the user based on the role
    if (role === 'Admin') {
      user = await Admin.findOne({ email });
    } else if (role === 'Staff') {
      user = await Staff.findOne({ email });
    } else if (role === 'Student') {
      user = await Student.findOne({ email });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    // Check if user exists
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password); // Assumes password is hashed
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token with email included
    const token = jwt.sign(
      { _id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // For Staff, include additional details
    if (role === 'Staff') {
      return res.json({
        token,
        staff: {
          _id: user._id,
          email: user.email,
          name: user.name,
          department: user.department,
          section: user.section,
        },
      });
    }

    // For Students, optionally return name or other info if needed
    if (role === 'Student') {
      return res.json({
        token,
        student: {
          _id: user._id,
          email: user.email,
          name: user.name,
          department: user.department,
          section: user.section,
        },
      });
    }

    // For Admins
    res.json({ token });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginUser };

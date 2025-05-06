
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/studentModel');
const Staff = require('../models/staffModel');
const Admin = require('../models/adminModel');

const router = express.Router();

// Middleware to authenticate token
const authenticateToken = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

// 🟡 Register Route
router.post('/register', async (req, res) => {
  const { name, email, department, section, role, password, staff } = req.body;

  if (!name || !email || !department || !section || !role || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  let userModel;
  if (role === 'Student') userModel = Student;
  else if (role === 'Staff') userModel = Staff;
  else if (role === 'Admin') userModel = Admin;
  else return res.status(400).json({ message: 'Invalid role' });

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    if (role === 'Student' && staff) {
      const existingStaff = await Staff.findById(staff);
      if (!existingStaff) return res.status(400).json({ message: 'Staff member not found' });
    }

    const newUser = new userModel({
      name,
      email,
      department,
      section,
      role,
      password: hashedPassword,
      staff: staff || null,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ 🟢 Login Route — Updated with staff object
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  console.log('🔐 Login Request Body:', req.body);

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password, and role are required.' });
  }

  if (!['Student', 'Staff', 'Admin'].includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  try {
    let user;
    if (role === 'Student') user = await Student.findOne({ email });
    else if (role === 'Staff') user = await Staff.findOne({ email });
    else if (role === 'Admin') user = await Admin.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '3h' }
    );

    // Include staff data if role is "Staff"
    if (role === 'Staff') {
      const staffData = await Staff.findById(user._id); // Assuming user is a staff member
      return res.status(200).json({ message: 'Login successful', token, staff: staffData });
    }

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('❌ Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user details
router.get('/me', authenticateToken, async (req, res) => {
  const { userId, role } = req.user;

  let userModel;
  if (role === 'Student') userModel = Student;
  else if (role === 'Staff') userModel = Staff;
  else if (role === 'Admin') userModel = Admin;
  else return res.status(400).json({ message: 'Invalid role' });

  try {
    const user = await userModel.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
// Get all staff members (Admin only)
router.get('/staff/all', authenticateToken, async (req, res) => {
  try {
    const { role } = req.user;
    if (role !== 'Admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const staffList = await Staff.find().select('-password');
    res.status(200).json(staffList);
  } catch (error) {
    console.error('Error fetching staff:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;

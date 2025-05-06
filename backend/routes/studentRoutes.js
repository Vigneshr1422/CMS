// const express = require('express');
// const router = express.Router();
// const Student = require('../models/studentModel');
// const authenticate = require('../middleware/auth'); // JWT decoding middleware

// // ✅ Add a new student (by a staff member)
// // POST /students
// router.post('/', authenticate, async (req, res) => {
//   try {
//     if (req.user.role !== 'Staff') {
//       return res.status(403).json({ message: 'Only staff can add students.' });
//     }

//     console.log("Received data:", req.body);  // ✅ Debug log

//     const {
//       name,
//       email,
//       password,
//       rollNumber,
//       dob,
//       phoneNumber,
//       department,
//       section
//     } = req.body;

//     if (!name || !email || !password || !rollNumber || !department || !section) {
//       return res.status(400).json({ message: 'All required fields must be filled.' });
//     }

//     const existingStudent = await Student.findOne({ email });
//     if (existingStudent) {
//       return res.status(400).json({ message: 'Student with this email already exists.' });
//     }

//     const staffId = req.user.id;

//     const newStudent = new Student({
//       name,
//       email,
//       password,
//       rollNumber,
//       dob,
//       phoneNumber,
//       department,
//       section,
//       staff: staffId
//     });

//     await newStudent.save();

//     console.log("Saved student:", newStudent);  // ✅ Debug log

//     res.status(201).json({ message: 'Student added successfully', student: newStudent });
//   } catch (err) {
//     console.error("Server error adding student:", err);
//     res.status(500).json({ message: 'Server error adding student' });
//   }
// });


// // ✅ Get students added by the logged-in staff
// router.get('/', authenticate, async (req, res) => {
//   try {
//     if (req.user.role !== 'Staff') {
//       return res.status(403).json({ message: 'Access denied. Only staff can view students.' });
//     }

//     const staffId = req.user.id;
//     const students = await Student.find({ staff: staffId });

//     res.status(200).json(students);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error fetching students' });
//   }
// });

// // ✅ Get student profile (only for logged-in students)
// router.get('/profile', authenticate, async (req, res) => {
//   try {
//     if (req.user.role !== 'Student') {
//       return res.status(403).json({ message: 'Access denied. Students only.' });
//     }

//     const student = await Student.findById(req.user.id);
//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     res.status(200).json(student);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error fetching student profile' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Student = require('../models/studentModel');
const authenticate = require('../middleware/auth');  // Middleware for JWT authentication

// Add student (register student)
router.post('/', authenticate, async (req, res) => {
  try {
    // Destructure the fields from the request body
    const { email, name, department, section, role, password } = req.body;

    // Check if a student with the same email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this email already exists.' });
    }

    // Get the staff ID from the JWT token
    const staffId = req.user.id;

    // Create a new student entry with the necessary fields
    const newStudent = new Student({
      email, 
      name,
      department,  // Ensure department is included
      section,     // Ensure section is included
      role, 
      staff: staffId,  // Attach the staff ID to the student entry
      password,        // Password is passed from the request body
    });

    // Save the new student to the database
    await newStudent.save();

    res.status(201).json({ message: 'Student added successfully', student: newStudent });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error adding student' });
  }
});

// Get students added by the logged-in staff
router.get('/', authenticate, async (req, res) => {
  try {
    const staffId = req.user.id;
    const students = await Student.find({ staff: staffId });
    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching students' });
  }
});
// GET /students/details-by-email
// Get students based on name, email, or role
router.get('/details', authenticate, async (req, res) => {
  try {
    const { name, email, role } = req.query;

    const query = {};

    // Build the query based on provided filters
    if (name) {
      query.name = { $regex: name, $options: 'i' };  // Case-insensitive search for name
    }
    if (email) {
      query.email = email;
    }
    if (role) {
      query.role = role;
    }

    const students = await Student.find(query);
    if (students.length === 0) {
      return res.status(404).json({ message: 'No students found with the provided filters.' });
    }

    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching students based on filters' });
  }
});




// Get student profile (for the logged-in student)
router.get('/profile', authenticate, async (req, res) => {
  if (req.user.role !== 'Student') {
    return res.status(403).json({ message: 'You do not have access to this resource' });
  }
  try {
    const student = await Student.findById(req.user.id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching student profile' });
  }
});

module.exports = router;

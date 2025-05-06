// const express = require("express");
// const router = express.Router();
// const Staff = require("../models/staffModel");

// // GET: Fetch unique departments and sections from staff collection
// router.get("/departments-sections", async (req, res) => {
//   try {
//     // Fetch unique departments and sections
//     const departments = await Staff.distinct("department");
//     const sections = await Staff.distinct("section");

//     res.status(200).json({ departments, sections });
//   } catch (error) {
//     console.error("Error fetching departments and sections:", error);
//     res.status(500).json({ message: "Error fetching departments and sections." });
//   }
// });
// router.get('/by-dept-section', async (req, res) => {
//   const { department, section } = req.query;

//   try {
//     const staff = await Staff.find({ department, section });
//     res.json(staff);
//   } catch (err) {
//     console.error('Error fetching staff list:', err);
//     res.status(500).json({ message: 'Error fetching staff list' });
//   }
// });


// module.exports = router;
const express = require("express");
const router = express.Router();
const Staff = require("../models/staffModel");
const authMiddleware = require("../middleware/auth");

// GET: Fetch unique departments and sections
router.get("/departments-sections", async (req, res) => {
  try {
    const departments = await Staff.distinct("department");
    const sections = await Staff.distinct("section");
    res.status(200).json({ departments, sections });
  } catch (error) {
    console.error("Error fetching departments and sections:", error);
    res.status(500).json({ message: "Error fetching departments and sections." });
  }
});

// GET: Staff by department and section
router.get("/by-dept-section", async (req, res) => {
  const { department, section } = req.query;

  try {
    const staff = await Staff.find({ department, section });
    res.json(staff);
  } catch (err) {
    console.error("Error fetching staff list:", err);
    res.status(500).json({ message: "Error fetching staff list" });
  }
});

// GET: All staff
router.get("/all", authMiddleware, async (req, res) => {
  try {
    const staffList = await Staff.find();
    res.json(staffList);
  } catch (err) {
    console.error("Error fetching all staff:", err);
    res.status(500).json({ message: "Error fetching all staff" });
  }
});

// DELETE: Delete staff by ID
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await Staff.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Staff not found" });
    }
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (err) {
    console.error("Error deleting staff:", err);
    res.status(500).json({ message: "Error deleting staff" });
  }
});

module.exports = router;

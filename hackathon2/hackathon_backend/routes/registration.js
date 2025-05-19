const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Registration = require('../models/Registration');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// POST /api/registrations
router.post('/', upload.single('paymentScreenshot'), async (req, res) => {
  try {
    const {
      teamLeadName,
      teamLeadCollege,
      teamLeadEmail,
      teamLeadPhone,
      teamLeadNative,
      projectTitle,
      teamSize,
      teamMembers
    } = req.body;

    const newEntry = new Registration({
      teamLeadName,
      teamLeadCollege,
      teamLeadEmail,
      teamLeadPhone,
      teamLeadNative,
      projectTitle,
      teamSize,
      teamMembers: JSON.parse(teamMembers),
      paymentScreenshot: req.file ? `/uploads/${req.file.filename}` : ''
    });

    const saved = await newEntry.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// GET /api/registrations
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

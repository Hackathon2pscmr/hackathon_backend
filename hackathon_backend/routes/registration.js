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

router.post('/', upload.fields([
  { name: 'paymentScreenshot', maxCount: 1 },
  { name: 'nocDocument', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      teamLeadName,
      nationalityStatus,
      teamLeadCollege,
      teamLeadEmail,
      teamLeadPhone,
      teamName,
      projectTitle,
      teamSize,
      teamMembers
    } = req.body;

    const parsedTeamMembers = JSON.parse(teamMembers || '[]');

if (parseInt(teamSize) !== parsedTeamMembers.length + 1) {
  return res.status(400).json({
    error: `Team size (${teamSize}) does not match number of team members including lead (${parsedTeamMembers.length + 1})`
  });
}


    const screenshot = req.files['paymentScreenshot']?.[0]?.filename;
    const noc = req.files['nocDocument']?.[0]?.filename;

    const newEntry = new Registration({
      teamLeadName,
      nationalityStatus,
      teamLeadCollege,
      teamLeadEmail,
      teamLeadPhone,
      teamName,
      projectTitle,
      teamSize,
      teamMembers: parsedTeamMembers,
      paymentScreenshot: screenshot ? `/uploads/${screenshot}` : '',
      nocDocument: noc ? `/uploads/${noc}` : ''
    });

    await newEntry.save();
    res.status(201).json(newEntry);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
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

// PUT /api/registrations/:id
router.put('/:id', async (req, res) => {
  try {
    const updated = await Registration.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/registrations/:id
router.delete('/:id', async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

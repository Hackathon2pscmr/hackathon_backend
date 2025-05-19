const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: String,
  email: String,
  college: String,
  skills: String
});

const registrationSchema = new mongoose.Schema({
  teamLeadName: String,
  teamLeadCollege: String,
  teamLeadEmail: String,
  teamLeadPhone: String,
  teamLeadNative: String,
  projectTitle: String,
  teamSize: Number,
  teamMembers: [teamMemberSchema],
  paymentScreenshot: String
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);

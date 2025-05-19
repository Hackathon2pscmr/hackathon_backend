// components/RegistrationForm.jsx
import React, { useState } from 'react';
import QRCodeImage from '../assets/qr-code.png';

const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    teamLeadName: '',
    teamLeadCollege: '',
    email: '',
    phone: '',
    nativePlace: '',
    projectTitle: '',
    memberCount: 1,
    members: [],
    paymentScreenshotFile: null,
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData(prev => ({ ...prev, members: updatedMembers }));
  };

  const handleMemberCountChange = (e) => {
    let count = parseInt(e.target.value);
    if (isNaN(count) || count < 1) count = 1;
    if (count > 4) count = 4;

    const additionalMembersCount = count - 1;
    let updatedMembers = [...formData.members];

    if (updatedMembers.length < additionalMembersCount) {
      updatedMembers = [
        ...updatedMembers,
        ...Array(additionalMembersCount - updatedMembers.length).fill({ name: '', college: '', email: '' }),
      ];
    } else {
      updatedMembers = updatedMembers.slice(0, additionalMembersCount);
    }

    setFormData(prev => ({
      ...prev,
      memberCount: count,
      members: updatedMembers,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, paymentScreenshotFile: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('teamLeadName', formData.teamLeadName);
    form.append('teamLeadCollege', formData.teamLeadCollege);
    form.append('teamLeadEmail', formData.email);
    form.append('teamLeadPhone', formData.phone);
    form.append('teamLeadNative', formData.nativePlace);
    form.append('projectTitle', formData.projectTitle);
    form.append('teamSize', formData.memberCount);
    form.append('teamMembers', JSON.stringify(formData.members));
    if (formData.paymentScreenshotFile) {
      form.append('paymentScreenshot', formData.paymentScreenshotFile);
    }

    try {
      const res = await fetch('http://localhost:5000/api/registrations', {
        method: 'POST',
        body: form,
      });
      const data = await res.json();
      onRegister(data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen font-[Times_New_Roman]" style={{color: 'black'}}>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl max-w-3xl mx-auto shadow-2xl space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-900">🌍 International Hackathon Registration</h2>
        <p className="text-center text-gray-700">Please enter <strong>full names</strong> carefully. These will appear on the certificates.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="teamLeadName" placeholder="Team Lead Full Name" required onChange={handleChange} className="input border border-gray-300 px-4 py-2 rounded" />
          <input type="text" name="teamLeadCollege" placeholder="Team Lead College" required onChange={handleChange} className="input border border-gray-300 px-4 py-2 rounded" />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="input border border-gray-300 px-4 py-2 rounded" />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="input border border-gray-300 px-4 py-2 rounded" />
          <input type="text" name="nativePlace" placeholder="Native Place" required onChange={handleChange} className="input border border-gray-300 px-4 py-2 rounded" />
          <input type="text" name="projectTitle" placeholder="Project Title" required onChange={handleChange} className="input border border-gray-300 px-4 py-2 rounded" />
        </div>

        <div>
          <label className="block mb-2 font-semibold">Team Size (1 to 4 Members)</label>
          <input
            type="number"
            min="1"
            max="4"
            value={formData.memberCount}
            onChange={handleMemberCountChange}
            className="border border-gray-300 px-3 py-2 w-24 rounded"
          />
        </div>

        <div className="space-y-4">
          {formData.members.map((member, idx) => (
            <div key={idx} className="border p-4 rounded-md bg-gray-50 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-2">Member {idx + 2} (Full Name)</h4>
              <input
                type="text"
                placeholder="Full Name"
                value={member.name}
                onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                className="input border border-gray-300 px-4 py-2 rounded w-full mb-2"
                required
              />
              <input
                type="text"
                placeholder="College"
                value={member.college}
                onChange={(e) => handleMemberChange(idx, 'college', e.target.value)}
                className="input border border-gray-300 px-4 py-2 rounded w-full mb-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                className="input border border-gray-300 px-4 py-2 rounded w-full"
                required
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <label className="font-semibold block mb-2">Upload Payment Screenshot (Image Only)</label>
          <input type="file" accept="image/*" onChange={handleFileChange} className="input border border-gray-300 px-4 py-2 rounded w-full" required />
        </div>

        <div className="bg-yellow-100 p-4 rounded-md text-sm text-gray-900 mt-6 border">
          <h3 className="font-bold text-lg mb-2">💳 Registration Fee Details</h3>
          <ul className="list-disc ml-6">
            <li><strong>₹900</strong> until <strong>July 30, 2025</strong></li>
            <li><strong>₹1000</strong> from <strong>July 31 to August 12, 2025</strong></li>
          </ul>
          <p className="mt-2">Please make payment using the QR code below.</p>
        </div>

        <div className="flex justify-center mt-4">
          <img src={QRCodeImage} alt="QR Code" className="w-40 h-40 border-2 rounded-lg shadow-md" />
        </div>

        <div className="text-center text-sm text-gray-600">
          <p className="mt-4">Make sure names are correct. <strong>These will appear on your certificates.</strong></p>
        </div>

        <button
          type="submit"
          style={{backgroundColor: '#0066cc', color: 'white'}}
          className="w-full py-3 font-semibold rounded-md text-white bg-blue-700 hover:bg-blue-800 transition"
        >
          🚀 Submit Registration
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

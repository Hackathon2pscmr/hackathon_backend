// RegistrationForm.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import QRCodeImage from '../assets/qr-code.png';
import { Link } from 'react-router-dom';


const RegistrationForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    teamLeadName: '',
    nationalityStatus: '',
    teamLeadCollege: '',
    teamLeadEmail: '',
    teamLeadPhone: '',
    teamName: '',
    projectTitle: '',
    memberCount: 0,
    members: [],
    paymentScreenshotFile: null,
    nocFile: null,
  });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setFormData((prev) => ({ ...prev, members: updatedMembers }));
  };

  const handleMemberCountChange = (e) => {
    let count = parseInt(e.target.value);
    if (isNaN(count) || count < 0) count = 0;
    if (count > 3) count = 3;

    const updatedMembers = Array.from({ length: count }, (_, i) =>
      formData.members[i] || { name: '', college: '', email: '' }
    );

    setFormData((prev) => ({
      ...prev,
      memberCount: count,
      members: updatedMembers,
    }));
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, [e.target.name]: file }));
    }
  };
const [acceptedTerms, setAcceptedTerms] = useState(false);
const [showModal, setShowModal] = useState(false);

// Custom style for Modal (optional)
const customStyles = {
  content: {
    maxWidth: '700px',
    maxHeight: '80vh',
    margin: 'auto',
    padding: '20px',
  },
};
  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!/^\d{10}$/.test(formData.teamLeadPhone)) {
      toast.error('Phone number must be exactly 10 digits.');
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(formData.teamLeadName)) {
      toast.error('Team Lead Name must contain only letters and spaces.');
      return;
    }

    for (let i = 0; i < formData.members.length; i++) {
      const member = formData.members[i];
      if (!/^[A-Za-z\s]+$/.test(member.name)) {
        toast.error(`Member ${i + 2}'s name must contain only letters and spaces.`);
        return;
      }
      if (!emailRegex.test(member.email)) {
        toast.error(`Member ${i + 2} has an invalid email address.`);
        return;
      }
    }

    const form = new FormData();
    form.append('teamLeadName', formData.teamLeadName);
    form.append('nationalityStatus', formData.nationalityStatus)
    form.append('teamLeadCollege', formData.teamLeadCollege);
    form.append('teamLeadEmail', formData.teamLeadEmail);
    form.append('teamLeadPhone', formData.teamLeadPhone);
    form.append('teamName', formData.teamName);
    form.append('projectTitle', formData.projectTitle);
    form.append('teamSize', formData.memberCount + 1); // +1 for team lead
    form.append('teamMembers', JSON.stringify(formData.members)); // excluding team lead

    if (formData.paymentScreenshotFile) {
      form.append('paymentScreenshot', formData.paymentScreenshotFile);
    }
    if (formData.nocFile) {
      form.append('nocDocument', formData.nocFile);
    }

    try {
      const res = await fetch('http://localhost:5000/api/registrations', {
        method: 'POST',
        body: form,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Server error');
      }

      const data = await res.json();
      toast.success('Registration submitted successfully!', { autoClose: 3000 });
      onRegister(data);
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error(`Registration failed: ${error.message}`, { autoClose: 3000 });
    }
  };
  return (
    
   <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-100 to-purple-200 min-h-screen font-[Times_New_Roman] text-black">
  <div className="max-w-3xl mx-auto mb-4">
    <Link to="/#" className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm sm:text-base hover:underline hover:text-blue-900 transition duration-200">
      <span className="text-xl sm:text-2xl">←</span>
      <span>Back to Home</span>
    </Link>
  </div>

  <form onSubmit={handleSubmit} className="bg-white p-4 sm:p-8 rounded-xl max-w-3xl mx-auto shadow-2xl space-y-6 border border-gray-200">
    <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900">🌍 International Hackathon Registration</h2>
    <p className="text-center text-gray-700 text-sm sm:text-base">
      Please enter <strong>full names</strong> carefully. These will appear on the certificates.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" name="teamLeadName" placeholder="Full Name of Team Leader" required pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed" onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base" />
      
      <select
        name="nationalityStatus"
        id="nationalityStatus"
        value={formData.nationalityStatus}
        onChange={handleChange}
        required
        className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base"
      >
        <option value="" disabled hidden>
  Select Nationality
</option>

        <option value="National">National (India)</option>
        <option value="International">International</option>
      </select>

      <input type="text" name="teamLeadCollege" placeholder="Institution / University Name" required onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base" />
      <input type="email" name="teamLeadEmail" placeholder="Official Email Address" required onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base" />
      <input
        type="tel"
        name="teamLeadPhone"
        placeholder="Phone Number (e.g., +91XXXXXXXXXX)"
        required
        pattern="^\+?\d{10,15}$"
        title="Enter a valid phone number (10 to 15 digits, with optional + country code)"
        onChange={handleChange}
        className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base"
      />
      <input type="text" name="teamName" placeholder="Team Name" required onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base" />
      <input type="text" name="projectTitle" placeholder="Proposed Project Title" required onChange={handleChange} className="border border-gray-300 px-4 py-2 rounded text-sm sm:text-base" />
    </div>

    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
      <label className="font-semibold mb-2 sm:mb-0">
        Number of Additional Team Members
        <br />
        <span className="text-lg font-normal text-gray-600">(excluding Team Leader): 0–3 'eg:01,02,03'</span>
      </label>
      <input
        type="number"
        value={formData.memberCount}
        onChange={handleMemberCountChange}
        placeholder="Enter a value between 0 and 3 'eg:01,02,03'"
        min="0"
        max="3"
        className="border border-gray-300 px-3 py-2 rounded w-full sm:w-64 text-sm sm:text-base"
      />
    </div>

    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mt-4">
      {formData.members.map((member, idx) => (
        <div key={idx} className="border p-4 rounded-md bg-gray-50 shadow-sm">
          <h4 className="font-semibold text-gray-800 mb-2">
            Additional Team Member {idx + 1}
          </h4>
          <input
            type="text"
            placeholder={`Full Name of Member ${idx + 1}`}
            value={member.name}
            onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full mb-2 text-sm sm:text-base"
            required
            pattern="[A-Za-z\s]+"
            title="Only letters and spaces are allowed"
          />
          <input
            type="email"
            placeholder={`Email Address of Member ${idx + 1}`}
            value={member.email}
            onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full mb-2 text-sm sm:text-base"
            required
          />
          <input
            type="tel"
            placeholder={`Phone Number of Member ${idx + 1}`}
            value={member.phone}
            onChange={(e) => handleMemberChange(idx, 'phone', e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded w-full text-sm sm:text-base"
            required
            pattern="^\+?\d{10,15}$"
            title="Enter a valid phone number (10 to 15 digits, with optional + country code)"
          />
        </div>
      ))}
    </div>

    <div className="mt-6">
      <label className="font-semibold block mb-2">
        Upload Proof of Payment (Image Format Only)
      </label>
      <input type="file" name="paymentScreenshotFile" accept="image/*" onChange={handleFileChange} className="border border-gray-300 px-4 py-2 rounded w-full text-sm sm:text-base" required />
    </div>

    <div className="mt-6">
      <label className="font-semibold block mb-2">
        Upload No Objection Certificate (NOC) – PDF Format Only
      </label>
      <p className="text-gray-600 text-sm mb-2 italic">
        The NOC must be issued by your <strong>HoD, Principal, Director, or a Professor</strong>.
      </p>
      <input
        type="file"
        name="nocFile"
        accept="application/pdf"
        onChange={handleFileChange}
        className="border border-gray-300 px-4 py-2 rounded w-full text-sm sm:text-base"
        required
      />
    </div>

    <div className="bg-yellow-100 p-4 rounded-md text-sm text-gray-900 mt-6 border">
      <h3 className="font-bold text-lg mb-2">💳 Registration Fee Structure</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong className="text-green-900">₹900 – Early Bird Registration</strong>
          <span> (on or before <strong>July 30, 2025</strong>)</span>
        </li>
        <li>
          <strong>₹1000</strong> – Standard Registration (from <strong>July 31 to August 12, 2025</strong>)
        </li>
      </ul>
      <p className="mt-2">Please scan the QR code below to complete your payment.</p>
      <p className="mt-2 text-gray-700 italic">
        Note: For international participants, please include your country code (e.g., +91) in the phone number field.
      </p>
    </div>

    <div className="flex justify-center mt-4">
      <img src={QRCodeImage} alt="QR Code" className="w-40 h-40 border-2 rounded-lg shadow-md" />
    </div>

     <div className="flex items-start gap-2 mt-6">
    <input
      type="checkbox"
      id="terms"
      checked={acceptedTerms}
      onChange={() => setAcceptedTerms(!acceptedTerms)}
      className="mt-1"
      required
    />
    <label htmlFor="terms" className="text-sm text-gray-700">
      I accept the{' '}
      <span
        onClick={() => setShowModal(true)}
        className="text-blue-700 font-semibold underline cursor-pointer"
      >
        Terms and Conditions<span className="text-black ml-1">*</span>
      </span>
    </label>
  </div>

  {/* Modal */}
  <Modal
    isOpen={showModal}
    onRequestClose={() => setShowModal(false)}
    style={customStyles}
    contentLabel="Terms and Conditions"
    ariaHideApp={false} // Only for dev. In prod, use `Modal.setAppElement('#yourAppRoot')`
  >
    <div className="flex justify-between items-center border-b pb-2 mb-4">
      <h2 className="text-lg font-semibold text-blue-900">Terms and Conditions</h2>
      <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-red-600 text-xl">&times;</button>
    </div>
    <iframe
      src="/rules.pdf"
      title="Terms and Conditions"
      width="100%"
      height="500px"
      className="border rounded"
    ></iframe>
  </Modal>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={!acceptedTerms}
    style={{ backgroundColor: '#2b6cb0' }}
    className={`w-full py-3 font-semibold rounded-md text-white transition ${
      acceptedTerms
        ? 'bg-blue-700 hover:bg-blue-800'
        : 'bg-blue-300 cursor-not-allowed'
    }`}
  >
    🚀 Submit Registration
  </button>

  </form>
</div>

  );
};

export default RegistrationForm;

//part
import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Participants = () => {
  const [registrations, setRegistrations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingReg, setEditingReg] = useState(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/registrations');
        const data = await res.json();
        setRegistrations(data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };
    fetchRegistrations();
  }, []);

  const handleExportPDF = () => {
    const input = document.getElementById('table-section');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('l', 'pt', 'a4');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Registered_Teams.pdf');
    });
  };

  const handleEdit = (reg) => {
    setEditingReg(reg);
    setEditModalOpen(true);
  };

  const handleEditSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/registrations/${editingReg._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingReg),
      });
      const updated = await res.json();
      setRegistrations((prev) =>
        prev.map((reg) => (reg._id === updated._id ? updated : reg))
      );
      setEditModalOpen(false);
      setEditingReg(null);
    } catch (err) {
      console.error('Failed to update:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this registration?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/registrations/${id}`, {
          method: 'DELETE',
        });
        if (res.ok) {
          setRegistrations(registrations.filter((reg) => reg._id !== id));
        } else {
          alert("Failed to delete registration.");
        }
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  const filteredRegistrations = registrations.filter((reg) =>
    reg.teamLeadName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-[#272757] min-h-screen text-white">
      <h2 className="text-3xl font-extrabold mb-6 border-b-4 border-[#8A2BE2] pb-2">
        Registered Teams
      </h2>

      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <p className="text-2xl md:text-3xl">
          Total Teams Registered:{' '}
          <span className="font-bold text-white text-3xl md:text-4xl">
            {filteredRegistrations.length}
          </span>
        </p>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search by Team Lead"
            className="px-3 py-2 rounded-md bg-transparent border text-white border-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleExportPDF}
            className="bg-[#8A2BE2] hover:bg-[#6a21b9] text-purple-950 px-4 py-2 rounded-md"
          >
            Export as PDF
          </button>
        </div>
      </div>

      <div id="table-section" className="overflow-x-auto rounded-lg shadow-lg border border-[#505081]">
        <table className="min-w-full table-auto border-collapse border border-[#505081]">
          <thead className="bg-[#505081] text-white">
            <tr>
              <th className="border px-5 py-3 text-left">Team Lead Name</th>
              <th className="border px-5 py-3 text-left">Nationality</th>
              <th className="border px-5 py-3 text-left">College</th>
              <th className="border px-5 py-3 text-left">Email</th>
              <th className="border px-5 py-3 text-left">Phone</th>
              <th className="border px-5 py-3 text-left">Team Name</th>
              <th className="border px-5 py-3 text-left">Project Title</th>
              <th className="border px-5 py-3 text-center">Team Size</th>
              <th className="border px-5 py-3 text-left">Team Members</th>
              <th className="border px-5 py-3 text-center">Payment Screenshot</th>
              <th className="border px-5 py-3 text-center">NOC Document</th>
              <th className="border px-5 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRegistrations.map((reg, index) => (
              <tr
                key={reg._id}
                className={`text-[#d0d3e8] ${index % 2 === 0 ? 'bg-[#393c6d]' : 'bg-[#444875]'} hover:bg-[#505081] transition-colors duration-200`}
              >
                <td className="border px-5 py-3 font-semibold text-white">{reg.teamLeadName}</td>
                <td className="border px-5 py-3 font-semibold text-white">{reg.nationalityStatus}</td>
                <td className="border px-5 py-3">{reg.teamLeadCollege}</td>
                <td className="border px-5 py-3">{reg.teamLeadEmail}</td>
                <td className="border px-5 py-3">{reg.teamLeadPhone}</td>
                <td className="border px-5 py-3">{reg.teamName}</td>
                <td className="border px-5 py-3">{reg.projectTitle}</td>
                <td className="border px-5 py-3 text-center">{reg.teamSize}</td>
                <td className="border px-5 py-3 text-left">
                  <ul className="list-disc list-inside">
                    {reg.teamMembers?.map((member, i) => (
                      <li key={i}>
                        <strong className="text-white">{member.name}</strong> ({member.email}, {member.college})
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border px-5 py-3 text-center">
                  {reg.paymentScreenshot ? (
                    <a
                      href={`http://localhost:5000${reg.paymentScreenshot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-[#b19aff]"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-[#8686AC] italic">Not Provided</span>
                  )}
                </td>
                <td className="border px-5 py-3 text-center">
                  {reg.nocDocument ? (
                    <a
                      href={`http://localhost:5000${reg.nocDocument}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-[#b19aff]"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-[#8686AC] italic">Not Provided</span>
                  )}
                </td>
                <td className="border px-5 py-3 text-center">
                  <div className="flex justify-center items-center space-x-4">
                    <button
                      className="text-green-500 hover:text-green-300 text-lg"
                      onClick={() => handleEdit(reg)}
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-300 text-lg"
                      onClick={() => handleDelete(reg._id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editModalOpen && editingReg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6 space-y-4 text-black">
            <h3 className="text-xl font-semibold text-purple-700">Edit Participant</h3>
            {['teamLeadName', 'teamLeadCollege', 'teamLeadEmail', 'teamLeadPhone', 'teamName', 'projectTitle', 'teamSize'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700">{field}</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={editingReg[field]}
                  onChange={(e) => setEditingReg({ ...editingReg, [field]: e.target.value })}
                />
              </div>
            ))}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleEditSubmit}
                className="bg-green-500 hover:bg-green-600 text-green-600 font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setEditModalOpen(false);
                  setEditingReg(null);
                }}
                className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Participants;

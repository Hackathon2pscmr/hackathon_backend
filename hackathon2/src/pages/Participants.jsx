import React, { useEffect, useState } from 'react';

const Participants = () => {
  const [registrations, setRegistrations] = useState([]);

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

  return (
    <div className="p-8 bg-[#272757] min-h-screen text-white">
      <h2 className="text-3xl font-extrabold mb-6 text-white border-b-4 border-[#8A2BE2] pb-2">
        Registered Teams
      </h2>
      <p className="mb-8 text-3xl">
        Total Teams Registered:{' '}
        <span className="font-bold text-white text-4xl">{registrations.length}</span>
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-[#505081]">
        <table className="min-w-full table-auto border-collapse border border-[#505081]">
          <thead className="bg-[#505081] text-[#ffffff]">
            <tr>
              <th className="border border-[#505081] px-5 py-3 text-left">Team Lead Name</th>
              <th className="border border-[#505081] px-5 py-3 text-left">College</th>
              <th className="border border-[#505081] px-5 py-3 text-left">Email</th>
              <th className="border border-[#505081] px-5 py-3 text-left">Phone</th>
              <th className="border border-[#505081] px-5 py-3 text-left">Native</th>
              <th className="border border-[#505081] px-5 py-3 text-left">Project Title</th>
              <th className="border border-[#505081] px-5 py-3 text-center">Team Size</th>
              <th className="border border-[#505081] px-5 py-3 text-left">Team Members</th>
              <th className="border border-[#505081] px-5 py-3 text-center">Payment Screenshot</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map((reg, index) => (
              <tr
                key={index}
                className={`text-[#d0d3e8] ${
                  index % 2 === 0 ? 'bg-[#393c6d]' : 'bg-[#444875]'
                } hover:bg-[#505081] transition-colors duration-200`}
              >
                <td className="border border-[#505081] px-5 py-3 font-semibold text-white">{reg.teamLeadName}</td>
                <td className="border border-[#505081] px-5 py-3">{reg.teamLeadCollege}</td>
                <td className="border border-[#505081] px-5 py-3">{reg.teamLeadEmail}</td>
                <td className="border border-[#505081] px-5 py-3">{reg.teamLeadPhone}</td>
                <td className="border border-[#505081] px-5 py-3">{reg.teamLeadNative}</td>
                <td className="border border-[#505081] px-5 py-3">{reg.projectTitle}</td>
                <td className="border border-[#505081] px-5 py-3 text-center">{reg.teamSize}</td>
                <td className="border border-[#505081] px-5 py-3 text-left">
                  <ul className="list-disc list-inside">
                    {reg.teamMembers?.map((member, i) => (
                      <li key={i}>
                        <strong className="text-white">{member.name}</strong> ({member.email}, {member.college})
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border border-[#505081] px-5 py-3 text-center">
                  {reg.paymentScreenshot ? (
                    <a
                      href={`http://localhost:5000${reg.paymentScreenshot}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline hover:text-[#b19aff] transition-colors duration-200"
                    >
                      View
                    </a>
                  ) : (
                    <span className="text-[#8686AC] italic">Not Provided</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Participants;

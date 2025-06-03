import React, { useState, useEffect } from 'react';
import './AliasSection.css';

const faqs = [
  {
    "question": "What is a hackathon?",
    "answer": "A hackathon is a sprint-like event where teams collaborate to build innovative tech solutions within a defined timeframe."
  },
  {
    "question": "Can I participate solo?",
    "answer": "Individual participation is permitted, however, we strongly encourage forming teams of 2-4 members to foster diverse skill sets and enhance collaboration."
  },
  {
    "question": "What is the judging criteria?",
    "answer": "Projects will be evaluated based on innovation, usability, scalability, technical complexity, and the overall presentation of the solution."
  },
  {
    "question": "What types of projects can we work on?",
    "answer": "You are encouraged to develop projects aligned with the hackathon's themes. Please refer to the specific challenge tracks for more details and inspiration."
  },
 
  {
    "question": "What resources will be provided during the hackathon?",
    "answer": "We will provide access to Wi-Fi, power outlets, and designated working spaces. Mentors will also be available to offer guidance and support."
  },
  {
    "question": "Will food and beverages be provided?",
    "answer": "Yes, we will provide complimentary meals and refreshments throughout the event. We will also strive to accommodate dietary restrictions indicated during registration."
  },
  {
    "question": "What are the hygiene protocols in place for the event?",
    "answer": "The health and safety of our participants are paramount. We will implement strict hygiene protocols, including readily available hand sanitizers, regular cleaning of common areas, and adherence to local health guidelines. We encourage all participants to practice good hygiene."
  },
  {
    "question": "What should I bring to the hackathon?",
    "answer": "We recommend bringing your laptop, chargers, any necessary hardware or development kits, personal toiletries, and a reusable water bottle. Comfortable clothing is also advisable."
  },

  {
    "question": "How will intellectual property be handled?",
    "answer": "Participants retain the intellectual property rights to the projects they create during the hackathon."
  },
  {
    "question": "What are the prizes for the winners?",
    "answer": "Exciting prizes will be awarded to the top-performing teams. Details about the prize categories and amounts will be announced closer to the event."
  },
  {
    "question": "Who can I contact if I have further questions?",
    "answer": "Please feel free to reach out to us via email at [insert hackathon email address] or through our social media channels. We'll be happy to assist you."
  }
];

const AliasSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const sponsors = [
    "/images/sponsors1.jpg",
    "/images/sponsors2.jpg",
    "/images/sponsors3.jpg",
    "/images/sponsors4.jpg",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
 const [isModalOpen, setIsModalOpen] = useState(false);

  // ESC key functionality
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsors.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [sponsors.length]);

  return (
    <section className="alias-section">
      {/* PRIZES */}
      {/* PRIZES */}
      <div className="prizes-section">
        <h2 className="prizes-title">Prizes</h2>
        <p className="prizes-subtitle">
          Exciting awards, e-certificates, and recognition await the top participants!
        </p>

        <div className="prize-grid">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className={`prize-card ${index === 4 ? "special-prize" : ""}`}>
              <img src={`/images/prize${index}.png`} alt={`Prize ${index}`} className="prize-img" />
              <div className="prize-label">
                {index === 1
                  ? "1st Prize"
                  : index === 2
                    ? "2nd Prize"
                    : index === 3
                      ? "3rd Prize"
                      : "Special Prize"}
              </div>
              <div className="prize-amount">
                ₹{index === 1 ? "40K | $465" : index === 2 ? "30K | $350" : index === 3 ? "20K | $230" : "10K | $115"}
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* RULES SECTION UPDATED */}
     <div className="rules-section">
      <h2 className="alias-title">Rules & Regulations</h2>
      <div className="rules-button-container">
        <button className="rules-button" onClick={() => setIsModalOpen(true)}>View</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <h3 className="modal-heading">International Hackathon 2k25</h3>
            <div className="modal-body">
              <iframe
                src="/rules.pdf"
                width="100%"
                height="600px"
                title="Rules PDF"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>


      {/* SPONSORS */}
      <div className="sponsors-section">
        <h2 className="alias-title">Our Sponsors</h2>
        <div className="carousel-container">
          {sponsors.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sponsor ${index + 1}`}
              className={`carousel-image ${index === currentIndex ? "visible" : "hidden"
                }`}
            />
          ))}
        </div>
      </div>

      {/* RULES
      <div className="rules-section">
        <h2 className="alias-title">Rules & Regulations</h2>
        <button className="rules-button">View Rules PDF</button>
      </div> */}

      {/* FAQs */}
      <div className="faq-section">
        <h2 className="alias-title">FAQs</h2>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              className={`faq-card ${openFaq === index ? 'open' : ''}`}
              key={index}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question flex justify-between items-center">
                <span>{faq.question}</span>
                <span className="faq-toggle-icon text-xl font-bold">
                  {openFaq === index ? '−' : '+'}
                </span>
              </div>

              {openFaq === index && (
                <div className="faq-answer mt-2">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* TEAM */}
      <div className="team-section px-4 py-10 bg-[#0B0B2A] text-white font-[Orbitron,sans-serif]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3">
            {/* Chief Patrons */}
            <div className="bg-[#151545] p-5 rounded-xl shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-[#8686AC]">Chief Patrons</h3>
              <ul className="space-y-3 text-sm leading-relaxed">
                <li><strong>Sri Chalavadi Mallikarjuna Rao</strong><br />President</li>
                <li><strong>Sri Potti Surendra Kumar</strong><br />Vice President</li>
                <li><strong>Dr. Chitta Amar Sudheer</strong><br />Secretary & Correspondent</li>
                <li><strong>Sri Grandhi Pavan Kumar</strong><br />Joint Secretary</li>
                <li><strong>Sri Grandhi Raghu Sandeep</strong><br />Treasurer</li>
              </ul>
            </div>

            {/* Middle Column: Patrons, Conveners, Coordinators */}
            <div className="space-y-6">
              <div className="bg-[#151545] p-5 rounded-xl shadow-md border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-[#8686AC]">Patron</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Dr. S. Saravana Kumar</strong><br />Principal</li>
                </ul>
              </div>

              <div className="bg-[#151545] p-5 rounded-xl shadow-md border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-[#8686AC]">Conveners</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Dr. SK. Akbar</strong><br />HOD, CSE-DS</li>
                  <li><strong>V. Navya Sree</strong><br />HOD, CSE-AI&ML</li>
                </ul>
              </div>

              <div className="bg-[#151545] p-5 rounded-xl shadow-md border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-[#8686AC]">Coordinators</h3>
                <ul className="space-y-3 text-sm">
                  <li><strong>Dr. T. Srinivasa Reddy</strong></li>
                  <li><strong>S. Tulasi Prasad</strong></li>
                </ul>
              </div>
            </div>

            {/* Student Coordinators */}
            <div className="bg-[#151545] p-5 rounded-xl shadow-md border border-gray-700 w-full">
              <h3 className="text-xl font-semibold mb-4 text-[#8686AC]">Student Coordinators</h3>

              <div className="space-y-4 text-sm sm:text-base">
                <div>
                  <p><strong>R. Yamini</strong></p>
                  <p>9963957109</p>
                </div>
                <div>
                  <p><strong>V. Jagapathi Babu</strong></p>
                  <p>7989766326</p>
                </div>
                <div>
                  <p><strong>Anu Sri</strong></p>
                  <p>8019912927</p>
                </div>
                <div>
                  <p><strong>Meghnath</strong></p>
                  <p>8008165226</p>
                </div>
                <div>
                  <p><strong>V. Sai Sahith</strong></p>
                  <p>6305453161</p>
                </div>
                <div>
                  <p><strong>A. Viswa Satyendar</strong></p>
                  <p>7660959499</p>
                </div>
                <div>
                  <p><strong>P. Keerthana</strong></p>
                  <p>7075255742</p>
                </div>
                <div>
                  <p><strong>B. Sri Lekha</strong></p>
                  <p>9493845474</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>





    </section>
  );
};

export default AliasSection;
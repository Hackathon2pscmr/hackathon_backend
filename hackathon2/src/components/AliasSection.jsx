import React, { useState,useEffect } from 'react';
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
    "question": "Do I need to have coding experience to participate?",
    "answer": "While many projects involve coding, hackathons benefit from diverse skills. Designers, project managers, and subject matter experts are also valuable team members."
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sponsors.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [sponsors.length]);

  return (
    <section className="alias-section">
      {/* PRIZES */}
<div className="prizes-section">
  <h2 className="prizes-title">Prizes</h2>
  <p className="prizes-subtitle">
    Exciting awards, e-certificates, and recognition await the top participants!
  </p>

  <div className="prize-grid">
    <div className="prize-card first-prize">
      <img src="/images/prize1.png" alt="1st Prize" className="prize-img" />
      <div className="prize-label">1st Prize</div>
      <div className="prize-amount">₹40K</div>
    </div>

    <div className="prize-card second-prize">
      <img src="/images/prize2.png" alt="2nd Prize" className="prize-img" />
      <div className="prize-label">2nd Prize</div>
      <div className="prize-amount">₹30K</div>
    </div>

    <div className="prize-card third-prize">
      <img src="/images/prize3.png" alt="3rd Prize" className="prize-img" />
      <div className="prize-label">3rd Prize</div>
      <div className="prize-amount">₹20K</div>
    </div>

    <div className="prize-card special-prize">
      <img src="/images/prize4.png" alt="Special Prize" className="prize-img" />
      <div className="prize-label">Special Prize</div>
      <div className="prize-amount">₹10K</div>
    </div>
  </div>
</div>



{/* RULES SECTION UPDATED */}
<div className="rules-section">
  <h2 className="alias-title">Rules & Regulations</h2>
  <div className="rules-button-container">
    <button className="rules-button">View</button>
  </div>
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
            className={`carousel-image ${
              index === currentIndex ? "visible" : "hidden"
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

  {/* grid wrapper */}
  <div className="faq-grid">
    {faqs.map((faq, index) => (
      <div
        className={`faq-card ${openFaq === index ? 'open' : ''}`}
        key={index}
        onClick={() => toggleFaq(index)}
      >
        <div className="faq-question">{faq.question}</div>
        {openFaq === index && (
          <div className="faq-answer">{faq.answer}</div>
        )}
      </div>
    ))}
  </div>
</div>


      {/* TEAM */}
<div className="team-section">
 

  <div className="team-grid">
    <div className="team-column">
      <h3 className="group-title">Chief Patrons</h3>
      <ul>
        <li><strong>Sri Chalavadi Mallikarjuna Rao</strong><br />President</li>
        <li><strong>Sri Potti Surendra Kumar</strong><br />Vice President</li>
        <li><strong>Dr. Chitta Amar Sudheer</strong><br />Secretary & Correspondent</li>
        <li><strong>Sri Grandhi Pavan Kumar</strong><br />Joint Secretary</li>
        <li><strong>Sri Grandhi Raghu Sandeep</strong><br />Treasurer</li>
      </ul>
    </div>

    <div className="team-column">
      <h3 className="group-title">Patron</h3>
      <ul>
        <li><strong>Dr. S. Saravana Kumar</strong><br />Principal</li>
      </ul>
    </div>

    <div className="team-column">
      <h3 className="group-title">Conveners</h3>
      <ul>
        <li><strong>Dr. SK. Akbar</strong><br />HOD, CSE-DS</li>
        <li><strong>V. Navya Sree</strong><br />HOD, CSE-AI&amp;ML</li>
      </ul>
    </div>

    <div className="team-column">
      <h3 className="group-title">Coordinators</h3>
      <ul>
        <li><strong>Dr. T. Srinivasa Reddy</strong></li>
        <li><strong>S. Tulasi Prasad</strong></li>
      </ul>
    </div>
  </div>

  <h3 className="group-title">Student Coordinators</h3>
  <div className="student-grid">
    <ul>
      <li><strong>R. Yamini</strong><br />9963957109</li>
      <li><strong>V. Jagapathi Babu</strong><br />7989766326</li>
      <li><strong>Anu Sri</strong><br />8019912927</li>
      <li><strong>Meghnath</strong><br />8008165226</li>
      <li><strong>V. Sai Sahith</strong><br />6305453161</li>
      <li><strong>A. Viswa Satyendar</strong><br />7660959499</li>
      <li><strong>P. Keerthana</strong><br />7075255742</li>
      <li><strong>B. Sri Lekha</strong><br />9493845474</li>
    </ul>
  </div>
</div>


    </section>
  );
};

export default AliasSection;
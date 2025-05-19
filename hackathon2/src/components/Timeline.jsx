import React from "react";
import "./timeline.css";

const timelineData = [
  {
    date: "May 20",
    title: "Registrations Open",
    description: "Hackathon registration begins. Teams can start submitting their entries.",
  },
  {
    date: "July 29",
    title: "Early Bird Registration",
    description: "Register Your team at 900/-",
  },
  {
    date: "August 12",
    title: "Closing Registration",
    description: "Register Your Team at 1000/- and closing the registration of Hackathon",
  },
  {
    date: "August 29",
    title: "Hackathon Day1",
    description: "Welcoming and Start the Hacktathon Progress",
  },
   {
    date: "August 30",
    title: "Hackathon Day2",
    description: "Results and Award Ceremony Day",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">📌 Timeline & Schedule</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-line" />
            <div className="timeline-point" />
            <div className="timeline-content">
              <div className="date-badge">{item.date}</div>
              <div className="content-box">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
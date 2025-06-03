import React from 'react';
import './Tracks.css';

// Each track has a name and an image (local path or URL)
const trackList = [
  { name: "Smart Automation", image: "/images/auto.jpg" },
  { name: "Artificial Intelligence", image: "/images/ai.jpg" },
  { name: "Disaster Management", image: "/images/disaster.jpg" },
  { name: "Environment and Climate Changes", image: "/images/climate.jpg" },
  { name: "Tourism", image: "/images/tourism.jpg" },
  { name: "Smart Vehicle", image: "/images/sma.jpg" },
  { name: "Women Safety and Empowerment", image: "/images/women.jpg" },
  { name: "Toys & Games", image: "/images/tg.webp" },
  { name: "Ocean Technology", image: "/images/ocean.jpg" },
  { name: "Data Science", image: "/images/ds.jpg" },
  { name: "IoT", image: "/images/iot.jpg" },
  { name: "Cyber Security", image: "/images/cs.jpeg" },
  { name: "Green Technology", image: "/images/gt.jpeg" },
  { name: "Machine Learning", image: "/images/ml.png" },
  { name: "Forest and Wild Life Prevention", image: "/images/tg.jpg" },
  { name: "Social Cause and Environment", image: "/images/sc.png" },
  { name: "Life Science", image: "/images/ls.webp" },
  { name: "Heritage & Culture", image: "/images/hc.jpg" },
  { name: "Healthcare and Bio Technology", image: "/images/bt.jpg" },
  { name: "Education", image: "/images/ed.jpg" },
  { name: "Finance Technology", image: "/images/fin.jpg" },
  { name: "Agriculture and Smart Irrigation", image: "/images/as.avif" },
  { name: "Robotics / Drones", image: "/images/dr.webp" },
  { name: "Waste Management", image: "/images/wm.png" },
  { name: "Food Technology", image: "/images/ft.avif" },
  { name: "Rural Development", image: "/images/rural2.jpeg" },
  { name: "Sustainable Cities", image: "/images/sus.png" },
  { name: "Open Category - Any Innovations", image: "/images/innovation.jpg" },
  // Duplicate name allowed
];

const Tracks = () => {
  return (
    <section className="tracks-section" id='tracks'>
      <h2 className="tracks-title">Tracks & Challenges</h2>
      <div className="track-grid">
        {trackList.map((track, index) => (
          <div className="track-card" key={index}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${track.image})` }}
            />
            <div className="card-text">{track.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
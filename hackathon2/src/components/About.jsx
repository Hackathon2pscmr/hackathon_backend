import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaNetworkWired, FaAward, FaIdBadge } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import './About.css';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const About = () => {
  const images = [
    "/wel1.jpg", "/p1.png", "/p2.JPG", "/p3.JPG", "/guest1.jpg", "/guest2.jpg",
    "/imh1.jpg", "/imh2.jpg", "/aa2.JPG", "/aa1.png", "/aa3.JPG", "/aa4.JPG",
    "clg3.jpg", "/clg19.jpg",
  ];

  const visionContent = (
    <p className="text-sm leading-relaxed text-gray-200 text-justify">
      To foster a global ecosystem of innovation where students, developers, and tech enthusiasts collaborate to design impactful solutions across critical domains.
    </p>
  );

  const missionContent = (
    <ul className="list-disc text-sm list-inside text-gray-200 space-y-2 text-justify">
      <li>Inspire tech-driven solutions addressing real-world problems.</li>
      <li>Foster global collaboration through mentorship and resources.</li>
      <li>Promote sustainable innovations with social impact.</li>
    </ul>
  );

  const objectiveContent = (
    <ul className="list-disc text-sm list-inside text-gray-200 space-y-2 text-justify">
      <li>Enhance technical and soft skills.</li>
      <li>Provide networking with industry experts.</li>
      <li>Expose students to modern tech landscapes.</li>
      <li>Build confidence through collaboration.</li>
      <li>Encourage leadership and initiative.</li>
    </ul>
  );

  const blockData = [
    { title: "Vision", image: "/vision.png", content: visionContent },
    { title: "Mission", image: "/mission.png", content: missionContent },
    { title: "Objective", image: "/obj.png", content: objectiveContent },
  ];

  return (
    <div className="bg-eclipse text-white px-4 sm:px-6 py-16" id="about">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-2xl text-[#d1c4f7] font-bold tracking-wider text-storm font-[Orbitron,sans-serif]">
          About International Hackathon
        </h1>
       
        
      </motion.div>

      {/* College Info Section */}
      <div className="flex flex-col items-center justify-center gap-6 mb-16 text-center">
     
        <p className=" font-medium text-3xl text-gray-300 mt-2">
          In Association with Student Clubs
        </p>

       

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-4">
          <a
            href="https://dev-innovationhubpscmr.pantheonsite.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border-[3px] border-[#505081] shadow-[10px_10px_0px_#393969] p-6 hover:shadow-[12px_12px_0px_#292850] transition duration-300"
          >
            <img
              src="/clublog.jpg"
              alt="Innovation Hub Logo"
              className="w-[150px] h-[150px] object-contain"
            />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border-[3px] border-[#505081] shadow-[10px_10px_0px_#393969] p-6 hover:shadow-[12px_12px_0px_#292850] transition duration-300"
          >
            <img
              src="/auralogo.jpeg"
              alt="AuraClub Logo"
              className="w-[150px] h-[150px] object-contain"
            />
          </a>
        </div>
      </div>

      {/* Vision, Mission, Objective Cards Section */}
      <div className="flex flex-wrap justify-center md:justify-between gap-8 mb-24">
        {blockData.map(({ title, image, content }, idx) => (
          <div
            key={idx}
            className="w-[320px] border-[3px] border-[#505081] rounded-3xl shadow-[10px_10px_0px_#393969] hover:scale-105 hover:shadow-[12px_12px_0px_#292850] transition-transform duration-300 bg-[#2b2a45]"
          >
            <div className="h-60 flex items-center justify-center bg-white rounded-t-3xl">
              <img
                src={image}
                alt={`${title} Icon`}
                className="w-[140px] h-[140px] object-contain"
              />
            </div>
            <div className="p-6 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
              <h2 className="text-xl font-bold text-white text-center mb-4">{title}</h2>
              <div>{content}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits */}
      <div className="section-benefits">
        <h2 className="heading-benefits">Benefits of Participating</h2>
        <div className="cards-benefits-wrapper">
          {[
            { icon: <FaLaptopCode size={60} />, text: "Technical Skills" },
            { icon: <FaNetworkWired size={60} />, text: "Networking" },
            { icon: <FaAward size={60} />, text: "Exciting Prizes" },
            { icon: <FaIdBadge size={60} />, text: "Portfolio Boost" },
          ].map((item, idx) => (
            <div key={idx} className="card-benefit">
              <div className="icon-benefit">{item.icon}</div>
              <p className="text-benefit">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
<div className="w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 border-t-4 border-[#6f23bc]">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#442982] mb-4">
        National / Offline Participation
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-left text-sm sm:text-base">
        {/* list items */}
        <li>Participants must be present at PSCMRCET, Vijayawada.</li>
      <li>Basic infrastructure like internet & power will be provided.</li>
      <li>Bring your own laptops, peripherals, and required tools.</li>
      <li>ID and institutional proof is mandatory for entry.</li>
      <li>Follow in-campus guidelines and event timings.</li>
      <li>Food and accommodation info will be shared separately.</li>
      <li>On-site technical support will be available.</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 border-t-4 border-[#6f23bc]">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#442982] mb-4">
        International / Online Participation
      </h3>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 text-left text-sm sm:text-base">
        {/* list items */}
        <li>Participate remotely with stable internet access.</li>
      <li>Use communication tools like Zoom, Google Meet, etc.</li>
      <li>Real-time tools like GitHub, Figma, Replit encouraged.</li>
      <li>ID and institutional proof is mandatory for entry.</li>
      <li>Team must be present for the live demo presentation.</li>
      <li>Follow the same deadlines and judging criteria as offline teams.</li>
      <li>Submit demo video, source code, and presentation deck on time.</li>
      </ul>
    </div>
  </div>
</div>

      {/* Memories Carousel */}
      <div className="bg-[#1c1b2f] p-6 md:p-12 rounded-3xl border-[3px] border-[#505081] shadow-[0_8px_20px_rgba(0,0,0,0.4)] mb-16">
        <h2 className="text-4xl md:text-3xl font-bold text-center text-[#d1c4f7] mb-10 font-[Orbitron,sans-serif]">
          Memories of Hackathon 1.0
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 max-w-[600px] mx-auto md:mx-0">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Hackathon Memory ${idx + 1}`}
                    className="rounded-2xl shadow-lg w-full h-[350px] object-contain bg-white p-2"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="w-full md:w-1/2 text-white text-lg leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#eadeda]">Highlights from Hackathon 1.0</h3>
            <p className="mb-4">
              Hackathon 1.0, held on <strong>30–31 August 2024</strong>, was a national-level event that celebrated innovation, collaboration, and student ingenuity.
              Participants from various branches presented powerful, creative solutions that left judges and mentors truly inspired.
              It was more than a competition — it was a movement of ideas and action.
              <br />
              Building on that success, we are thrilled to announce that this year we’re going international — with a global platform for creativity, problem-solving, and cross-cultural collaboration.
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => window.open("https://pscmrhackathon2024.netlify.app/", "_blank")}
                className="mt-4 px-6 py-3 bg-[#505081] text-black font-semibold rounded-lg hover:bg-[#393969] transition duration-300 shadow-md"
              >
                Go to Hackathon 1.0
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

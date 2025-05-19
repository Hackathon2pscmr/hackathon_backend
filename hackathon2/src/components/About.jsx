import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaNetworkWired, FaLaptopCode } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
        <h1
          className="text-4xl md:text-5xl font-bold tracking-wider text-storm"
        >
          About International Hackathon 2.0
        </h1>

      </motion.div>

      {/* College Info Section */}
      {/* Top Section with Logo, Club Info, and Vision/Mission/Objective Cards */}
      {/* Club & College Section Based on Sketch */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
        {/* Club Logo with Anchor */}
        <a
          href="https://dev-innovationhubpscmr.pantheonsite.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-white rounded-3xl border-[3px] border-[#505081] shadow-[10px_10px_0px_#393969] p-6 hover:shadow-[12px_12px_0px_#292850] transition duration-300"
        >
          <img
            src="/clublog.jpg"
            alt="Innovation Hub Logo"
            className="w-[150px] h-[150px] object-contain"
          />
        </a>

        {/* Club + College Info with College Logo */}
        <div className="flex flex-col md:flex-row items-center gap-6 flex-1 justify-between">
          {/* Text Info */}
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#eadeda] mb-2">
              Innovation Hub Club
            </h2>
            <p className="text-gray-200 max-w-xl mx-auto md:mx-0 text-sm sm:text-base mb-4">
              A student-led initiative that fosters creativity, innovation, and entrepreneurship at PSCMRCET
              through hackathons, ideathons, and startup support activities.
            </p>

            <h3 className="text-xl font-semibold text-[#eadeda] mb-1">
              Potti Sriramulu Chalavadi Mallikarjuna Rao College of Engineering & Technology (PSCMRCET)
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Established in 2008 and affiliated with JNTUK, PSCMR College offers premier engineering and
              management education across disciplines, nurturing next-gen innovators.
            </p>
          </div>

          {/* College Logo with Anchor */}
          <a
            href="https://pscmr.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-3xl border-[3px] border-[#505081] shadow-[10px_10px_0px_#393969] p-6 hover:shadow-[12px_12px_0px_#292850] transition duration-300"
          >
            <img
              src="/pscmrlog.jpg"
              alt="PSCMRCET Logo"
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
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-storm mb-10 text-center">Benefits of Participating</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: <FaLaptopCode size={60} />, text: "Technical Skills" },
            { icon: <FaNetworkWired size={60} />, text: "Networking" },
            { icon: <FaAward size={60} />, text: "Exciting Prizes" },
            { icon: <i className="fa fa-address-card text-[60px]" />, text: "Portfolio Boost" },
          ].map((item, idx) => (
            <div key={idx} className="bg-twilight p-6 rounded-3xl w-[220px] sm:w-[250px] shadow-[8px_8px_0px_#505081] hover:-translate-y-2 hover:shadow-[12px_12px_0px_#393969] transition duration-300 flex flex-col items-center">
              <div className="text-storm mb-4">{item.icon}</div>
              <p className="text-lg font-semibold text-white text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Memories Carousel */}
      <div className="bg-[#1c1b2f] p-6 md:p-12 rounded-3xl border-[3px] border-[#505081] shadow-[0_8px_20px_rgba(0,0,0,0.4)] mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
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
              Last year’s hackathon was an unforgettable celebration of innovation and collaboration. Students from all branches brought fresh, powerful ideas.
              Judges and mentors were deeply impressed by the talent on display. It was more than a competition — it was a movement of ideas and action.
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
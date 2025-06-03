import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const countryCodes = [
    "af", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "au", "at", "az",
    "bs", "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "bq", "ba", "bw", "bv",
    "br", "io", "bn", "bf", "bi", "cv", "kh", "cm", "ca", "ky", "cf", "td", "cl", "cn",
    "cx", "cc", "co", "km", "cd", "cg", "ck", "cr", "ci", "hr", "cu", "cw", "cy", "cz", "dk",
    "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "sz", "et", "fk", "fo", "fj", "fi",
    "fr", "gf", "pf", "tf", "ga", "gm", "ge", "de", "gh", "gi", "gr", "gl", "gd", "gp", "gu",
    "gt", "gg", "gn", "gw", "gy", "ht", "hm", "va", "hn", "hk", "hu", "is", "in", "id", "ir",
    "iq", "ie", "im", "il", "it", "jm", "jp", "je", "jo", "kz", "ke", "ki", "kp", "kr", "kw",
    "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mg", "mw", "my", "mv",
    "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "me", "ms", "ma",
    "mz", "mm", "na", "nr", "np", "nl", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mk", "mp",
    "no", "om", "pw", "ps", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa",
    "re", "ro", "ru", "rw", "bl", "sh", "kn", "lc", "mf", "pm", "vc", "ws", "sm", "st", "sa",
    "sn", "rs", "sc", "sl", "sg", "sx", "sk", "si", "sb", "so", "za", "gs", "ss", "es", "lk",
    "sd", "sr", "sj", "se", "ch", "sy", "tw", "tj", "tz", "th", "tl", "tg", "tk", "to", "tt",
    "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "gb", "us", "um", "uy", "uz", "vu", "ve",
    "vn", "vg", "vi", "wf", "eh", "ye", "zm", "zw"
  ];

  // State for mobile navbar toggle
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-08-29T00:00:00"); // August 29th, 2025, midnight
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const colors = {
    darkBlue: "#272757",
    mediumBlue: "#505081",
    lightBlue: "#8686AC",
    accentPurple: "#8A2BE2",
    white: "#fff",
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen p-6 sm:p-8"
      style={{
        backgroundColor: colors.darkBlue,
        fontFamily: "'Orbitron', monospace",
        color: colors.white,
        // backgroundImage: url('/mnt/data/eedc15c9-795f-470c-a6af-f89b01ba2b97.png'),
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Header with Full-Width Banner Image */}
      <header className="z-50">
        <a
          href="https://pscmr.ac.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./header.jpg"
            alt="PSCMRCET Full Banner"
            className="w-full h-auto object-cover"
          />
        </a>
      </header>

      {/* Navbar */}
      <nav
        className="bg-[#1a1a2e] border-y-2 border-[#eadeda] px-4 py-2 sm:py-3 flex items-center justify-between sm:justify-center gap-2 sm:gap-6 text-white shadow-md"
      >
        {/* Left: Flags Carousel */}
        <div className="flex items-center  w-32 sm:w-40 h-8 sm:h-10">
          <Swiper
            className="w-full h-full"
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            modules={[Autoplay]}
          >
            {countryCodes.map((code, index) => (
              <SwiperSlide
                key={`${code}-${index}`}
                className="flex items-center justify-center !p-0"
              >
                <img
                  src={`https://flagcdn.com/w80/${code}.png`}
                  alt={`${code.toUpperCase()} Flag`}
                  className="object-contain w-full h-full"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Center: Title (Desktop Only) */}
        <div className="hidden sm:flex flex-1 justify-center items-center gap-2 text-3xl font-semibold tracking-[0.2em] text-white">
          <img
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
            className="h-5 object-contain"
          />
          INTERNATIONAL HACKATHON
        </div>

        <div className="relative flex items-center">
          {/* Register button desktop */}
          <button
            onClick={() => navigate("/register")}
            className="hidden sm:inline-block border border-white rounded-md px-4 py-1 text-purple-500 whitespace-nowrap hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:scale-105 transition duration-300"
          >
            Register
          </button>

          {/* Hamburger toggle button mobile */}
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="sm:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 focus:outline-none"
          >
            <span
              className={`block w-7 h-0.5 bg-black rounded transition-transform duration-300 ${navOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-black rounded transition-opacity duration-300 ${navOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block w-7 h-0.5 bg-black rounded transition-transform duration-300 ${navOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>

          {/* Mobile Register Menu */}
          {navOpen && (
            <div className="absolute top-full right-0 mt-2 sm:hidden bg-black border border-white rounded-md shadow-lg z-40">
              <button
                onClick={() => {
                  navigate("/register");
                  setNavOpen(false);
                }}
                className="w-full px-4 py-2 text-purple-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition duration-300"
              >
                Register Now &raquo;
              </button>
            </div>
          )}
        </div>


      </nav>


      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side Content */}
        <div className="flex-1">
          <h1
            className="uppercase"
            style={{
              fontFamily: "'Imperial Quortex', sans-serif",
              fontSize: "5rem",
              color: colors.white,
              letterSpacing: "0.13em",
              textShadow: "4px 4px 0 #505081, 8px 8px 0 #1246b5",
              marginBottom: "1rem",
              background:
                "linear-gradient(90deg, transparent 0%, transparent 30%, #505081 30%, #505081 50%, transparent 50%)",
              display: "inline-block",
              paddingBottom: "0.2rem",
            }}
          >
            HACKATHON
          </h1>

          <p className="text-xl max-w-xl font-medium mb-8">
            International Level{" "}
            <strong className="text-2xl font-bold">
              24 hours continuous Hackathon
            </strong>{" "}
            showcasing innovative solutions and tech talents from across the world
          </p>

          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 rounded-full uppercase tracking-widest text-white font-bold border-2 border-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:shadow-[0_0_20px_5px_rgba(138,43,226,0.8)]"
            style={{
              backgroundColor: colors.darkBlue,
              letterSpacing: "0.2em",
              boxShadow: `0 0 10px ${colors.accentPurple}`,
            }}
          >
            Register Now &raquo;
          </button>


          {/* Timer */}
          <div
            className="mt-10 flex gap-3 text-center font-mono justify-start sm:justify-start"
            style={{
              fontSize: "0.7rem",
              fontWeight: "500",
              fontFamily: "'Orbitron', sans-serif",
              flexWrap: "nowrap",
            }}
          >
            {Object.keys(timeLeft).map((unit) => (
              <div
                key={unit}
                className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]"
                style={{
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  {timeLeft[unit]}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    marginTop: "0.3rem",
                  }}
                >
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Content */}
        <div className="w-full flex flex-col sm:grid sm:grid-cols-2 items-start gap-4 sm:gap-6 lg:gap-12 home-grid">
          {/* Date Box */}
          <div
            className="rounded-lg p-3 sm:p-4 text-white max-w-full w-full"
            style={{
              backgroundColor: colors.darkBlue,
              fontFamily: "'Orbitron', monospace",
              color: colors.white,
              // backgroundImage: `url('/mnt/data/eedc15c9-795f-470c-a6af-f89b01ba2b97.png')`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}

          >
            {/* <div className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
              <span className="text-pink-300 text-xl sm:text-2xl font-bold">29-30 </span>
              <span className="text-white text-xl sm:text-2xl font-bold">August 2025</span>
            </div> */}



            <div
              className="rounded-lg p-3 sm:p-4 text-white max-w-full w-full"
              style={{
                backgroundColor: "black",
                backgroundImage:
                  "url('https://cdn-icons-png.flaticon.com/512/2910/2910765.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 10px top 10px",
                backgroundSize: "30px 30px",
                position: "relative",
              }}
            >
              <div className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 break-words">
                <span className="text-pink-300 text-xl sm:text-2xl font-bold">29-30 </span>
                <span className="text-white text-xl sm:text-2xl font-bold">August 2025</span>
              </div>

              <hr className="border-dotted border-pink-300 mb-2 sm:mb-3" />

              <div className="bg-gradient-to-r from-yellow-200 via-pink-300 to-red-200 text-black font-bold p-3 rounded-lg shadow-lg text-center">
                <p className="text-xl sm:text-2xl text-purple-900 mb-1">🔥 Early Bird Offer</p>
                <p className="text-4xl sm:text-5xl text-red-700 mb-1">₹900</p>
                <p className="text-sm sm:text-base text-gray-800 italic mb-3">Valid till <strong>30th July 2025</strong></p>

                <hr className="border border-dashed border-pink-400 my-2" />

                <p className="text-xl sm:text-2xl mt-3">Regular Fee</p>
                <p className="text-3xl sm:text-4xl text-black">₹1000 / Team</p>
                <p className="text-md sm:text-lg mt-1 text-purple-800">Max 4 Members per Team</p>
                <p className="text-3xl sm:text-xl text-black">Last Registration Date: <strong>August 12th 2025</strong></p>
              </div>
            </div>
          </div>

          {/* Right Column: Information + Venue + Organized */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            {/* Information Details */}
            <div
              className="rounded-lg p-3 sm:p-4 text-white max-w-full w-full"
              style={{
                backgroundColor: "black",
                backgroundImage:
                  "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.3), transparent 70%)",
                position: "relative",
              }}
            >
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <h2 className="font-bold text-base sm:text-lg break-words">Information Details</h2>
                <span
                  className="cursor-pointer text-white text-base sm:text-lg"
                  style={{ fontWeight: "bold" }}
                  title="Info"
                >
                  ℹ
                </span>
              </div>
              <hr className="border-dotted border-white mb-2 sm:mb-3" />
              <button
                onClick={scrollToAbout}
                className="text-black text-base sm:text-lg font-normal text-left hover:text-gray-400 flex justify-between items-center w-full max-w-full whitespace-normal break-words px-3 py-2 rounded"
              >
                About <span className="ml-2">➔</span>
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("tracks");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-2 sm:mt-3 text-black text-base sm:text-lg font-normal text-left hover:text-gray-400 flex justify-between items-center w-full max-w-full whitespace-normal break-words px-3 py-2 rounded"
              >
                Tracks & Challenges <span className="ml-2">➔</span>
              </button>
            </div>

            {/* Venue */}
            <div
              className="rounded-lg p-3 sm:p-4 text-white max-w-full w-full"
              style={{
                backgroundColor: "#000000",
                boxShadow: "inset 0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              <div className="font-semibold text-base sm:text-lg flex items-center gap-2 mb-1 break-words">
                <span role="img" aria-label="location" className="text-base sm:text-lg">
                  📍
                </span>
                Venue
              </div>
              <hr className="border-dotted border-white mb-2 sm:mb-3" />
              <p className="text-sm sm:text-base whitespace-normal break-words">
                PSCMR College Of Engineering And Technology, Kothapet, Vijayawada, Andhra Pradesh, India
              </p>
            </div>

            {/* Organized By */}
            <div
              className="rounded-lg p-3 sm:p-4 text-white max-w-full w-full"
              style={{
                backgroundColor: "black",
                fontFamily: "'Orbitron', monospace",
                fontSize: "0.75rem",
                lineHeight: 1.3,
                whiteSpace: "pre-line",
                letterSpacing: "0.05em",
              }}
            >
              <div className="font-semibold text-base sm:text-lg mb-2 break-words">Organized By</div>
              <hr className="border-dotted border-white mb-2 sm:mb-3" />
              <p className="text-xs sm:text-sm whitespace-normal break-words">CSE - DATA SCIENCE</p>
              <p className="text-xs sm:text-sm whitespace-normal break-words">CSE - AI & ML</p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 640px) {
          h1 {
            font-size: 2rem !important;
          }

          .flex-col > div:first-child {
            margin-bottom: 2rem;
          }

          .mt-10.flex {
            justify-content: center !important;
          }

          .home-grid {
            display: grid;
          }

          .home-grid > div {
            margin-bottom: 1rem;
          }
        }

        /* Specific styles for countries carousel */
        .countries-swiper .swiper-slide {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          height: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        .countries-swiper .swiper-slide img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
};

export default Home1;
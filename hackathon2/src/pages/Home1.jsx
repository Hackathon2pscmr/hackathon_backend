import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

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

    return (
        <div
            className="min-h-screen p-6 sm:p-8"
            style={{
                backgroundColor: colors.darkBlue,
                fontFamily: "'Orbitron', monospace",
                color: colors.white,
                backgroundImage: `url('/mnt/data/eedc15c9-795f-470c-a6af-f89b01ba2b97.png')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            {/* Navbar */}
            <nav
    className="relative flex items-center justify-between mb-8 px-4 py-1 sm:px-0 sm:justify-center"
    style={{
        backgroundColor: navOpen || window.innerWidth > 640 ? "transparent" : "#000000",
        zIndex: 50,
    }}
>
    {/* Left side: Logo */}
    <div className="flex items-center gap-2">
        <img
            src="/college_logo.jpg"
            alt="Logo"
            className="w-12 h-12 cursor-pointer sm:w-16 sm:h-16"
            onClick={() => (window.location.href = "https://pscmr.ac.in/")}
        />
    </div>

    {/* Centered title - only on desktop */}
    <span
        className="hidden sm:flex flex-1 justify-center"
        style={{
            fontSize: "1.4rem", // slightly smaller
            letterSpacing: "0.2em",
            color: colors.white,
            textAlign: "center",
        }}
    >
        INTERNATIONAL HACKATHON 2.O
    </span>

    {/* Right side - toggle on mobile */}
    <div className="flex items-center">
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
    </div>

    {/* Mobile menu */}
    {navOpen && (
        <div
            className="absolute top-full right-4 mt-2 sm:hidden bg-black rounded-md border border-white shadow-lg z-40"
            style={{ minWidth: "130px" }}
        >
            <button
                onClick={() => {
                    navigate("/register");
                    setNavOpen(false);
                }}
                className="w-full px-4 py-2 text-purple-500 border border-white rounded-md bg-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white transition duration-300"
            >
                Register Now &raquo;
            </button>
        </div>
    )}
</nav>


            {/* Main content */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Side Content */}
                <div className="flex-1">
                    <h1
                        className="font-black uppercase"
                        style={{
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
                        International{" "}
                        <strong>Level 24 hour Hackathon</strong> showcasing innovative solutions
                        and tech talents from across the world
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
                            fontSize: "0.7rem", // Smaller font size for mobile
                            fontWeight: "500",
                            fontFamily: "'Orbitron', sans-serif",
                            flexWrap: "nowrap", // Prevent wrapping
                        }}
                    >
                        {Object.keys(timeLeft).map((unit) => (
                            <div
                                key={unit}
                                className="flex flex-col items-center min-w-[60px] sm:min-w-[80px]"
                                style={{
                                    flexShrink: 0, // Prevent shrinking to avoid breaking into new row
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 w-full lg:w-[600px]">
  {/* Date Box */}
  <div
    className="rounded-lg p-3 sm:p-4 text-white max-w-full"
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
      <span className="text-white text-xl sm:text-2xl font-bold">August</span>
    </div>
    <hr className="border-dotted border-pink-300 mb-2 sm:mb-3" />
    <div className="flex flex-col gap-2 sm:gap-3">
      <button
        onClick={() => alert("Guidelines Clicked")}
        className="text-black text-base sm:text-lg font-normal text-left hover:text-pink-400 flex justify-between items-center w-full max-w-full whitespace-normal break-words px-3 py-2 rounded"
      >
        Guidelines <span className="ml-2">➔</span>
      </button>
      <button
        onClick={() => alert("Events Clicked")}
        className="text-black text-base sm:text-lg font-normal text-left hover:text-pink-400 flex justify-between items-center w-full max-w-full whitespace-normal break-words px-3 py-2 rounded"
      >
        Events <span className="ml-2">➔</span>
      </button>
    </div>
  </div>

  {/* Information Details */}
  <div
    className="rounded-lg p-3 sm:p-4 text-white max-w-full"
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
        ℹ️
      </span>
    </div>
    <hr className="border-dotted border-white mb-2 sm:mb-3" />
    <button
      onClick={() => alert("About Clicked")}
      className="text-black text-base sm:text-lg font-normal text-left hover:text-gray-400 flex justify-between items-center w-full max-w-full whitespace-normal break-words px-3 py-2 rounded"
    >
      About <span className="ml-2">➔</span>
    </button>
    <button
      onClick={() => alert("Judge Panel Clicked")}
      className="mt-2 sm:mt-3 text-black text-base sm:text-lg font-normal text-left hover:text-gray-400 flex justify-between items-center w-full max-w-full whitespace-normal break-words px-3 py-2 rounded"
    >
      Tracks & Challenges <span className="ml-2">➔</span>
    </button>
  </div>

  {/* Venue */}
  <div
    className="rounded-lg p-3 sm:p-4 text-white max-w-full"
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
      PSCMR College Of Engineering And Technology
    </p>
  </div>

  {/* Organized By */}
  <div
    className="rounded-lg p-3 sm:p-4 text-white max-w-full"
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

            {/* Responsive styles */}
            <style>{`
        @media (max-width: 640px) {
          /* Reduce font size of HACKATHON on mobile */
          h1 {
            font-size: 2.1rem !important;
          }

          /* Stack main content vertically on mobile */
          .flex-col > div:first-child {
            margin-bottom: 2rem;
          }

          /* Timer layout stack */
          .mt-10.flex {
            justify-content: center !important;
          }

          /* The right side boxes grid: 2 columns on mobile as well */
          .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          /* On mobile, margin bottom between boxes */
          .grid > div {
            margin-bottom: 1rem;
          }

          /* Hide the centered navbar title on mobile (already hidden with sm:hidden) */
        }
      `}</style>
        </div>
    );
};

export default Home1;

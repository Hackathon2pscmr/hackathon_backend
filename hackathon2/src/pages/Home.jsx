import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-[#0F0E47] text-white font-sans overflow-x-hidden">
      
      {/* Navbar */}
      <header className="fixed w-full px-6 py-4 flex justify-between items-center bg-[#0F0E47] shadow-lg z-50">
        <h1 className="text-2xl md:text-3xl font-bold text-[#ffffff] tracking-wider fancy-font glow-text">
          PSCMR Hackathon 2025
        </h1>
        <nav className="hidden md:flex gap-5 font-medium text-sm">
          <a href="#overview" className="nav-link">About</a>
          <a href="#highlights" className="nav-link">Highlights</a>
          <a href="#themes" className="nav-link">Themes</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="/register" className="bg-[#505081] hover:bg-[#8686AC] px-4 py-2 rounded-xl font-semibold transition-all">
            Register
          </a>
        </nav>
      </header>

      

      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center pt-32 pb-24 px-6 bg-gradient-to-br from-[#0F0E47] to-[#272757]"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-white fancy-font glow-text mb-4">
          INTERNATIONAL HACKATHON
        </h2>
        <p className="text-xl md:text-2xl text-[#8686AC] mb-2">
          Aug 29-30, 2025 | Vijayawada, India
        </p>
        <p className="text-lg text-[#ccc] max-w-2xl mx-auto mb-6">
          A 24-Hour Hackathon for engineers, managers, medics, and creators to solve real-world challenges and innovate.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/register"
          className="inline-block bg-[#8686AC] hover:bg-[#505081] px-8 py-3 text-lg font-bold rounded-full transition-all shadow-lg"
        >
          Register Now
        </motion.a>
      </motion.section>

      {/* Overview */}
      <section id="overview" className="px-6 py-20 bg-[#1a1a40] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 glow-text">What is PSCMR Hackathon?</h3>
        <p className="text-[#ccc] max-w-3xl mx-auto text-lg">
          It's a global tech fest uniting passionate problem-solvers to innovate across domains. Collaborate, code, and create lasting impact.
        </p>
      </section>

      {/* Highlights */}
      <section id="highlights" className="py-20 px-6 bg-[#0F0E47]">
        <h3 className="text-3xl md:text-4xl text-center font-bold mb-10 glow-text">Key Highlights</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "₹1,00,000+ Prize Pool", color: "text-yellow-400", desc: "Cash prizes and certificates" },
            { title: "26+ Themes", color: "text-pink-300", desc: "From AI to Agriculture" },
            { title: "All Disciplines", color: "text-cyan-300", desc: "Engineers, Medicos, Designers & more" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-[#272757] p-6 rounded-xl shadow-xl text-center"
            >
              <h4 className={`text-xl font-bold mb-2 ${item.color}`}>{item.title}</h4>
              <p className="text-white">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Themes */}
      <section id="themes" className="px-6 py-20 bg-[#1a1a40] text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 glow-text">Themes</h3>
        <p className="text-[#ccc] max-w-3xl mx-auto">
          Diverse problem statements across AI, Healthcare, Blockchain, Environment, Smart Villages and more...
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center bg-[#0F0E47]">
        <h3 className="text-2xl font-bold mb-6">Connect with Us</h3>
        <div className="flex justify-center gap-6 text-2xl text-[#8686AC]">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://pscmr.ac.in" target="_blank" rel="noreferrer"><FaGlobe /></a>
        </div>
        <p className="text-sm text-[#aaa] mt-4">
          © 2025 PSCMR Hackathon | Email: pscmrhackathon2k25@gmail.com
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#0F0E47] text-center py-4 text-[#aaa] text-sm">
        Made with 💻 & 💡 by PSCMR Hackathon Team
      </footer>

      {/* Custom Styles */}
      <style>{`
        .fancy-font {
          font-family: 'Poppins', sans-serif;
        }
        .glow-text {
          text-shadow: 0 0 10px #8686AC, 0 0 20px #8686AC;
        }
        .nav-link {
          color: #ccc;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: white;
        }
        section {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
}
      `}</style>
    </div>
  );
};

export default Home;

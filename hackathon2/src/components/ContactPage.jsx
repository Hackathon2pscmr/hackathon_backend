import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = "Valid email required";
    if (!formData.phone || !/^\d+$/.test(formData.phone)) errs.phone = "Digits only";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const mailtoLink = `mailto:pscmrhackathon2k25@gmail.com?subject=Hackathon%20Contact%20From%20${encodeURIComponent(
        formData.name
      )}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(
        formData.email
      )}%0APhone: ${encodeURIComponent(formData.phone)}%0AMessage: ${encodeURIComponent(
        formData.message
      )}`;
      window.location.href = mailtoLink;
      setSent(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  return (
    <div className="contact-container">
      <motion.h2 className="contact-heading" initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Get in Touch
      </motion.h2>
      <motion.p className="contact-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        Reach out to us for any queries regarding PSCMR Hackathon 2K25
      </motion.p>

      <motion.div className="contact-box" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input name="email" type="email" placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input name="phone" type="text" placeholder="Phone" maxLength="10"
            value={formData.phone}
            onChange={(e) => {
              if (/^\d*$/.test(e.target.value)) {
                setFormData({ ...formData, phone: e.target.value });
              }
            }}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}

          <textarea name="message" placeholder="Your Message" rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <motion.button type="submit" whileHover={{ scale: 1.05 }}>
            Submit
          </motion.button>

          {sent && <p style={{ color: "lightgreen", marginTop: "0.5rem" }}>Redirecting to email app...</p>}
        </form>

        <div className="contact-map">
          <iframe
            title="PSCMR College"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.044286593364!2d80.6135905!3d16.523861699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f01e63539d21%3A0x71a2c954de88ca67!2sPSCMR%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1747475313467!5m2!1sen!2sin"
            width="100%" height="100%" allowFullScreen loading="lazy"
          ></iframe>
        </div>
      </motion.div>

      <motion.div className="social-icons" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <a href="https://wa.me/0000000000" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        <a href="https://www.instagram.com/pscmrcet_csedatascience/" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/cse-datascience-pscmrcet-4a8514333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </motion.div>

      <footer className="footer">
        <p>&copy; 2025 PSCMR CSE DS Hackathon | pscmrhackathon2k25@gmail.com</p>
        <p>
          Developed by <a href="https://thathadevilalithaportfolio.netlify.app/" target="_blank"><strong>T.DEVI LALITHA</strong></a> & <a href="https://seeram-portfolio.netlify.app/" target="_blank"><strong>Seeram Shanmukha</strong></a>
        </p>
      </footer>
    </div>
  );
};

export default ContactPage;
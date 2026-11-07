import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaCopy,
} from "react-icons/fa";



function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Let's Connect</h2>
        <p>
          Add a short invitation to contact you about opportunities, services, or collaborations.
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaPhoneAlt className="contact-icon" />

          <h3>Phone</h3>

          <p>Add your phone number</p>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaEnvelope className="contact-icon" />

          <h3>Email</h3>

          <a href="mailto:hello@example.com">
            hello@example.com
          </a>

          <button
            type="button"
            className="copy-email-btn"
            onClick={handleCopyEmail}
            aria-label="Copy email"
          >
            <FaCopy />
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaMapMarkerAlt className="contact-icon" />

          <h3>Location</h3>

          <p>Your City, Country</p>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaLinkedin className="contact-icon" />

          <h3>LinkedIn</h3>

          <a
            href="https://example.com/linkedin"
            target="_blank"
            rel="noreferrer"
          >
            Visit Profile
          </a>
        </motion.div>

        <motion.div
          className="contact-card"
          whileHover={{ y: -10, scale: 1.05 }}
        >
          <FaGithub className="contact-icon" />

          <h3>GitHub</h3>

          <a
            href="https://example.com/github"
            target="_blank"
            rel="noreferrer"
          >
            View Projects
          </a>
        </motion.div>

        
      </div>
    </section>
  );
}

export default Contact;

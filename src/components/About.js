import placeholder from "../assets/project-placeholder.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [placeholder];

function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about">
      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me better</p>
      </div>

      <div className="about-wrapper">
        {/* LEFT SIDE */}
        <motion.div
          className="about-image"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt="Sample portfolio image"
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-content"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-card">
            <h3>👨‍💻 About Me</h3>

            <p>
              I'm <strong>Your Name</strong>. Add a short introduction about your background, interests, and professional goals here.
            </p>

            <p>
              Describe your experience, the services you offer, and the types of problems you enjoy solving. Replace all sample skills with your own.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Areas of Expertise</h3>

            <div className="tags">
              <span>React.js</span>
              <span>Spring Boot</span>
              <span>Java</span>
              <span>Python</span>
              <span>REST APIs</span>
              <span>MySQL</span>
              <span>Oracle</span>
              <span>MongoDB</span>
              <span>IoT</span>
              <span>ESP32</span>
              <span>Power BI</span>
              <span>LSTM</span>
              <span>SVM</span>
            </div>
          </div>

          <div className="about-card">
            <h3>🎯 Jobs Seeking</h3>

            <ul>
              <li>Software Engineer</li>
              <li>Full Stack Developer</li>
              <li>Backend Developer</li>
              <li>System Administrator</li>
              <li>Database Administrator</li>
              <li>IT Support Engineer</li>
              <li>Mobile Developer</li>
              <li>Frontend Developer</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

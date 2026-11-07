import profile from "../assets/profile-placeholder.svg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div className="hero-left" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="eyebrow">Available for new opportunities</p>
        <h1>Your <span>Name</span></h1>
        <h2><Typewriter words={["Your Professional Title", "Full Stack Developer", "Software Engineer", "IoT Developer", "Remote Support Engineer"]} loop={0} cursor cursorStyle="|" typeSpeed={75} deleteSpeed={45} /></h2>
        <p className="description">Introduce yourself here and describe the value you bring to your clients or team.</p>
        <div className="buttons"><a href="#projects" className="btn-primary">View my work <FaArrowRight /></a><a href="#contact" className="btn-secondary">Contact me</a></div>
        <div className="socials"><a href="https://example.com/github" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a><a href="https://example.com/linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a><a href="mailto:hello@example.com" aria-label="Email Your Name"><FaEnvelope /></a></div>
      </motion.div>
      <motion.div className="hero-right" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}><div className="portrait-frame"><img src={profile} alt="Your Name" fetchPriority="high" /></div></motion.div>
    </section>
  );
}

export default Hero;

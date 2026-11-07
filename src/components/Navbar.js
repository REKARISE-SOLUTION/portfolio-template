import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = ["home", "about", "journey", "skills", "certificates", "projects", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <a className="logo" href="#home" onClick={() => setOpen(false)} aria-label="Company portfolio, home">company<span>.dev</span></a>
      <button className="menu-toggle" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
      <ul className={`nav-links ${open ? "is-open" : ""}`}>
        {links.map((link) => <li key={link}><a className={`${active === link ? "active" : ""} ${link === "contact" ? "nav-cta" : ""}`} href={`#${link}`} onClick={() => setOpen(false)}>{link.charAt(0).toUpperCase() + link.slice(1)}</a></li>)}
      </ul>
    </nav>
  );
}

export default Navbar;

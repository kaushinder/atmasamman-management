import { useState } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Courses", href: "#courses" },
  { label: "Benefits", href: "#benefits" },
  { label: "Universities", href: "#universities" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#e85d04"/>
              <path d="M6 19L10 9L14 16L18 11L22 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="logo-text">AIMT<strong>Management</strong></span>
        </a>

        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            Become a Partner
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

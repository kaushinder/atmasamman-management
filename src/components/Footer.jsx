import "./Footer.css";

const footerLinks = {
  "Courses": ["MBA Online", "MCA Online", "BBA Online", "BCA Online", "M.Com Online", "B.Com Online", "MA Online", "MSc Online"],
  "Universities": ["Manipal University", "Amity University", "LPU Online", "IGNOU", "Jain University", "Chandigarh University", "NMIMS", "Symbiosis"],
  "Partner": ["Become a Partner", "Partner Login", "Partner Dashboard", "Commission Structure", "Marketing Materials", "Training Program", "Partner FAQs", "Support Center"],
  "Company": ["About CollegeVidya", "Our Mission", "Newsroom", "Careers", "Blog", "Privacy Policy", "Terms of Service", "Contact Us"],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect width="28" height="28" rx="8" fill="#e85d04"/>
                    <path d="M6 19L10 9L14 16L18 11L22 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="logo-text">AIMT<strong>Management</strong></span>
              </div>
              <p className="footer-tagline">
                India's most trusted online education guidance platform. 
                Helping 1 lakh+ students make the right career choice since 2019.
              </p>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  1800-572-9877 (Toll Free)
                </div>
                <div className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  partner@aimtmanagement.in
                </div>
              </div>
              <div className="footer-app-badges">
                <a href="#" className="app-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.42.07 2.41.74 3.23.8.99-.19 1.93-.91 3-.96 2.06-.1 3.64.94 4.51 2.45-4.46 2.65-3.7 8.4.26 10.59zm-3.73-14.8C13.2 7.02 11.15 8.5 9.42 8.39c-.3-2.1.77-4.3 2.5-5.47 1.67-1.11 3.67-.59 3.67-.59.13 1.61-.3 2.9-2.27 3.15z"/></svg>
                  App Store
                </a>
                <a href="#" className="app-badge">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.27.15.59.18.91.07L13.79 13 10 9.21 3.18 23.76zM20.12 9.71l-2.45-1.41-2.72 2.41L17.67 13l2.42-1.4c.7-.4.7-1.48.03-1.89zM2.1 1.24C1.83 1.5 1.68 1.89 1.68 2.38V21.5c0 .49.15.87.42 1.13l.07.07L11.6 13v-.26L2.17 1.18l-.07.06zM14.08 7.89L4.27 2.3l-.07-.04 9.81 9.04.07-3.41z"/></svg>
                  Google Play
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col">
                <h4 className="footer-col-title">{title}</h4>
                <ul className="footer-col-links">
                  {links.map(link => (
                    <li key={link}><a href="#">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © {currentYear} AIMT Management. All rights reserved. 
            <span> — An independent education guidance platform.</span>
          </p>
          <div className="footer-accreditations">
            {["UGC Approved", "NAAC Listed", "Govt. Recognized"].map(a => (
              <span key={a} className="accreditation-tag">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

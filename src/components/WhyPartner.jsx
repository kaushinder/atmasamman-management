import "./WhyPartner.css";

const comparisons = [
  { feature: "Commission Transparency", cv: true, others: false },
  { feature: "Dedicated Relationship Manager", cv: true, others: false },
  { feature: "Real-time Earnings Dashboard", cv: true, others: false },
  { feature: "1,000+ Courses to Promote", cv: true, others: false },
  { feature: "Student EMI & Loan Facility", cv: true, others: false },
  { feature: "Marketing & Training Support", cv: true, others: false },
  { feature: "On-time Monthly Payments", cv: true, others: false },
  { feature: "Free Partner Registration", cv: true, others: false },
];

const awards = [
  { title: "Entrepreneur of the Year 2024", body: "Digitech Media", icon: "🏆" },
  { title: "Top Online Education Advisory", body: "Outlook Business", icon: "⭐" },
  { title: "Business Icon Award 2023", body: "Business Spotlight", icon: "🎖️" },
  { title: "Highest Rated on Google & Facebook", body: "Consumer Reviews", icon: "❤️" },
];

export default function WhyPartner() {
  return (
    <section className="section section-alt why-partner" id="why-partner">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Why CollegeVidya</div>
          <h2 className="section-title">We're Different From <span>The Rest</span></h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it — compare us with other platforms and see 
            why 2,500+ partners chose CollegeVidya.
          </p>
        </div>

        <div className="why-layout">
          <div className="comparison-table">
            <div className="table-header">
              <div className="th-feature">Features</div>
              <div className="th-cv">
                <span className="cv-logo-sm">CollegeVidya</span>
              </div>
              <div className="th-others">Others</div>
            </div>

            {comparisons.map(row => (
              <div key={row.feature} className="table-row">
                <div className="td-feature">{row.feature}</div>
                <div className="td-cv">
                  <div className="check-icon check-yes">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                </div>
                <div className="td-others">
                  <div className="check-icon check-no">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="why-right">
            <div className="mission-card">
              <div className="mission-icon">🌟</div>
              <h3>Our Mission</h3>
              <p>
                With a dream to make quality education accessible to every individual, 
                CollegeVidya operates on three unshakeable principles:
              </p>
              <div className="principles">
                {["Transparency", "Authenticity", "Unbiasedness"].map(p => (
                  <div key={p} className="principle-item">
                    <div className="principle-dot"></div>
                    <span>{p}</span>
                  </div>
                ))}
              </div>
              <p className="mission-footer">
                "We will never compromise on our principles as education is the 
                future-defining factor of everyone."
              </p>
            </div>

            <div className="awards-grid">
              {awards.map(award => (
                <div key={award.title} className="award-card">
                  <div className="award-icon">{award.icon}</div>
                  <div>
                    <div className="award-title">{award.title}</div>
                    <div className="award-body">{award.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

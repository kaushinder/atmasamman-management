import "./Benefits.css";

const benefits = [
  {
    icon: "💰",
    title: "Competitive Commissions",
    description: "Earn industry-leading commissions on every successful enrollment. The more students you refer, the higher your earning potential.",
    color: "#e85d04",
  },
  {
    icon: "📊",
    title: "CRM & MIS Analytics",
    description: "Access a powerful dashboard with real-time tracking, student pipeline management, and detailed analytics to maximize conversions.",
    color: "#1d4ed8",
  },
  {
    icon: "🎓",
    title: "Training & Marketing Support",
    description: "Get access to training materials, partner case studies, and ready-made marketing collateral to help you close more enrollments.",
    color: "#0f7b6c",
  },
  {
    icon: "👨‍💼",
    title: "Dedicated Relationship Managers",
    description: "Every partner gets a dedicated RM for quick escalations, guidance, and personalized support to ensure your success.",
    color: "#7c3aed",
  },
  {
    icon: "🏦",
    title: "EMI & Loan Facilities",
    description: "Help students enroll with confidence using our built-in loan and EMI options. Remove financial barriers and increase your conversions.",
    color: "#0369a1",
  },
  {
    icon: "🔒",
    title: "Transparency & Trust",
    description: "We operate on three core principles: Transparency, Authenticity, and Unbiasedness — ensuring students and partners always win.",
    color: "#be185d",
  },
];

export default function Benefits() {
  return (
    <section className="section section-alt benefits-section" id="benefits">
      <div className="container">
        <div className="benefits-layout">
          <div className="benefits-left">
            <div className="section-label">Partner Advantages</div>
            <h2 className="section-title">
              Everything You Need to<br />
              <span>Succeed as a Partner</span>
            </h2>
            <p className="section-subtitle">
              We don't just give you a link — we give you a full ecosystem. 
              Tools, training, support, and a brand that students already trust.
            </p>

            <div className="benefits-highlights">
              {[
                { value: "92.76%", label: "Student Retention Rate" },
                { value: "15–30th", label: "Monthly Payment Window" },
                { value: "30+", label: "Comparison Factors" },
              ].map(h => (
                <div key={h.label} className="highlight-item">
                  <div className="highlight-value">{h.value}</div>
                  <div className="highlight-label">{h.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary">
              Join Partner Network
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="benefits-right">
            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="benefit-card">
                  <div
                    className="benefit-icon"
                    style={{ background: `${benefit.color}15`, color: benefit.color }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

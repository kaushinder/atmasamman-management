import "./HowItWorks.css";

const steps = [
  {
    step: "01",
    icon: "📝",
    title: "Register as a Partner",
    description: "Fill out a simple form to create your partner account. Get instant access to the partner dashboard with 1,000+ courses.",
    color: "#e85d04",
  },
  {
    step: "02",
    icon: "🔗",
    title: "Share Your Unique Link",
    description: "Use your personalized referral link or marketing materials we provide to promote courses across your network.",
    color: "#1d4ed8",
  },
  {
    step: "03",
    icon: "🎓",
    title: "Students Enroll",
    description: "When students click your link and enroll in any course, the enrollment is tracked automatically to your account.",
    color: "#0f7b6c",
  },
  {
    step: "04",
    icon: "💸",
    title: "Earn Your Commission",
    description: "Receive your commission between 15th–30th of every month, directly in your bank account. No delays, no hassle.",
    color: "#7c3aed",
  },
];

export default function HowItWorks() {
  return (
    <section className="section howitworks" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Simple Process</div>
          <h2 className="section-title">How Partnering Works</h2>
          <p className="section-subtitle mx-auto">
            From registration to earning — it takes less than 10 minutes to get started. 
            Our process is built for speed and simplicity.
          </p>
        </div>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, idx) => (
            <div key={step.step} className={`step-card ${idx % 2 === 1 ? "step-card-alt" : ""}`}>
              <div className="step-number-wrap">
                <div className="step-number" style={{ borderColor: step.color, color: step.color }}>
                  {step.step}
                </div>
                <div className="step-connector" style={{ background: step.color }}></div>
              </div>
              <div className="step-content" style={{ borderTopColor: step.color }}>
                <div className="step-icon" style={{ background: `${step.color}18` }}>{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="howitworks-cta">
          <a href="#contact" className="btn btn-primary">
            Get Started Free
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <p>No upfront cost · No monthly fees · Start earning immediately</p>
        </div>
      </div>
    </section>
  );
}

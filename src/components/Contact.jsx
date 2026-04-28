import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", city: "", experience: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left">
            <div className="section-label">Get Started</div>
            <h2 className="section-title">
              Become a <span>CollegeVidya Partner</span> Today
            </h2>
            <p className="section-subtitle">
              Fill in the form and our partner team will reach out within 24 hours 
              to set up your account and guide you through the onboarding process.
            </p>

            <div className="contact-info-list">
              {[
                { icon: "⚡", title: "Fast Onboarding", desc: "Get your partner account set up in under 24 hours" },
                { icon: "🎓", title: "Free Training", desc: "Complete training provided on all courses and tools" },
                { icon: "💰", title: "No Hidden Fees", desc: "Register for free — zero upfront investment required" },
                { icon: "📞", title: "Dedicated Support", desc: "Personal relationship manager assigned to you" },
              ].map(item => (
                <div key={item.title} className="contact-info-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-title">{item.title}</div>
                    <div className="contact-info-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <div className="contact-social-label">Connect with us</div>
              <div className="social-links">
                {[
                  { label: "Facebook", icon: "f", color: "#1877f2" },
                  { label: "LinkedIn", icon: "in", color: "#0a66c2" },
                  { label: "Instagram", icon: "ig", color: "#e1306c" },
                  { label: "YouTube", icon: "▶", color: "#ff0000" },
                ].map(s => (
                  <a
                    key={s.label}
                    href="#"
                    className="social-link"
                    style={{ background: `${s.color}15`, color: s.color }}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">🎉</div>
                <h3>Application Received!</h3>
                <p>
                  Thank you, <strong>{form.name}</strong>! Our partner team will reach 
                  out to <strong>{form.email}</strong> within 24 hours to get you started.
                </p>
                <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", city: "", experience: "", message: "" }); }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h3>Partner Registration</h3>
                  <p>Free to join · No commitment</p>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Your Background</label>
                  <select id="experience" name="experience" value={form.experience} onChange={handleChange}>
                    <option value="">Select your background</option>
                    <option value="counselor">Education Counselor</option>
                    <option value="consultant">Independent Consultant</option>
                    <option value="blogger">Content Creator / Blogger</option>
                    <option value="teacher">Teacher / Faculty</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about yourself or ask any questions..."
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className={`btn btn-primary submit-btn ${loading ? "loading" : ""}`} disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Register as Partner
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="form-disclaimer">
                  By registering, you agree to our Terms of Service and Privacy Policy. 
                  We'll never share your data with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

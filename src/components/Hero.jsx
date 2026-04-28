import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background decoration */}
      <div className="hero-bg-decoration">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            🎓 India's #1 Online Education Partner Platform
          </div>

          <h1 className="hero-title">
            Partner with Us &<br />
            <span className="hero-highlight">
              Earn with Every<br />
              Student Enrolled
            </span>
          </h1>

          <p className="hero-description">
            Join 2,500+ education consultants and advisors earning commissions by 
            helping students compare and enroll in 1,000+ UGC-approved online courses 
            from top universities across India.
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-hero">
              Start Earning Today
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#how-it-works" className="btn btn-outline btn-hero">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8"/>
              </svg>
              How It Works
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-avatars">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="trust-avatar" style={{ background: `hsl(${i * 55}, 70%, 55%)` }}>
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="trust-text">
              <strong>2,500+ active partners</strong>
              <span> already earning with us</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card main-card animate-float">
            <div className="card-header">
              <div className="card-icon">💰</div>
              <div>
                <div className="card-title">Partner Earnings</div>
                <div className="card-subtitle">This month</div>
              </div>
              <div className="card-trend up">↑ 24%</div>
            </div>
            <div className="card-amount">₹1,24,500</div>
            <div className="card-bar-container">
              {[65, 80, 55, 90, 70, 95, 78].map((h, i) => (
                <div key={i} className="card-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>

          <div className="hero-card mini-card card-1">
            <div className="mini-icon">🎓</div>
            <div>
              <div className="mini-value">1,00,000+</div>
              <div className="mini-label">Students Enrolled</div>
            </div>
          </div>

          <div className="hero-card mini-card card-2">
            <div className="mini-icon">🏛️</div>
            <div>
              <div className="mini-value">100+</div>
              <div className="mini-label">Universities</div>
            </div>
          </div>

          <div className="hero-card mini-card card-3">
            <div className="mini-icon">⭐</div>
            <div>
              <div className="mini-value">4.8/5</div>
              <div className="mini-label">Partner Rating</div>
            </div>
          </div>

          {/* Decorative circles */}
          <div className="hero-circle circle-lg"></div>
          <div className="hero-circle circle-sm"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}

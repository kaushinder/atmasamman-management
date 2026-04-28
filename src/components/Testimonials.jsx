import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Education Consultant, Delhi",
    avatar: "PS",
    color: "#e85d04",
    rating: 5,
    text: "CollegeVidya's partner program completely transformed my consulting business. I earned over ₹2.8 lakhs last year just from referrals. The CRM dashboard makes tracking super easy.",
    earnings: "₹2.8L earned",
  },
  {
    name: "Rajesh Kumar",
    role: "Career Advisor, Mumbai",
    avatar: "RK",
    color: "#1d4ed8",
    rating: 5,
    text: "The dedicated RM support is incredible. Whenever I have a query, they respond within the hour. The marketing materials they provide are professional and really help convert leads.",
    earnings: "₹1.5L/month",
  },
  {
    name: "Anita Desai",
    role: "Freelance Counselor, Bangalore",
    avatar: "AD",
    color: "#0f7b6c",
    rating: 5,
    text: "As someone new to education consulting, the training program gave me everything I needed. The EMI options for students have removed the biggest barrier to enrollment.",
    earnings: "₹90K+ monthly",
  },
  {
    name: "Suresh Patel",
    role: "Academic Counselor, Ahmedabad",
    avatar: "SP",
    color: "#7c3aed",
    rating: 5,
    text: "I've partnered with many platforms, but CollegeVidya stands out for reliability and transparency. Payments always arrive on time, and the reporting is crystal clear.",
    earnings: "₹3.2L earned",
  },
  {
    name: "Meenakshi Nair",
    role: "Education Blogger, Chennai",
    avatar: "MN",
    color: "#be185d",
    rating: 5,
    text: "The 1,000+ course catalog means I can cater to every student I meet. Whether they want MBA or a certification, there's always a relevant course that earns me a commission.",
    earnings: "₹1.1L/month",
  },
  {
    name: "Vikram Joshi",
    role: "Student Mentor, Pune",
    avatar: "VJ",
    color: "#0369a1",
    rating: 5,
    text: "Comparing 30+ factors for each university really builds trust with students. When they see the depth of research, they're confident in enrolling, which means better conversions for me.",
    earnings: "₹2.1L earned",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeTo = (idx) => {
    if (isAnimating || idx === active) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeTo((active + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  const visible = [active, (active + 1) % testimonials.length, (active + 2) % testimonials.length];

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Partner Stories</div>
          <h2 className="section-title">Hear From Our <span>Successful Partners</span></h2>
          <p className="section-subtitle mx-auto">
            Real partners, real earnings. Join 2,500+ consultants who are already 
            building a steady income with CollegeVidya.
          </p>
        </div>

        <div className="testimonials-grid">
          {visible.map((idx, pos) => {
            const t = testimonials[idx];
            return (
              <div
                key={idx}
                className={`testimonial-card ${pos === 1 ? "featured" : ""} ${isAnimating ? "animating" : ""}`}
                onClick={() => changeTo(idx)}
              >
                <div className="testimonial-header">
                  <div className="testimonial-avatar" style={{ background: t.color }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                  <div className="testimonial-earnings">{t.earnings}</div>
                </div>

                <div className="testimonial-stars">
                  {"★".repeat(t.rating)}
                </div>

                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>

                <div className="testimonial-quote-icon">"</div>
              </div>
            );
          })}
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === active ? "active" : ""}`}
              onClick={() => changeTo(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

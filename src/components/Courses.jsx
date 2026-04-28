import { useState } from "react";
import "./Courses.css";

const categories = ["All", "Management", "Technology", "Commerce", "Arts & Science", "Law"];

const courses = [
  { id: 1, title: "MBA", fullTitle: "Master of Business Administration", category: "Management", duration: "2 Years", universities: 36, eligibility: "Graduation", fee: "₹30,000/sem", badge: "Most Popular", badgeType: "orange", icon: "💼" },
  { id: 2, title: "MCA", fullTitle: "Master of Computer Applications", category: "Technology", duration: "2 Years", universities: 13, eligibility: "Graduation", fee: "₹25,000/sem", badge: "High Demand", badgeType: "blue", icon: "💻" },
  { id: 3, title: "BBA", fullTitle: "Bachelor of Business Administration", category: "Management", duration: "3 Years", universities: 21, eligibility: "12th Pass", fee: "₹20,000/sem", badge: "Trending", badgeType: "green", icon: "📊" },
  { id: 4, title: "BCA", fullTitle: "Bachelor of Computer Applications", category: "Technology", duration: "3 Years", universities: 15, eligibility: "12th Pass", fee: "₹18,000/sem", badge: "", badgeType: "", icon: "🖥️" },
  { id: 5, title: "M.Com", fullTitle: "Master of Commerce", category: "Commerce", duration: "2 Years", universities: 10, eligibility: "Graduation", fee: "₹15,000/sem", badge: "", badgeType: "", icon: "📈" },
  { id: 6, title: "MA", fullTitle: "Master of Arts", category: "Arts & Science", duration: "2 Years", universities: 12, eligibility: "Graduation", fee: "₹12,000/sem", badge: "", badgeType: "", icon: "🎨" },
  { id: 7, title: "B.Com", fullTitle: "Bachelor of Commerce", category: "Commerce", duration: "3 Years", universities: 10, eligibility: "12th Pass", fee: "₹15,000/sem", badge: "Popular", badgeType: "orange", icon: "🏦" },
  { id: 8, title: "MSc", fullTitle: "Master of Science", category: "Arts & Science", duration: "2 Years", universities: 8, eligibility: "Graduation", fee: "₹20,000/sem", badge: "", badgeType: "", icon: "🔬" },
];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? courses
    : courses.filter(c => c.category === activeCategory);

  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Course Catalog</div>
          <h2 className="section-title">1,000+ Courses to <span>Promote & Earn</span></h2>
          <p className="section-subtitle mx-auto">
            From UG degrees to PG programs — our extensive catalog covers every field. 
            All courses are UGC-approved and from government-recognized universities.
          </p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filtered.map(course => (
            <div key={course.id} className="course-card">
              {course.badge && (
                <span className={`badge badge-${course.badgeType} course-badge`}>
                  {course.badge}
                </span>
              )}
              <div className="course-icon">{course.icon}</div>
              <div className="course-short">{course.title}</div>
              <h3 className="course-full">{course.fullTitle}</h3>
              <div className="course-meta">
                <div className="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {course.duration}
                </div>
                <div className="meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                  {course.universities} Universities
                </div>
              </div>
              <div className="course-divider"></div>
              <div className="course-footer">
                <div className="course-fee">
                  <span className="fee-label">Starts from</span>
                  <span className="fee-value">{course.fee}</span>
                </div>
                <a href="#contact" className="btn btn-outline course-btn">Promote</a>
              </div>
            </div>
          ))}
        </div>

        <div className="courses-footer-cta">
          <p>Showing popular courses. <strong>500+ more courses</strong> available after registration.</p>
          <a href="#contact" className="btn btn-primary">
            View All Courses
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

import "./Universities.css";

const universities = [
  { name: "IGNOU", type: "Central University", courses: 200, color: "#1d4ed8", initials: "IG" },
  { name: "Manipal University", type: "Deemed University", courses: 45, color: "#e85d04", initials: "MU" },
  { name: "Amity University", type: "Private University", courses: 60, color: "#0f7b6c", initials: "AU" },
  { name: "LPU Online", type: "Private University", courses: 55, color: "#7c3aed", initials: "LP" },
  { name: "Jain University", type: "Deemed University", courses: 40, color: "#be185d", initials: "JU" },
  { name: "DY Patil", type: "Deemed University", courses: 35, color: "#0369a1", initials: "DP" },
  { name: "Chandigarh Univ.", type: "Private University", courses: 50, color: "#b45309", initials: "CU" },
  { name: "Sikkim Manipal", type: "Private University", courses: 30, color: "#15803d", initials: "SM" },
  { name: "NMIMS", type: "Deemed University", courses: 25, color: "#9333ea", initials: "NM" },
  { name: "Symbiosis", type: "Deemed University", courses: 32, color: "#dc2626", initials: "SU" },
  { name: "Alliance Univ.", type: "Private University", courses: 28, color: "#0891b2", initials: "AL" },
  { name: "Vignan Univ.", type: "Private University", courses: 22, color: "#65a30d", initials: "VU" },
];

export default function Universities() {
  return (
    <section className="section universities-section" id="universities">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Our Network</div>
          <h2 className="section-title">100+ <span>Trusted University Partners</span></h2>
          <p className="section-subtitle mx-auto">
            All courses are from UGC-approved, NAAC-accredited universities and 
            carry the same value as on-campus degrees in the job market.
          </p>
        </div>

        <div className="universities-grid">
          {universities.map((uni) => (
            <div key={uni.name} className="university-card">
              <div
                className="uni-logo"
                style={{ background: `${uni.color}15`, color: uni.color, borderColor: `${uni.color}30` }}
              >
                {uni.initials}
              </div>
              <div className="uni-info">
                <div className="uni-name">{uni.name}</div>
                <div className="uni-type">{uni.type}</div>
              </div>
              <div className="uni-courses">
                <span className="uni-courses-count">{uni.courses}+</span>
                <span className="uni-courses-label">courses</span>
              </div>
            </div>
          ))}
        </div>

        <div className="universities-badges">
          {["UGC Approved", "NAAC Accredited", "AICTE Recognized", "WES Accepted", "Government Recognized"].map(badge => (
            <div key={badge} className="trust-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f7b6c" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

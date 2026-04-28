import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const stats = [
  { value: 100000, suffix: "+", label: "Students Enrolled", icon: "🎓", color: "#e85d04" },
  { value: 1000, suffix: "+", label: "Online Courses", icon: "📚", color: "#1d4ed8" },
  { value: 100, suffix: "+", label: "Partner Universities", icon: "🏛️", color: "#0f7b6c" },
  { value: 2500, suffix: "+", label: "Active Partners", icon: "🤝", color: "#7c3aed" },
];

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function StatCard({ stat, started }) {
  const count = useCountUp(stat.value, 2000, started);
  return (
    <div className="stat-card">
      <div className="stat-icon-wrap" style={{ background: `${stat.color}18` }}>
        <span className="stat-icon">{stat.icon}</span>
      </div>
      <div className="stat-value" style={{ color: stat.color }}>
        {count.toLocaleString("en-IN")}{stat.suffix}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}

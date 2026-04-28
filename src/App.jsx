import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import HowItWorks from "./components/HowItWorks";
import Courses from "./components/Courses";
import Benefits from "./components/Benefits";
import Universities from "./components/Universities";
import Testimonials from "./components/Testimonials";
import WhyPartner from "./components/WhyPartner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Stats />
        <HowItWorks />
        <Courses />
        <Benefits />
        <Universities />
        <Testimonials />
        <WhyPartner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

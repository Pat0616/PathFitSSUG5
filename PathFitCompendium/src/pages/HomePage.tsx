import instructorImg from "../assets/instructor.png";
import SSULogo from '../assets/ssuLogoClear.svg'
import "./homepage.css";

import { useEffect, useRef, useState } from "react";

import Sidebar from "../components/SidebarComponent";
import { GraduationCap } from "lucide-react";

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const members = [
    "Dellosa, Rodel C.",
    "Despabiladeras, Irene Joy E.",
    "Donquillo, John Lloyd D.",
    "Estavillo, Geneva M.",
    "Ferreras, Collete B.",
    "Garra, Christian Lyle F.",
    "Lacupanto, France Joseph F",
  ];

  /* =========================
     SWIPE GESTURE LOGIC
  ========================== */

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;

      const diff = touchEndX.current - touchStartX.current;

      const isMobile = window.innerWidth <= 900;
      if (!isMobile) return;

      // swipe right → open sidebar
      if (diff > 80) {
        setIsSidebarOpen(true);
      }

      // swipe left → close sidebar
      if (diff < -80) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="homepage">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="overlay">
            {/* HEADER */}
            <div className="hero-header">
            <header className="header">
              <div className="logo-container">
                <img src={SSULogo} alt="SSU Logo" className="ssuLogo" />

                <div className="school-details">
                  <h1>Sorsogon State University</h1>
                  <h2>College of Business and Management</h2>
                  <h3>Sorsogon City Campus</h3>
                </div>
              </div>
            </header>
            </div>

            {/* BODY */}
            <main className="main-content">
              <div className="portfolio-title">
                <h4>PathFit 2 Group 5</h4>

                <p>
                  Empowering Wellness Through Movement, Discipline and Excellence
                </p>
              </div>

              <div className="content-grid">
                {/* LEFT SIDE */}
                <div className="left-side">
                  <div className="portrait-card">
                    <img
                      src={instructorImg}
                      alt="Instructor"
                      className="portrait-image"
                    />

                    <h2>Baluyot Kate</h2>

                    <span>CBM - PATHFIT Instructor</span>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="right-side">
                  <div className="members-card">
                    <h2>Members</h2>

                    <ul>
                      {members.map((member, index) => (
                        <li key={index}>{member}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

                        <div className="quote-section">
                          “PATHFIT 2 embodies the development of strength, discipline, and endurance through purposeful movement and commitment to holistic wellness.”
                        </div>

            </main>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-content">
            <h2>PATHFIT 2 Compendium</h2>

            <h3>Group 5 Final Project</h3>

            <div className="footer-section">
              <h4>Institution</h4>

              <p>Sorsogon State University</p>
              <p>College of Business and Management</p>
              <p>Sorsogon City Campus</p>
            </div>

            <div className="footer-section">
              <h4>Course Details</h4>

              <p>Physical Activity, Fitness, and Health 2</p>
              <p>Semester 2, AY 2025-2026</p>
              <p>Instructor: Dr. Maria Santos</p>
            </div>

            <div className="footer-bottom">
              <p>
                © 2026 PATHFIT 2 Compendium Project. Group 5.
                All rights reserved.
              </p>

              <span>
                Submitted in fulfillment of course requirements
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* SIDEBAR */}
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
    </>
  );
}
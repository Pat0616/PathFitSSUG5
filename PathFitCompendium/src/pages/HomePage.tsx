import instructorImg from "../assets/instructor.png";
import schoolImg from "../assets/SSUbg.png";
import "./homepage.css";

import { GraduationCap, Menu } from "lucide-react";

export default function HomePage() {
  const members = [
    "Dellosa, Rodel C.",
    "Despabiladeras, Irene Joy E.",
    "Donquillo, John Lloyd D.",
    "Estavillo, Geneva M.",
    "Ferreras, Collete B.",
    "Garra, Christian Lyle F.",
    "Lacupanto, France Joseph F",
  ];

  return (
    <div className="homepage">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay">
          {/* SIDEBAR BUTTON */}
          <button className="sidebar-toggle">
            <Menu size={28} />
          </button>

          {/* HEADER */}
          <header className="header">
            <div className="logo-container">
              <GraduationCap size={60} className="logo" />

              <div className="school-details">
                <h1>Sorsogon State University</h1>
                <h2>College of Business and Management</h2>
                <h3>Sorsogon City Campus</h3>
              </div>
            </div>
          </header>

          {/* BODY */}
          <main className="main-content">
            <div className="portfolio-title">
              <h4>Portfolio</h4>

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
  );
}
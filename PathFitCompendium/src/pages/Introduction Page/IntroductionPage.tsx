import "./introduction.css";

import Sidebar from "../../components/SidebarComponent";
import { useState, useRef, useEffect } from "react";

import SSULogo from '../../assets/ssuLogoClear.svg'


function IntroductionPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

      if (diff > 80) setIsSidebarOpen(true);
      if (diff < -80) setIsSidebarOpen(false);
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
      <div className="intropage">

        {/* HERO HEADER */}
        <div className="hero-intro">
          <div className="overlay-intro">

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

            {/* INTRO CONTENT */}
            <main className="intro-content">

              <h2 className="intro-title">Introduction & Abstract</h2>

              <div className="intro-box">

                <p>
                  Physical fitness plays a vital role in achieving a balanced and healthy lifestyle,
                  especially among students who continuously face academic responsibilities, personal
                  challenges, and daily pressures. This PATHFIT 2 Compendium Website was created to
                  compile, organize, and present the different activities, training programs, performances,
                  reflections, and learning experiences accomplished by the members throughout the semester.
                  More than a simple collection of requirements, this compendium serves as a documentation
                  of the group’s dedication, cooperation, growth, and commitment toward improving physical
                  wellness and personal discipline.
                </p>

                <p>
                  Throughout the implementation of the different activities and training sessions,
                  the members experienced various challenges that tested their endurance, consistency,
                  teamwork, and determination. Despite physical exhaustion, time pressure, and demanding
                  schedules, each member actively participated and contributed to the completion of the
                  required outputs and activities. These experiences allowed the group to recognize that
                  physical fitness is not only about developing strength and stamina, but also about building
                  responsibility, patience, self-confidence, and resilience.
                </p>

                <p>
                  This compendium also highlights the importance of collaboration and unity within the group.
                  Through teamwork, communication, and mutual encouragement, the members were able to accomplish
                  tasks effectively while maintaining a positive and supportive environment. The activities
                  strengthened not only physical wellness but also interpersonal relationships, respect, and
                  appreciation for collective effort.
                </p>

                <p>
                  Moreover, the PATHFIT 2 experience became an avenue for personal realization and self-improvement.
                  The members learned the significance of maintaining an active lifestyle and understood how proper
                  physical activity contributes to overall health, productivity, and emotional well-being. Through
                  this journey, the members discovered that growth requires continuous effort, perseverance, and
                  willingness to overcome limitations.
                </p>

              </div>
            </main>

          </div>
        </div>
      </div>

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
            <p>Instructor: Ma'am Kate Baluyot</p>
          </div>

          <div className="footer-bottom">
            <p>
              © 2026 PATHFIT 2 Compendium Project. Group 5. All rights reserved.
            </p>
            <span>Submitted in fulfillment of course requirements</span>
          </div>
        </div>
      </footer>

      {/* SIDEBAR */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
}

export default IntroductionPage;
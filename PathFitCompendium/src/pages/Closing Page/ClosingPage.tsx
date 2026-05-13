import { GraduationCap } from "lucide-react";
import Sidebar from "../../components/SidebarComponent";
import { useState, useRef, useEffect } from "react";
import SSULogo from '../../assets/ssuLogoClear.svg'

function ClosingPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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

                  <div className="school-details-intro">
                    <h1>Sorsogon State University</h1>
                    <h2>College of Business and Management</h2>
                    <h3>Sorsogon City Campus</h3>
                  </div>
                </div>
              </header>
            </div>

            {/* INTRO CONTENT */}
            <main className="intro-content">

              <h2 className="intro-title">A Meaningful Fitness Experience</h2>

              <div className="intro-box">

                <p>
                 This activity served as a meaningful eye-opener for everyone in our group. It challenged us not only physically but also mentally and emotionally, allowing us to realize the importance of perseverance, teamwork, and determination. Throughout the exercises, each member of the group gave their very best effort to complete every task assigned to us. Although some of us experienced difficulties and struggled with certain parts of the activity, we continued to encourage and support one another until we were able to finish everything successfully. The experience taught us that no challenge becomes impossible when people work together with unity and understanding.
                </p>

                <p>
                  One of the most important lessons we learned from this activity is the value of cooperation and camaraderie. During difficult moments, we understood that helping one another is essential in overcoming obstacles and achieving success as a team. By motivating and assisting each other, we were able to build stronger relationships and develop trust among our group members. This activity reminded us that fitness is not only about improving physical strength, but also about building discipline, confidence, teamwork, and resilience. In order to achieve our fitness goals, we must continue striving hard, improving ourselves, and honing our abilities even further.
                </p>

                <p>
                  Despite the challenges we encountered, we truly enjoyed every second of the activity. The experience was both fun and memorable because it brought us closer together as classmates and friends. The laughter, encouragement, and shared experiences made the activity more meaningful and enjoyable for everyone. It created a positive environment where each member felt supported and motivated to do their best.
                </p>

                <p>
                  Lastly, we would like to express our sincere appreciation and gratitude to our PATHFIT 2 teacher, Kate Baluyot, for her patience, guidance, and continuous support throughout the activity. Her encouragement inspired us to push beyond our limits and perform our tasks with confidence and determination. We are truly thankful for the lessons and experiences she shared with us, as they will help us not only in our fitness journey but also in our personal growth and development.
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
            <p>Instructor: Dr. Maria Santos</p>
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

export default ClosingPage;
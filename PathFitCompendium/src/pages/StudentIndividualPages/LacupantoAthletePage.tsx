import './individualathlete.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import LacupantoProfile from '../../assets/memberProfiles/lacupantoprofile.webp'
import LacupantoParq from '../../assets/memberPARQ/lacupantoparq.webp'

import SSULogo from '../../assets/ssuLogoClear.svg'


function LacupantoAthletePage()
{
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






    return(
        <>
        <div className='intropage'>
            <div className='hero'>
                <div className='overlay'>
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







                        <div className="isap-container">

                            <div className="isap-card">

                                <div className="isap-header">
                                <h2>Lacupanto, France Joseph F.</h2>
                                <p>BS Entrepreneurship 1 - C</p>
                                </div>

                                <div className="isap-grid">

                                {/* ATHLETE PROFILE */}
                                <div className="isap-box">
                                    <h3>Athlete Profile</h3>

                                    <img
                                    src={LacupantoProfile}
                                    alt="Athlete Profile"
                                    />
                                </div>

                                {/* PAR-Q */}
                                <div className="isap-box">
                                    <h3>PAR-Q</h3>

                                    <img
                                    src={LacupantoParq}
                                    alt="PARQ"
                                    />
                                </div>

                                </div>

                                <p className="isap-note">
                                The information provided in these documents is true and accurate to the best of the student's knowledge.
                                </p>

                            </div>

                            </div>





















                </div>
            </div>
        </div>
           







           

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





            <Sidebar
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                  />
        </>
    )
}

export default LacupantoAthletePage;
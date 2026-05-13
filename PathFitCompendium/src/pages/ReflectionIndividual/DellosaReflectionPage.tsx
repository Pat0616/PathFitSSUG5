import './reflectionindividual.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';
import DellosaImg from '../../assets/memberPortraits/Dellosa.webp'


import SSULogo from '../../assets/ssuLogoClear.svg'


function DellosaReflectionPage()
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
            <div className='hero-intro'>
                <div className='overlay-intro'>
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









                        <div className="rpind-container">

  <div className="rpind-card">

    {/* TOP SECTION */}
    <div className="rpind-header">

      <div className="rpind-image">
        <img src={DellosaImg} alt="Dellosa, Rodel C." />
      </div>

      <div className="rpind-info">
        <h2>Dellosa, Rodel C.</h2>

        <p>
          Bachelor of Science in Entrepreneurship 1 - C
        </p>
      </div>

    </div>

    {/* REFLECTION */}
    <div className="rpind-reflection">

      <h3>Reflection</h3>

      <p>
        Over the past four weeks, participating in this physical fitness activity
        has been a truly meaningful and eye opening experience for me. From
        Week 1 where I started with basic warm-ups and exercises alongside my
        classmates, up to Week 4 where I was able to do more challenging
        routines like push-ups, sit-ups, and endurance training, I clearly
        noticed how my body and mindset changed.

        At first, I easily got tired and thought it would be hard to keep going,
        but as the weeks passed, I built more strength, stamina, and discipline.
        I realized that fitness isn’t just about exercise it is about
        consistency, patience, and pushing myself to do better every day.

        Even though I love playing online games and usually spend time on
        screens, this activity taught me the importance of balancing leisure
        with physical health.
      </p>

    </div>

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

export default DellosaReflectionPage
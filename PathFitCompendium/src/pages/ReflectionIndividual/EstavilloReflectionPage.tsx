import './reflectionindividual.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import EstavilloImg from '../../assets/memberPortraits/Geneva.webp'
import SSULogo from '../../assets/ssuLogoClear.svg'


function EstavilloReflectionPage()
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
        <img src={EstavilloImg} alt="Estavillo, Geneva M." />
      </div>

      <div className="rpind-info">
        <h2>Estavillo, Geneva M.</h2>

        <p>
          Bachelor of Science in Entrepreneurship 1 - C
        </p>
      </div>

    </div>

    {/* REFLECTION */}
    <div className="rpind-reflection">

      <h3>Reflection</h3>

      <p>
       Participating in our weekly activities became a great experience for me because it helped me become more active and confident. At first, I found some activities difficult and tiring, especially those that required a lot of energy and focus. There were moments when I felt exhausted, but I still continued because I wanted to challenge myself and improve. As time passed, I slowly became more comfortable and motivated to do my best in every activity.
      </p>

      <p>
        Through this experience, I learned many important lessons about discipline, determination, and self-care. I realized that challenges are part of growth and that I should not easily give up when things become hard. I also learned the importance of maintaining a healthy lifestyle and staying positive even during difficult situations. These activities helped me become stronger physically and mentally, and they inspired me to continue improving myself every day.
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
              <p>Instructor: Ma'am Kate Baluyot</p>
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

export default EstavilloReflectionPage;
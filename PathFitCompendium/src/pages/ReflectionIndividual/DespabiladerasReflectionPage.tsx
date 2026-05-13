import './reflectionindividual.css'
import { GraduationCap } from 'lucide-react'
import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import DespabiladerasImg from '../../assets/memberPortraits/Despibeladeras.png'


function DespabiladerasReflectionPage()
{
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
                            <GraduationCap size={60} className="logo" />

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
        <img src={DespabiladerasImg} alt="Despabiladeras, Irene Joy E." />
      </div>

      <div className="rpind-info">
        <h2>Despabiladeras, Irene Joy E.</h2>

        <p>
          Bachelor of Science in Entrepreneurship 1 - C
        </p>
      </div>

    </div>

    {/* REFLECTION */}
    <div className="rpind-reflection">

      <h3>Reflection</h3>

      <p>
        It was a nice experience to participate in weekly exercises because they helped me become more physically active. One of the biggest challenges I encountered was doing exercises that required too much pressure or force, especially because I have a heart condition. Despite this, I always made sure to prioritize my health first before participating in any activity, particularly our weekly jogging sessions, which required us to complete 3–5 kilometers.
      </p>

      <p>
        At first, I realized that it was difficult for me to perform some hard activities, especially jogging, because I easily got tired. However, as I started focusing on my goals and staying determined, I slowly felt more confident and relieved. I learned that limitations should not stop me from trying my best as long as I know how to take care of myself and recognize my boundaries.
      </p>

      <p>
        Through this experience, I learned many important lessons. I realized that prioritizing my health is very important, but at the same time, I should continue being physically active to improve my body and overall well-being. These weekly exercises not only strengthened me physically but also taught me discipline, perseverance, and the importance of maintaining a healthy lifestyle.
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

export default DespabiladerasReflectionPage
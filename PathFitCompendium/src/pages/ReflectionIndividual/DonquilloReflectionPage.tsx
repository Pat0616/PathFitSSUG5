import './reflectionindividual.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import DonquilloImg from '../../assets/memberPortraits/Donquillo.png'
import SSULogo from '../../assets/ssuLogoClear.svg'


function DonquilloReflectionPage()
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
        <img src={DonquilloImg} alt="Donquillo, John Lloyd D." />
      </div>

      <div className="rpind-info">
        <h2>Donquillo, John Lloyd D.</h2>

        <p>
          Bachelor of Science in Entrepreneurship 1 - C
        </p>
      </div>

    </div>

    {/* REFLECTION */}
    <div className="rpind-reflection">

      <h3>Reflection</h3>

      <p>
        Participating in PATHFIT 2 became a meaningful part of my academic journey because it allowed me to experience the importance of physical fitness, discipline, and personal growth in a deeper and more realistic way. At first, I viewed the subject as a requirement that needed to be completed, but as the activities, training sessions, and performance tasks continued, I gradually realized that physical fitness is not only about improving physical strength and endurance. It also involves commitment, consistency, self-discipline, and the willingness to challenge oneself despite difficulties and limitations. Throughout the semester, the subject became an opportunity for me to improve not only my physical condition but also my mindset, emotional resilience, and sense of responsibility.
      </p>

        <p>
            One of the challenges I experienced during the program was balancing academic responsibilities with the demands of physical activities and training sessions. There were times when I felt physically exhausted due to workloads, schedules, and personal responsibilities as a student. Some activities required patience, determination, and continuous effort, especially during days when motivation and energy were limited. However, these experiences taught me that improvement does not happen instantly. Real growth requires perseverance, discipline, and the ability to remain focused even during difficult situations. Through these challenges, I learned the importance of consistency and maintaining a positive mindset in achieving personal goals.
        </p>

        <p>
            As the program progressed, I became more aware of the value of maintaining a healthy and active lifestyle. I realized that regular physical activity contributes not only to physical wellness but also to mental focus, emotional stability, and self-confidence. Every exercise and training activity helped me appreciate the importance of taking care of my health and overall well-being. I also learned that discipline in physical fitness can positively influence other aspects of life, including time management, productivity, and decision-making. The experiences throughout the semester encouraged me to become more conscious of my habits and motivated me to continue improving myself gradually.
        </p>

        <p>
            Another significant realization I gained from PATHFIT 2 was the importance of teamwork and cooperation. Working together with my groupmates during activities and requirements allowed me to appreciate the value of communication, encouragement, and mutual respect. Despite the challenges and pressures encountered during the activities, the support shared within the group created a positive environment that made every task more manageable and meaningful. Through these experiences, I realized that success becomes more fulfilling when achieved through collaboration and collective effort.
        </p>

        <p>
            Overall, PATHFIT 2 became more than just a subject requirement because it provided valuable lessons and experiences that contributed to my personal development. It taught me the importance of discipline, perseverance, teamwork, and maintaining a healthy lifestyle despite challenges and responsibilities. The knowledge, realizations, and experiences I gained throughout this journey will continue to guide and inspire me to become more responsible, determined, and motivated not only as a student but also as an individual striving for continuous self-improvement.
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

export default DonquilloReflectionPage
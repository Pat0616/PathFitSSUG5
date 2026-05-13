import './reflectionindividual.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import GarraImg from '../../assets/memberPortraits/Garra.webp'
import SSULogo from '../../assets/ssuLogoClear.svg'


function GarraReflectionPage()
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
        <img src={GarraImg} alt="Garra, Christian Lyle F." />
      </div>

      <div className="rpind-info">
        <h2>Garra, Christian Lyle F.</h2>

        <p>
          Bachelor of Science in Entrepreneurship 1 - C
        </p>
      </div>

    </div>

    {/* REFLECTION */}
    <div className="rpind-reflection">

      <h3>Reflection</h3>

      <p>
        Starting the 4-week exercise and training program was something I initially approached with a mix of excitement and hesitation because I'm not always doing it. I knew being physically active was good for me, but I wasn’t sure if I could keep up with the routine, especially since I'm not consistent exercise in a long time. Over these four weeks, I committed to the scheduled activities, and I also completed four jogging sessions.
      </p>

      <p>
        During the first week, everything felt new and challenging. My body wasn’t used to moving this much, and I felt sore after almost every workout. My first jog was honestly the hardest, I got breathless quickly, and my legs felt heavy and tired afterward. There were moments when I thought about skipping sessions, especially on days when I felt busy, tired, or unmotivated. I realized early on that the biggest challenge wasn’t the exercise itself, it was discipline and consistency. It was easy to make excuses, but I told myself to keep going, even I'm not motivated to do it.
      </p>

      <p>
        As the weeks went by, I started noticing small but meaningful changes. By the second and third week, the soreness wasn’t bad anymore, and my stamina slowly improved. My second and third jogs felt lighter: I could run a little longer, walk less, and breathe more comfortably. I also learned to listen to my body, resting when I needed to, drinking enough water, and doing proper warm-ups and cool-downs, which made a huge difference in how I felt after every session. The fourth week felt like a payoff: I finished my final jog feeling proud, not exhausted, and I could already feel how much stronger and more energetic I was compared to the start.
      </p>

      <p>
        This experience taught me lessons that go far beyond just physical fitness. I realized that progress takes time and patience, you don’t see results overnight, but every small effort adds up. I learned that consistency is more important even you're not motivated, doing light exercise regularly is better than doing nothing at all. I also discovered how much exercise helps my mental health too because sometimes it reduces my stress.
Looking back, this 4-week program wasn’t just about finishing activities. It was about building habits, testing my limits, and proving to myself that I can commit to something. I faced challenges, felt tired, and even doubted myself at times, but I kept going and that’s what made it worth it. This experience made me realize that being fit and healthy is a choice I have to make every day, and now, I feel little more stronger, and more motivated to keep this healthy lifestyle even after the program ends.
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

export default GarraReflectionPage
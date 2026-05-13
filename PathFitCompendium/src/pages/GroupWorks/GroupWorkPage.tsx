import './groupwork.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';
import SSULogo from '../../assets/ssuLogoClear.svg'

import Activity1 from '../../assets/groupWOrks/groupwork1.png'
import Activity2 from '../../assets/groupWOrks/groupwork2.png';

function GroupWorkPage()
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




                
<div className="gwc-container">
  <h1 className="gwc-title">Group Work Contents</h1>
  <div className="gwc-accent"></div>

  <div className="gwc-list">

    <div className="gwc-card">
        <div className='filler-div1'></div>
      <h2 className="gwc-activity-title">Week 1 Physical Fitness Activities</h2>

      <p className="gwc-label">Short Description</p>

      <p className="gwc-text">
        The Week 1 Physical Fitness Activities introduced different exercise stations that focused on improving the students’ overall physical condition, including cardio endurance, flexibility, balance, coordination and agility, speed, muscular endurance, and core strength. Each activity challenged the students to perform movements that tested their stamina, control, body coordination, and strength while encouraging active participation and teamwork. The main purpose of this activity was to help students become more physically active and aware of the importance of maintaining a healthy lifestyle through regular exercise. Throughout the session, we gained new experiences in performing proper exercise techniques, cooperating with classmates, managing physical challenges, and building self-confidence during group participation. The activity also made us realize that fitness training can be both productive and enjoyable when everyone works together and stays motivated.
      </p>
    


    <div className="idwe-images">

    <div className="idwe-image-box">
      <img src={Activity1} alt="Activity Image 1"/>
    </div>

    <div className="idwe-image-box">
      <img src={Activity2} alt="Activity Image 2"/>
    </div>

    </div>

    <div className='filler-div'></div>

  
      <h2 className="gwc-activity-title">Week 2 Physical Fitness Activities</h2>

      <p className="gwc-label">Short Description</p>

      <p className="gwc-text">
        The Week 2 Physical Fitness Activities focused on improving the students’ physical performance through different exercises and movement drills that enhanced strength, endurance, flexibility, coordination, and teamwork. The activities required active participation, proper body movements, and cooperation among group members to complete each task successfully. The main objective of this activity was to develop better physical fitness habits, increase body endurance, and encourage students to become more disciplined and confident during physical activities. Through this experience, we learned the value of consistency, teamwork, proper exercise execution, and maintaining a positive attitude while participating in group exercises. The activities also helped us become more motivated, active, and aware of the importance of staying physically healthy in our daily lives.
      </p>
  

   
      <h2 className="gwc-activity-title">Week 3 Physical Fitness Activities</h2>

      <p className="gwc-label">Short Description</p>

      <p className="gwc-text">
        The Week 3 Physical Fitness Activities focused on circuit training and combined exercises that improved the students’ endurance, strength, speed, coordination, and overall fitness level. Each station required continuous movement , where students performed different tasks with limited rest to build stamina and discipline. The main objective of this activity was to enhance physical conditioning through more challenging and structured exercises while promoting cooperation and determination among classmates. Through this experience, we learned how to manage physical fatigue, maintain proper form even under pressure, and support each other during group activities. It also helped us develop resilience, consistency, and a deeper understanding of how regular training improves overall body performance and fitness.
      </p>
   

  
      <h2 className="gwc-activity-title">Week 4 Physical Fitness Activities</h2>

      <p className="gwc-label">Short Description</p>

      <p className="gwc-text">
        The Week 4 Physical Fitness Activities served as the final stage of the fitness program, where students applied all the skills they learned from previous weeks through more challenging and competitive activities such as obstacle courses, timed drills, and group performance tasks. The activities tested strength, speed, endurance, agility, coordination, and teamwork in a more intense and exciting setup. The main objective of this activity was to evaluate the students’ overall physical improvement while reinforcing discipline, teamwork, and sportsmanship in a fun and competitive environment. Through this experience, we learned how to perform under pressure, improve our personal limits, and stay motivated even during difficult tasks. It also helped us realize the importance of consistency in training, supporting teammates, and pushing ourselves to achieve better.
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

export default GroupWorkPage
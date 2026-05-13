import './members.css'
import { GraduationCap } from 'lucide-react'
import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import instructorImg from "../../assets/instructor.png"
import DellosaImg from "../../assets/memberPortraits/Dellosa.png"
import DespabiladerasImg from "../../assets/memberPortraits/Despibeladeras.png"
import DonquilloImg from "../../assets/memberPortraits/Donquillo.png"
import Estavillo from "../../assets/memberPortraits/Geneva.png"
import Ferreras from "../../assets/memberPortraits/Ferreras.png"
import Garra from "../../assets/memberPortraits/Garra.png"
import Lacupanto from "../../assets/memberPortraits/Lacupanto.png"


function MembersPage(){
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
            <div className='hero-memberpg'>
                <div className='overlay'>
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


                        


    <div className="container">

    <h1 className="title">Introduction of Members</h1>
    <div className="accent-line"></div>
    <p className="subtitle">Arranged alphabetically by surname</p>

    <div className="grid">

   
      <div className="card">
        <div className="image-box">
          <img src={DellosaImg} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Dellosa, Rodel C.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
      </div>






      <div className="card">
        <div className="image-box">
          <img src={DespabiladerasImg} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Despabiladeras, Irene Joy E.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
      </div>




      <div className="card">
        <div className="image-box">
          <img src={DonquilloImg} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Donquillo, John Lloyd D.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
      </div>




      <div className="card">
        <div className="image-box">
          <img src={Estavillo} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Estavillo, Geneva M.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
      </div>



      <div className="card">
        <div className="image-box">
          <img src={Ferreras} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Ferreras, Collete B.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
      </div>




        <div className="card">
        <div className="image-box">
          <img src={Garra} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Garra, Christian Lyle F.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
      </div>





      <div className="card">
        <div className="image-box">
          <img src={Lacupanto} alt="Full Name"/>
        </div>

        <div className="card-body">
          <div>
            <h3 className="name">Lacupanto, France Joseph F.</h3>
            <p className="course">BS Computer Science</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>2 - A</span></p>
          </div>

          <p className="quote">"Short personal introduction goes here."</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Gaming</span>
              <span className="tag">Coding</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build muscle</span>
              <span className="tag-accent">Endurance</span>
            </div>
          </div>

        </div>
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
export default MembersPage
import '../Student Profile/studentprofile.css'
import { GraduationCap } from 'lucide-react'
import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import {Link} from 'react-router-dom'

import DellosaImg from '../../assets/memberPortraits/Dellosa.png'
import Despabiladeras from '../../assets/memberPortraits/Despibeladeras.png'
import DonquilloImg from '../../assets/memberPortraits/Donquillo.png'
import EstavilloImg from '../../assets/memberPortraits/Geneva.png'
import FerrerasImg from '../../assets/memberPortraits/Ferreras.png'
import GarraImg from '../../assets/memberPortraits/Garra.png'
import LacupantoImg from '../../assets/memberPortraits/Lacupanto.png'
import SSULogo from '../../assets/ssuLogoClear.svg'
function IndividualWorkPage()
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
                             <img src={SSULogo} alt="SSU Logo" className="ssuLogo" />

                            <div className="school-details">
                            <h1>Sorsogon State University</h1>
                            <h2>College of Business and Management</h2>
                            <h3>Sorsogon City Campus</h3>
                            </div>
                        </div>
                        </header>
                        </div>









                        <div className='container'>
                            <h1 className='title-studentprofile'>Individual Works of Student Athletes</h1>
                            <div className='accent-line'></div>
                            <p className='subtitle'></p>

                            <div className="members-grid">

                                <Link to='/individualwork/1' className="member-card">
                                    <div className="member-image">
                                    <img src={DellosaImg} alt="Dellosa, Rodel C." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Dellosa, Rodel C.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>


                                <Link to='/individualwork/2' className="member-card">
                                    <div className="member-image">
                                    <img src={Despabiladeras} alt="Despabiladeras, Irene Joy E." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Despabiladeras, Irene Joy E.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>


                                <Link to='/individualwork/3' className="member-card">
                                    <div className="member-image">
                                    <img src={DonquilloImg} alt="Donquillo, John Lloyd D." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Donquillo, John Lloyd D.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>


                                <Link to='/individualwork/4' className="member-card">
                                    <div className="member-image">
                                    <img src={EstavilloImg} alt="Estavillo, Geneva M." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Estavillo, Geneva M.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>


                                <Link to='/individualwork/5' className="member-card">
                                    <div className="member-image">
                                    <img src={FerrerasImg} alt="Ferreras, Collete B." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Ferreras, Collete B.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>

                                <Link to='/individualwork/6' className="member-card">
                                    <div className="member-image">
                                    <img src={GarraImg} alt="Garra, Christian Lyle F." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Garra, Christian Lyle F.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>

                                <Link to='/individualwork/7' className="member-card">
                                    <div className="member-image">
                                    <img src={LacupantoImg} alt="Lacupanto, France Joseph F." />
                                    </div>

                                    <div className="member-details">
                                    <h2>Lacupanto, France Joseph F.</h2>
                                    <p>Bachelor of Science in Entrepreneurship</p>
                                    <span>1 - C</span>
                                    </div>
                                </Link>

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

export default IndividualWorkPage;  
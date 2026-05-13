import './tablecontent.css'
import { GraduationCap } from 'lucide-react'
import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';

import SSULogo from '../../assets/ssuLogoClear.svg'


function TableContentsPage()
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
            <div className='hero'>
                <div className='overlay-tablecontent'>
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


                        <main className='main-content'>
                            <div className="container">
                            
                            <h1 className="title-tablecontent">Table of Contents</h1>
                            <div className="accent-line"></div>

                            <div className="toc-list">
                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Cover Page</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 1</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>

                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Introduction & Abstract</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 2</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>

                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Table of Contents</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 3</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>

                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Introduction of Members</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 4</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>

                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Student Athlete Profiles & PAR-Q</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 5 & 6</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>

                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Group Works</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 7</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>

                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Individual Works</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 8</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>
                            
                            <button className="toc-item">
                                <div className="toc-left">
                                <h3>Reflections</h3>
                                </div>
                                <div className="toc-right">
                                <span>Page 9</span>
                                <span className="arrow">→</span>
                                </div>
                            </button>
                            
                            </div>

                            

                            <div className="info-card">
                            <h2>Document Information</h2>

                            <div className="info-grid">
                                <div>
                                <p className="label">Group Number</p>
                                <p className="value">Group 5</p>
                                </div>

                                <div>
                                <p className="label">Total Members</p>
                                <p className="value">6</p>
                                </div>

                                <div>
                                <p className="label">Course Code</p>
                                <p className="value">PATHFIT 2</p>
                                </div>

                                <div>
                                <p className="label">Submission Date</p>
                                <p className="value">May 15, 2026</p>
                                </div>
                            </div>
                            </div>

                        </div>
                                </main>

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

export default TableContentsPage;
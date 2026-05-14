import './members.css'

import Sidebar from '../../components/SidebarComponent'
import { useState, useRef, useEffect} from 'react';


import DellosaImg from "../../assets/memberPortraits/Dellosa.webp"
import DespabiladerasImg from "../../assets/memberPortraits/Despibeladeras.webp"
import DonquilloImg from "../../assets/memberPortraits/Donquillo.webp"
import Estavillo from "../../assets/memberPortraits/Geneva.webp"
import Ferreras from "../../assets/memberPortraits/Ferreras.webp"
import Garra from "../../assets/memberPortraits/Garra.webp"
import Lacupanto from "../../assets/memberPortraits/Lacupanto.webp"

import SSULogo from '../../assets/ssuLogoClear.svg'


function MembersPage(){
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
            <div className='hero-memberpg'>
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


                        


    <div className="container">

    <h2 className="title-members">Introduction of Members</h2>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Block:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote"> I’m a first year student from BS ENTREP 1C. I’m friendly, easygoing, and always ready to work with teammates on projects or activities. I love exploring new things and balancing my studies with things I enjoy doing.</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Online Gaming</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag">Gaming Strategies</span>
              <span className="tag">Tech Trends</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Staying Active</span>
              <span className="tag-accent">Good Health</span>
              <span className="tag-accent">School Works</span>
              <span className="tag-accent">Hobbies</span>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Block:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote">An Entrepreneurship student who enjoys turning simple ideas into meaningful goals. I’m someone who values creativity, independence, and continuous self-improvement. I like exploring opportunities that challenge my skills and help me become more confident in dealing with people and real-life situations. I believe success starts with determination, patience, and the courage to keep trying even when things get difficult.</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Listening to Music</span>
              <span className="tag">Discovering New Trends</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag">Personal Growth</span>
              <span className="tag">Self Confidence</span>
              <span className='tag'>Develop Positive Mindset Everyday</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag">Better Routines</span>
              <span className="tag">Improve Mental and Emotional Health</span>
              <span className='tag'>Improve Self-Care Habits</span>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Block:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote">A First-Year Bachelor of Science in Entrepreneurship student from Block 1C. I am a goal-oriented individual who values continuous growth in both academic and personal development. I believe that success is achieved through discipline, consistency, and perseverance rather than instant results. As a student, I strive to become responsible, focused, and committed in fulfilling my responsibilities while continuously improving myself through learning and experience.</p>

          <p className="quote">I also believe in maintaining balance between academics, personal interests, and physical wellness to build a productive and healthy lifestyle. Through dedication and self-discipline, I aim to achieve my goals while developing confidence, resilience, and integrity in all aspects of life. </p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Singing</span>
              <span className="tag">Watching Films and Documentaries</span>
              <span className="tag">Reviewing Academics</span>
              <span className="tag">Music</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag-accent">Personal Development</span>
              <span className="tag-accent">Self Discipline</span>
              <span className="tag-accent">Physical Fitness and Wellness</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Improve stamina and physical endurance</span>
              <span className="tag-accent">Maintain a consistent and healthy lifestyle</span>
              <span className="tag-accent">Strengthen discipline through regular physical activity</span>
              <span className="tag-accent">Enhance confidence and mental focus</span>
              <span className="tag-accent">Develop long-term healthy habits and routines</span>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Block:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote"> I'm 18 years old, and I was born on August 14, 2007. I am from Rizal, Gubat, Sorsogon. I am the youngest among 8 siblings, which helped me become friendly, understanding, and family-oriented.</p>

          <p className='quote'>My hobbies are taking pictures and playing online games whenever I have free time. I enjoy capturing beautiful moments and places through photography because it helps me express my creativity. I also like online games because they help me relax and enjoy my free time with friends.</p>

          <p className='quote'>My interests include exploring new things, spending time with my family and friends, and improving my skills and confidence. For fitness, I try to stay active by doing simple physical activities and maintaining a healthy lifestyle.</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Gaming</span>
              <span className="tag">Photography</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag-accent">Explore New Things</span>
              <span className="tag-accent">Spending Time with Family and Friends</span>
              <span className="tag-accent">Improving Skills and Confidence</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Physically Active</span>
              <span className="tag-accent">Healthy Lifestyle</span>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Block:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote">A First-Year Bachelor of Science in Entrepreneurship student from Block 1C. I believe that maintaining physical fitness and a structured routine is essential for staying focused and disciplined in my studies. I follow a consistent workout plan four times a week, with a primary focus on building strength and staying active.</p>

          <p className='quote'>‎To balance my busy academic life, I prioritize a slow morning routine and regular journaling, which allows me to process my thoughts and start each day with a clear mind. My fitness goal is to remain consistent with my training while maintaining the mental clarity that comes from my writing and self-care habits. Ultimately, I am working hard to finish my degree and achieve my goal of having my own apartment, where I can continue to lead an organized, healthy, and intentional life.</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Watching Documentaries and Self Growth Videos, and Korean Dramas</span>
              <span className="tag">Listening to Self Growth and Girly Podcast</span>
              <span className="tag">Listening to Music</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag-accent">Personal Growth and Self-Discipline</span>
              <span className="tag-accent">Creative Designs</span>
              <span className='tag-accent'>Community Engagement</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Consistent Workout Plan</span>
              <span className="tag-accent">Muscle Growth</span>
              <span className='tag-accent'>Physical Training and Journaling</span>
              <span className='tag-accent'>Consistency and Focus</span>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Block:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote">Just a simple  student who love playing sports and learning new things. I’m friendly, easy to get along with, and always eager to participate in activities that help me grow physically and mentally. I believe that discipline and consistency are key to achieving anything I set my mind. But first, I need to learn those things.</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Basketball</span>
              <span className="tag">Volleyball</span>
              <span className="tag">Hiking and Outdoor Activities</span>
              <span className="tag">Listening to Music</span>
              <span className='tag'>Reading Stories</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag-accent">Sports</span>
              <span className="tag-accent">Outdoor Activities and Nature Trips</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Build Endurance and Stamina</span>
              <span className="tag-accent">Improve Speed and Agility</span>
              <span className="tag-accent">Learn Proper Workout Techniques</span>
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
            <p className="course">BS Entrepreneurship</p>
          </div>

          <div className="info">
            <p><strong>Year & Section:</strong> <span>1 - C</span></p>
          </div>

          <p className="quote">An Entrepreneur. Student here in Sorsogon State University. I am an opportunity taker and risk taker, I only have one life, why not make it interesting?</p>

          <div className="tags-section">
            <p className="tag-title">Hobbies</p>
            <div className="tags">
              <span className="tag">Cooking</span>
              <span className="tag">Listening to Music</span>
              <span className="tag">Enjoying Nature</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Interests</p>
            <div className="tags">
              <span className="tag">MMA / Mixed Martal Arts</span>
            </div>
          </div>

          <div className="tags-section">
            <p className="tag-title">Fitness Goals</p>
            <div className="tags">
              <span className="tag-accent">Future Champion</span>
              <span className="tag-accent">Push Limits Beyond Capabilities</span>
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
            <h2>PATHFIT 2 </h2>

            <h3>Compendium Website Project</h3>

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
                © 2026 PATHFIT 2 Compendium Website Project.
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
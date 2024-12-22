import React, { useEffect, useRef } from 'react';
import team1 from '../assets/team1.jpg';
import './Hakkimizda.css';  

const AboutusDetail = () => {

  const teamSectionRef = useRef(null);
  const aboutTextRef = useRef(null);

  useEffect(() => {
    const teamSection = teamSectionRef.current;
    const aboutText = aboutTextRef.current;

    const observerOptions = {
      root: null, 
      threshold: 0.3,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === teamSection) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          } else if (entry.target === aboutText) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (teamSection) observer.observe(teamSection);
    if (aboutText) observer.observe(aboutText);

    return () => {
      if (teamSection) observer.unobserve(teamSection);
      if (aboutText) observer.unobserve(aboutText);
    };
  }, []);

  return (
    <>
     
      <section >
        <div id='ankara-avukat-hakkimizda' className="content">
          <div ref={teamSectionRef} className="teamSection">
            <h2 className="founder-title">Kurucumuz</h2>
            <div className="teamMember">
              <img src={team1} alt="" />
              <h3 className='team-member-pg-name'>Name</h3>
              <p>No</p>
            </div>
          </div>

          <div ref={aboutTextRef} className="aboutText">
            <h2>Hakkımızda</h2>
            <p>
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutusDetail;

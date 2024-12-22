import React, { useEffect, useRef } from 'react';
import './Aboutus.css';
import team1 from '../assets/team1.jpg';
 

const Aboutus = () => {

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
            entry.target.classList.add('visible-team'); 
          } else if (entry.target === aboutText) {
            entry.target.classList.add('visible-about');
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


    <section id="ankara-avukat-hakkimizda-home" className="aboutus">
      <div className="aboutus-content">
        <div ref={teamSectionRef} className="team-section">
          <h2 className="founder-title">Kurucumuz</h2>
          <div className="team-member">
            <img src={team1} alt="Avukat Ayşenur Konar" />
            <h3 className='team-member-name-home'>Lawyer Name</h3>
            <p className='team-member-no-home'>Lawyer ID</p>
          </div>
        </div>

    
        <div ref={aboutTextRef} className="about-text">
          <h2 className='about-text-home'>Hakkımızda</h2>
          <p className='about-text-home-p'>
          Biz, Ankara'da avukatlık ve danışmanlık hizmeti veren, kaliteli hizmet ve müvekkil memnuniyetini en ön planda tutan, müvekkil odaklı bir hukuk bürosuyuz. Yılların getirdiği tecrübe ve bilgi birikimiyle, her zaman en iyi çözümleri sunmak için titizlikle çalışıyoruz. Ankara'daki avukatlık ve danışmanlık ihtiyaçlarınızı en iyi şekilde anlayarak, size yenilikçi, etkili ve sürdürülebilir hizmetler sağlıyoruz. Her bir müvekkilimizin özel gereksinimlerine yönelik çözümler geliştirmeye özen gösteriyor, onların beklentilerini aşmayı amaçlıyoruz. Takımımız, her zaman yüksek kalite standartlarına sadık kalarak, Ankara'da sektördeki lider konumumuzu korumak ve daha da güçlendirmek için sürekli olarak kendini geliştiriyor. Amacımız, Ankara'da sektördeki en güvenilir ve saygın hukuk bürosu haline gelmek, müvekkil memnuniyetini sürekli olarak artırarak uzun vadeli iş ilişkileri kurmaktır. Her projede mükemmeliyetin peşinden gidiyor ve Ankara'daki müvekkillerimize değer katmayı hedefliyoruz. Bu hedefe ulaşabilmek için, müvekkil geri bildirimlerine büyük önem veriyor, her bir görüş ve öneriyi iş süreçlerimizi iyileştirmek için bir fırsat olarak değerlendiriyoruz. Müvekkillerimizin taleplerine hızlı ve etkin çözümler üreterek, onların zamanına ve kaynaklarına değer katıyoruz. Bizim için her müvekkil, yalnızca bir iş ilişkisi değil, aynı zamanda uzun süreli bir ortaklıktır. Bu nedenle, her projede yalnızca sonuç odaklı değil, aynı zamanda sürecin her aşamasında kaliteli bir deneyim sunmayı hedefliyoruz. Sürekli gelişim ve inovasyon kültürümüz, bizi Ankara'da sektördeki en güvenilir ve saygın hukuk bürosu olma yolunda ileriye taşıyor. Bu değerlerimizle, müvekkil odaklı çalışma prensiplerimizi daha da güçlendirerek, sektördeki liderliğimizi pekiştirmeyi sürdüreceğiz.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Aboutus;

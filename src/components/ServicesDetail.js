import React from 'react';
import './ServicesDetail.css';

const CustomCard = ({ image, title, alt }) => {
  return (
   
    <div className="custom-card">
      <img src={image} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
  };

const ServicesDetail = () => {
  const servicesdetailed = [
    { title: "Ceza Hukuku Hizmeti", image: "images/ceza_hukuku.jpg", alt: "Ankara Ceza hukuku avukati - Savunma ve sucluluk durumlari" },
    { title: "Aile Hukuku Hizmeti", image: "images/aile_hukuku.jpg", alt: "Ankara Aile hukuku avukati - Bosanma, velayet, nafaka" },
    { title: "İş Hukuku Hizmeti", image: "images/is_hukuku.jpg", alt: "Ankara Is hukuku avukati - Calisan haklari ve is sozlesmeleri" },
    { title: "Ticaret Hukuku Hizmeti", image: "images/ticaret_hukuku.jpg", alt: "Ankara Ticaret hukuku avukati - Sirket kurma ve ticaret sozlesmeleri" },
    { title: "İcra ve İflas Hukuku Hizmeti", image: "images/icra_iflas_hukuku.jpg", alt: "Ankara Icra ve iflas hukuku avukati - Borc odeme ve alacak tahsili" },
    { title: "Gayrimenkul Hukuku Hizmeti", image: "images/gayrimenkul_hukuku.jpg", alt: "Ankara Gayrimenkul hukuku avukati - Satis, kira ve tapu islemleri" },
    { title: "Tüketici Hukuku Hizmeti", image: "images/tuketici_hukuku.jpg", alt: "Ankara Tuketici hukuku avukati - Satis alma, garanti ve cayma hakki" },
    { title: "Vergi Hukuku Hizmeti", image: "images/vergi_hukuku.jpg", alt: "Ankara Vergi hukuku avukati - Vergi odemeleri ve yasal duzenlemeler" },
    { title: "Miras Hukuku Hizmeti", image: "images/miras_hukuku.jpg", alt: "Ankara Miras hukuku avukati - Miras paylasimi ve vasiyetname islemleri" },
    { title: "Sağlık Hukuku Hizmeti", image: "images/saglik_hukuku.jpg", alt: "Ankara Saglik hukuku avukati - Saglik hizmetleri, tibbi sorumluluk" },
    { title: "Fikri Mülkiyet Hukuku Hizmeti", image: "images/fikri_mulkiyet_hukuku.jpg", alt: "Ankara Fikri mulkiyet hukuku avukati - Patent, telif ve marka haklari" },
    { title: "Uluslararası Hukuk Hizmeti", image: "images/uluslararasi_hukuk.jpg", alt: "Ankara Uluslararasi hukuk avukati - Sinir otesi anlasmazliklar ve sozlesmeler" }
  ];

  return (
    <>

    <div id='ankara-avukat-calisma-alanlari' className='service-detailed-container'>
      <h2>Çalışma Alanlarımız</h2>
      {servicesdetailed.map((service, index) => (
        <CustomCard
          key={index}
          image={service.image}
          title={service.title}
          alt={service.alt}
        />
        
      ))}
      
    </div>
    </>

  );
  
};

export default ServicesDetail;

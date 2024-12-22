import React from 'react';
import './Contact.css';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import logo from "../assets/law-logo.jpg";
import Contactus from './Contactus';

const Contact = () => {
  return (
<>   


    <section id="ankara-avukat-iletisim" className="contact">
      
      <div className="contact-info">
        <h2></h2>
        <p><HomeIcon/></p>
        <p><PhoneIphoneIcon/></p>
        <p><EmailIcon/></p>
        <div className="contact-logopart">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </div>

     
      <Contactus/>

     
      <div className="google-maps">
        <h2 className='google-maps-h2'>Konumumuz</h2>
        <iframe 
  src="" 
  width="600" 
  height="450" 
  style={{ border: '0' }} 
  allowfullscreen="" 
  loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
        </div>
    </section>
    </>

  );
};

export default Contact;

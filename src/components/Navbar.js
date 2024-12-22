import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";
import logo from "../assets/law-logo.jpg";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>

      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logopart">
            <Link to="/" onClick={() => { scrollToTop(); }}>
              <img src={logo} alt="Logo" className="navbar-logo" />
            </Link>
          </div>

          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>

          <div className={`sidebar ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-hakkimizda" onClick={() => { closeMenu(); scrollToTop(); }}>Hakkımızda</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-calisma-alanlari" onClick={() => { closeMenu(); scrollToTop(); }}>Çalışma Alanlarımız</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-tum-makaleler" onClick={() => { closeMenu(); scrollToTop(); }}>Makaleler</Link>
              </li>
              <li>
                <Link to="/ankara-avukat-iletisim-bilgileri" onClick={() => { closeMenu(); scrollToTop(); }}>İletişim</Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-links">
            <li>
              <Link to="/" onClick={() => { closeMenu(); scrollToTop(); }}>Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-hakkimizda" onClick={() => { closeMenu(); scrollToTop(); }}>Hakkımızda</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-calisma-alanlari" onClick={() => { closeMenu(); scrollToTop(); }}>Çalışma Alanlarımız</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-tum-makaleler" onClick={() => { closeMenu(); scrollToTop(); }}>Makaleler</Link>
            </li>
            <li>
              <Link to="/ankara-avukat-iletisim-bilgileri" onClick={() => { closeMenu(); scrollToTop(); }}>İletişim</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

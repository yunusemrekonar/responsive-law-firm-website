import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Hakkimizda from './components/Hakkimizda';
import ServicesDetail from './components/ServicesDetail';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';
import Makaleler from './components/Makaleler';
import Iletisim from './components/Iletisim';
import NotFound from './components/Notfound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
        
        <div>
        <Navbar />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Aboutus />
                <Services />
                <Blogs />
                <Contact />
              </>
            }
          />
          <Route path="/ankara-avukat-hakkimizda" element={<Hakkimizda />} />
          <Route path="/ankara-avukat-calisma-alanlari" element={<ServicesDetail />} />
          <Route path="/ankara-avukat-tum-makaleler" element={<Makaleler />} />
          <Route path="/ankara-avukat-iletisim-bilgileri" element={<Iletisim />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import WhatsUp from './components/WhatsUpButton';
import Footer from './components/Footer';
import './i18n'; 
function App() {
  return (
      <Router>
        <Header />
        {/* Add padding top to avoid content hiding behind sticky header */}
        <div className="pt-24 px-4 max-w-7xl mx-auto">
          <Routes>
            <Route path="/nawale-infotech" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} /> 
          </Routes>
        </div>
        <WhatsUp />
        <Footer />
      </Router>
      );
}

export default App;

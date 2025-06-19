import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);


  return (
    <div className="font-sans bg-gradient-to-br from-white via-gray-50 to-white text-gray-800">
            {/* Hero Section */}
    <section
        id="home"
        className="relative min-h-[600px] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
          <img
            src="/photos/background.jpg"
            alt="Digital Transformation"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold leading-tight mb-4">
            {t('hero.title')}
            </h1>
            <p className="text-xl mb-8">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors text-lg font-medium cursor-pointer whitespace-nowrap !rounded-button">
              {t('hero.exploreServices')}
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg font-medium cursor-pointer whitespace-nowrap !rounded-button">
              {t('hero.getConsultation')}
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section*/}
      <Services/>
      {/* Call to Action */}
      <Contact/>
    </div>
  );
};

export default Home;

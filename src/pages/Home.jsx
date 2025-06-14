import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      title: t('services.websiteDevelopment.title'),
      icon: '🌐',
      desc: t('services.websiteDevelopment.desc'),
    },
    {
      title: t('services.billingSoftware.title'),
      icon: '🧾',
      desc: t('services.billingSoftware.desc'),
    },
    {
      title: t('services.websiteManagement.title'),
      icon: '🛠️',
      desc: t('services.websiteManagement.desc'),
    },
    {
      title: t('services.postDeployment.title'),
      icon: '🔧',
      desc: t('services.postDeployment.desc'),
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-br from-white via-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-blue-800 to-indigo-700 text-white py-24 overflow-hidden"
        data-aos="fade-down"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold font-serif leading-tight mb-6 drop-shadow-lg">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-10">{t('hero.subtitle')}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
            >
              {t('hero.exploreServices')}
            </Link>
            <Link
              to="/contact"
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-800 transition"
            >
              {t('hero.getConsultation')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14" data-aos="zoom-in">
            {t('services.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl text-center p-6 transition transform hover:-translate-y-2 hover:shadow-2xl"
                data-aos="fade-up"
                data-aos-delay={i * 150}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="bg-indigo-600 text-white py-16 text-center px-4 relative overflow-hidden"
        data-aos="zoom-in-up"
      >
        <div className="absolute inset-0 bg-indigo-700 opacity-20 mix-blend-overlay" />
        <h3 className="text-3xl font-bold mb-4">{t('cta.title')}</h3>
        <p className="mb-8">{t('cta.subtitle')}</p>
        <Link
          to="/contact"
          className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition"
        >
          {t('cta.button')}
        </Link>
      </section>
    </div>
  );
};

export default Home;

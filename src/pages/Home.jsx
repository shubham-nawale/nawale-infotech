import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.websiteDevelopment.title'),
      icon: '🌐',
      desc: t('services.websiteDevelopment.desc')
    },
    {
      title: t('services.billingSoftware.title'),
      icon: '🧾',
      desc: t('services.billingSoftware.desc')
    },
    {
      title: t('services.websiteManagement.title'),
      icon: '🛠️',
      desc: t('services.websiteManagement.desc')
    },
    {
      title: t('services.postDeployment.title'),
      icon: '🔧',
      desc: t('services.postDeployment.desc')
    }
  ];

  return (
    <div className="font-sans" data-aos="fade-up">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-lg mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/services" className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-100">
              {t('hero.exploreServices')}
            </Link>
            <Link to="/contact" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-700">
              {t('hero.getConsultation')}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">{t('services.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white shadow-lg rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-indigo-600 text-white py-12 text-center px-4">
        <h3 className="text-3xl font-semibold mb-4">{t('cta.title')}</h3>
        <p className="mb-6">{t('cta.subtitle')}</p>
        <Link to="/contact" className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100">
          {t('cta.button')}
        </Link>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: '🌐',
      title: t('services.websiteDevelopment.title'),
      desc: t('services.websiteDevelopment.desc')
    },
    {
      icon: '🧾',
      title: t('services.billingSoftware.title'),
      desc: t('services.billingSoftware.desc')
    },
    {
      icon: '🛠️',
      title: t('services.websiteManagement.title'),
      desc: t('services.websiteManagement.desc')
    },
    {
      icon: '🔧',
      title: t('services.postDeployment.title'),
      desc: t('services.postDeployment.desc')
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">{t('services.title')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-xl rounded-lg p-6 text-center hover:-translate-y-1 hover:shadow-2xl transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


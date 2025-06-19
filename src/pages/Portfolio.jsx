import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    key: 'mandapBillingApp',
    image: 'src/photos/mandapDecoration.jpg'
  },
  {
    key: 'schoolManagementSystem',
    image: 'src/photos/sms.png'
  },
  {
    key: 'websiteLocalBusinesses',
    image: 'src/photos/sms.jpg'
  }
];

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">{t('portfolio.title', 'Our Projects')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
            <img src={proj.image} alt={proj.title} className="h-48 w-full object-cover" />
            <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{t(`portfolio.projects.${proj.key}.title`)}</h3>
            <p className="text-gray-600 text-sm">{t(`portfolio.projects.${proj.key}.desc`)}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

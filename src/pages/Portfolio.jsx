import React from 'react';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'Mandap Billing App',
    desc: 'A mobile-first app in Marathi for mandap decorators to manage bills and orders.',
    image: 'https://raw.githubusercontent.com/shubham-nawale/photos/refs/heads/main/photo-1710273327096-ad95a91a8f68.avif'
  },
  {
    title: 'School Management System',
    desc: 'A role-based online platform for managing school data, attendance, fees, and communication.',
    image: 'https://github.com/shubham-nawale/photos/blob/main/sms.png?raw=true'
  },
  {
    title: 'Website for Local Businesses',
    desc: 'Simple SEO-friendly websites for small businesses to showcase their services.',
    image: 'https://github.com/shubham-nawale/photos/blob/main/sms.jpg?raw=true'
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
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      iconClass: 'fas fa-laptop-code',
      title: t('services.websiteDevelopment.title') || 'Website Development',
      desc: t('services.websiteDevelopment.desc') || 'Custom-built, responsive websites designed to convert visitors into customers and showcase your brand.'
    },
    {
      iconClass: 'fas fa-file-invoice-dollar',
      title: t('services.billingSoftware.title') || 'Billing Software',
      desc: t('services.billingSoftware.desc') || 'Simplify your billing with customized, user-friendly invoicing and GST-ready solutions.'
    },
    {
      iconClass: 'fas fa-tools',
      title: t('services.websiteManagement.title') || 'Website Management',
      desc: t('services.websiteManagement.desc') || 'Ongoing updates, maintenance, and performance optimization for your online presence.'
    },
    {
      iconClass: 'fas fa-wrench',
      title: t('services.postDeployment.title') || 'Post Deployment Support',
      desc: t('services.postDeployment.desc') || 'Continued technical support and upgrades after your project goes live.'
    },
    {
      iconClass: 'fas fa-chart-line',
      title: t('services.digitalMarketing.title'),
      desc: t('services.digitalMarketing.desc') ||'Strategic SEO, content marketing, and social media campaigns to boost your online visibility and engagement.'
    },
    {
      iconClass: 'fas fa-rocket',
      title:t('services.businessGrowth.title') || 'Business Growth Solutions',
      desc: t('services.businessGrowth.desc') || 'Data-driven strategies to identify opportunities, optimize operations, and accelerate your business growth.'
    },
    {
      iconClass: 'fas fa-digital-tachograph',
      title: t('services.digitalTransformation.title')|| 'Digital Transformation',
      desc: t('services.digitalTransformation.desc') || 'End-to-end digital solutions to modernize your business processes and enhance customer experiences.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        {t('services.title') || 'Our Services'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105"
          >
            <div className="text-blue-600 mb-4">
              <i className={`${service.iconClass} text-4xl`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
            <button
              className="text-blue-600 font-medium hover:text-blue-800 flex items-center justify-center mt-4"
            >
              Learn More <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

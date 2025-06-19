import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xjkroznz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          project: '',
          message: ''
        });
      } else {
        setStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <section id="contact" className="bg-gray-50 py-20 rounded-xl">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('contact.title', 'Get in Touch')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.description', 'We’re here to help! Contact us today to learn more about our services.')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email <span className="text-red-600">*</span></label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Phone <span className="text-red-600">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="+91 9876543210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Project Details</label>
                  <input
                    type="text"
                    name="project"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of your project"
                    value={formData.project}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about your project..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t('contact.submit', 'Send Message')}
                </button>

                {status && (
                  <p className="mt-4 text-sm text-blue-600">{status}</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-600 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p>Shivajinagar, Pune 5<br />Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="fas fa-envelope text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p>shubham@nawaleinfotech.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <i className="fas fa-phone-alt text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p>+91 9561349346</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-bold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/shubham-nawale" target="_blank" className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center">
                      <i className="fab fa-linkedin-in text-white"></i>
                    </a>
                    <a href="https://www.instagram.com/nawale_infotech" target="_blank" className="bg-white/20 hover:bg-white/30 w-10 h-10 rounded-full flex items-center justify-center">
                      <i className="fab fa-instagram text-white"></i>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

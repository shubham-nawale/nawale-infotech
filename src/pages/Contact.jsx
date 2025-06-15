import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import { FiMail, FiPhone, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaToken) {
      alert(t('contact.robotError', 'Please verify that you are not a robot.'));
      return;
    }

    emailjs.send(
      'service_iqi36i9',
      'template_r2i8fvb',
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        company: form.company,
        phone: form.phone,
        message: form.message
      },
      'kbbetQG1KwSzXEPpO'
    )
    .then(() => {
      setSent(true);
      setForm({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setCaptchaToken(null);
      setTimeout(() => setSent(false), 5000);
    })
    .catch(err => {
      console.error('EmailJS Error:', err);
      alert(t('contact.sendError', 'Failed to send message. Try again later.'));
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 space-y-10">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">
          {t('contact.title', 'Get in Touch')}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('contact.description', "We're here to help! Contact us today to learn more about our services.")}
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label>{t('contact.firstName', 'First Name')} <span className="text-red-600">*</span></label>
          <input type="text" className="w-full p-3 border rounded" value={form.firstName}
            onChange={e => setForm({ ...form, firstName: e.target.value })} required />
        </div>

        <div>
          <label>{t('contact.lastName', 'Last Name')} <span className="text-red-600">*</span></label>
          <input type="text" className="w-full p-3 border rounded" value={form.lastName}
            onChange={e => setForm({ ...form, lastName: e.target.value })} required />
        </div>

        <div className="col-span-full">
          <label>{t('contact.email', 'Email')} <span className="text-red-600">*</span></label>
          <input type="email" className="w-full p-3 border rounded" value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })} required />
        </div>

        <div className="col-span-full">
          <label>{t('contact.company', 'Company')}</label>
          <input type="text" className="w-full p-3 border rounded" value={form.company}
            onChange={e => setForm({ ...form, company: e.target.value })} />
        </div>

        <div className="col-span-full">
          <label>{t('contact.phone', 'Phone')} <span className="text-red-600">*</span></label>
          <input type="tel" className="w-full p-3 border rounded" value={form.phone}
            onChange={e => setForm({ ...form, phone: e.target.value })} required />
        </div>

        <div className="col-span-full">
          <label>{t('contact.message', 'Message')} <span className="text-red-600">*</span></label>
          <textarea rows="5" className="w-full p-3 border rounded" value={form.message}
            onChange={e => setForm({ ...form, message: e.target.value })} required />
        </div>

        {/* Optional: ReCAPTCHA */}
        {/* <div className="col-span-full">
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={(token) => setCaptchaToken(token)}
          />
        </div> */}

        <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-semibold col-span-full hover:bg-blue-700 transition">
          {t('contact.submit', 'Send Message')}
        </button>

        {sent && <p className="text-green-600 font-semibold col-span-full">{t('contact.success', 'Message sent successfully!')}</p>}
      </form>

      {/* CONTACT DETAILS */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">{t('contact.reachUs', 'Reach us at')}:</h2>
        <div className="flex items-center gap-2 text-gray-700">
          <FiPhone className="text-blue-600" /> <span>+91 9561349346</span>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <FiMail className="text-blue-600" /> <span>info@nawaleinfotech.com</span>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">{t('contact.socialLabel', 'Follow us on')}:</h3>
          <div className="flex items-center gap-6 mt-2">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <FiLinkedin /> LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <FiFacebook /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline">
              <FiTwitter /> Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_iqi36i9',
      'template_r2i8fvb',
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      },
      'kbbetQG1KwSzXEPpO'
    )
      .then(() => {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      })
      .catch(err => {
        console.error('EmailJS Error:', err);
        alert('Failed to send message. Try again later.');
      });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">{t('contact.title', 'Get in Touch')}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <input
          type="text"
          placeholder={t('contact.name', 'Your Name')}
          className="w-full p-3 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder={t('contact.email', 'Your Email')}
          className="w-full p-3 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          rows="5"
          placeholder={t('contact.message', 'Your Message')}
          className="w-full p-3 border rounded"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          {t('contact.submit', 'Send Message')}
        </button>
        {sent && <p className="text-green-600">{t('contact.success', 'Message sent successfully!')}</p>}
      </form>
    </div>
  );
};

export default Contact;

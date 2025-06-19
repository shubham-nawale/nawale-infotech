import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/nawale-infotech', label: t('nav.home') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contact', label: t('nav.contact') }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-200 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link to="/nawale-infotech" className="flex items-center gap-2 sm:gap-3">
          <img
            src="/NawaleInfotech_Logo1.png"
            alt="Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain scale-150"
          />
          <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-wide">
            {t('brand')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-gray-700 font-medium">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative group transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'hover:text-blue-600'
                }`}
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>

        {/* Mobile Toggle + Language Switcher Right Aligned */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-700 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 pt-3 pb-4 space-y-3 text-gray-700 font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block ${
                location.pathname === item.path
                  ? 'text-blue-600'
                  : 'hover:text-blue-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
          {/* Mobile Language Switcher Below Menu Items */}
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

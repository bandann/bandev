import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button-custom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home', label: t('navigation.home') },
    { key: 'about', href: '#about', label: t('navigation.about') },
    { key: 'skills', href: '#skills', label: t('navigation.skills') },
    { key: 'experience', href: '#experience', label: t('navigation.experience') },
    { key: 'projects', href: '#projects', label: t('navigation.projects') },
    { key: 'contact', href: '#contact', label: t('navigation.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-heading font-bold text-2xl gradient-text"
          >
            BanDev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          {/* Language Selector */}
          <div className="flex justify-center items-center mt-1 space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => changeLanguage('en')}
                        className="px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        🇺🇸-EN
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => changeLanguage('es')}
                        className="px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        🇪🇸-ES
                      </Button>
                    </div>

          {/* Theme Controls */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
           
        </div>
           
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        
      </div>
    </motion.nav>
  );
};

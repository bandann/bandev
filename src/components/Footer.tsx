import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import portfolioData from '@/data/portfolio.json';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-heading font-bold">
              {t('footer.name', { name: personal.name })}
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              {t('footer.bio')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-800 pt-8 space-y-2"
          >
            <p className="text-gray-400">
              {t('footer.copyright', { year: currentYear, name: personal.name })}
            </p>
            <p className="text-gray-500 flex items-center justify-center">
              {t('footer.credits')}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

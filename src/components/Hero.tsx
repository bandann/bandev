import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button-custom';
import { Section } from '@/components/ui/section';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import { useTranslation } from 'react-i18next';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { personal } = portfolioData;

  const pdfFilePath = '/public/portafoliodeprecade.pdf'; // Path to the PDF file

  const [showModal, setShowModal] = useState(false);
  const projectsRef = useRef<HTMLElement | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Scroll a la sección de proyectos
  const goToProjects = () => {
    setShowModal(false);
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-2 gap-12 items-center w-full"
      >
        {/* Content */}
        <div className="space-y-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.p 
              className="text-lg text-primary-600 font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero.begining')}
            </motion.p>
            
            <motion.h1 
              className="font-heading text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {personal.name}
            </motion.h1>
            
            <motion.h2 
              className="text-xl md:text-2xl gradient-text font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {t('hero.subtitle')}
            </motion.h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                  >
              {t('hero.presentation')}
        </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button size="lg" className="group" onClick={() => setShowModal(true)}>
            
                {t('hero.buttonHero2')}
            
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button >
            <Button size='lg' className="group">
            <a href={pdfFilePath}
              download
             
            > {t('hero.buttonHero')} </a>
              <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform"  />
             
           
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-6">
            <motion.a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </motion.a>
            
            <motion.a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
            </motion.a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
            <motion.div
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-600 opacity-20"
            />
            
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-4 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl"
            >
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full object-cover rounded-full p-2"
              />
            </motion.div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-white text-white p-3 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="60" height="60" alt="" /></span>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-white text-white p-3 rounded-full shadow-lg"
            >
              <span className="text-sm font-bold"><img src="https://www.citypng.com/public/uploads/preview/magento-logo-icon-hd-png-701751694968127smfdayuwdf.png" width="60" height="0" alt="" /></span>
            </motion.div>

            <motion.div
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-2 -left-8  text-white p-3 rounded-full "
            >
              <span className="text-sm font-bold"><img src="https://icon2.cleanpng.com/20180810/ekz/11448a7a96ee808a3cdbaf0df9570976.webp"  width="60" height="60" alt="" /></span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-2xl w-full p-0 relative animate-fadeIn">
            <div className="flex items-center justify-end px-6 pt-6 pb-2">
              <Button onClick={() => setShowModal(false)} size="lg" className="bg-transparent text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 shadow-none p-0 min-w-0 min-h-0 h-8 w-8 flex items-center justify-center">
                <span className="text-2xl">×</span>
              </Button>
            </div>
            <div className="px-6 pb-6 pt-2">
              <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '75%', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.10)', marginTop: '1.2em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: 12, willChange: 'transform', background: 'linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)' }}>
                <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0, borderRadius: 12 }} src="https://www.canva.com/design/DAGuynnRsOk/40RbTXYFuBHjPgXaQ9qZ7Q/view?embed" allowFullScreen={true} allow="fullscreen" title="Portafolio Canva" />
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <Button onClick={() => setShowModal(false)} className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 font-semibold">{t('hero.close', { defaultValue: 'Cerrar' })}</Button>
                <Button onClick={goToProjects} className="bg-primary-600 hover:bg-primary-700 text-white font-semibold">{t('hero.goToProjects', { defaultValue: 'Ir a proyectos' })}</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

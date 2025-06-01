
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card-custom';
import { Button } from '@/components/ui/button-custom';
import portfolioData from '@/data/portfolio.json';
import { useTranslation } from 'react-i18next';

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('Language');

  const categories = ['All', 'Frontend', 'Backend', 'E-commerce', 'Language','Design','CMS'];
  
  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Section id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4"
        >
          {t('skills.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          {t('skills.subtitle')}
        </motion.p>
      </div>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center group cursor-pointer">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: skill.color }}
                >
                  {skill.name.substring(0, 2).toUpperCase()}
                </div>
                
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-2 rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.years} years experience
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card-custom';
import { Calendar, TrendingUp } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import { useTranslation } from 'react-i18next';

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const { experience } = portfolioData;

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <Section id="experience" className="bg-white dark:bg-black">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4"
        >
          {t('experience.title')}
         </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          {t('experience.subtitle')}
        </motion.p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-0.5" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-2 z-10" />

              {/* Content */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card>
                  <div className="flex items-start gap-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      
                      <p className="text-primary-600 font-medium mb-3">
                        {exp.company}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + achIndex * 0.1 }}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                          >
                            <TrendingUp className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

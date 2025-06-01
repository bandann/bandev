
import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card-custom';
import { useTranslation } from 'react-i18next';


export const About: React.FC = () => {
   const { t } = useTranslation();
  const stats = [
    { number: '5+', label: 'Years Experience | Años de experiencia' },
    { number: '15+', label: 'Projects Completed | Proyectos trabajados' },
    { number: '30+', label: 'Happy Clients | Clientes sastifechos' },
  ];

  return (
    <Section id="about" className="bg-white dark:bg-gray-900">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4"
        >
           {t('aboutme.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          {t('aboutme.description')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
            >
              <div className="text-4xl font-heading font-bold gradient-text mb-2">
                {stat.number} 
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          </Card>
        ))}
      </div>
    </Section>
  );
};


import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/section';
import { Card } from '@/components/ui/card-custom';
import { Star } from 'lucide-react';
import portfolioData from '@/data/portfolio.json';
import { useTranslation } from 'react-i18next';

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const { testimonials } = portfolioData;

  return (
    <Section id="testimonials" className="bg-white dark:bg-black">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4"
        >
          {t('testimonials.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300"
        >
          {t('testimonials.subtitle')}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

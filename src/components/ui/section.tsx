
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className, id }) => {
  // Framer Motion variants for section enter/exit animations.
  // - hidden: initial state (offscreen / invisible)
  // - visible: when the section enters the viewport
  // - exit: when the section leaves (used by AnimatePresence if desired)
  // To customize timings or motion, change the transition objects below or
  // override by wrapping children with additional motion elements.
  const variants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.45, ease: 'easeIn' } },
  };

  return (
    <motion.section
      id={id}
      className={cn('py-10', className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      exit="exit"
    >
      <div className="section-container">
        {children}
      </div>
    </motion.section>
  );
};

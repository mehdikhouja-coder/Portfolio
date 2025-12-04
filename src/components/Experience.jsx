import React from 'react';
import Section from './Section';
import { experienceData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <Section id="experience" title="Experience" className="bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-slate-300 dark:border-slate-700"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900"></div>
            <div className="mb-1 text-sm font-semibold text-primary">{exp.period}</div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{exp.role}</h3>
            <div className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">{exp.company}</div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;

import React from 'react';
import Section from './Section';
import { aboutData } from '../data/portfolio';
import { motion } from 'framer-motion';
import cvFile from '../assets/PDF/Mehdi_khouja_cv.pdf';

const About = () => {
  const { bio, skills } = aboutData;

  return (
    <Section id="about" title="About Me" className="bg-surface">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6">
            {bio}
          </p>
          <div className="mt-8">
            <a 
              href={cvFile} 
              download="Mehdi_Khouja_CV.pdf"
              className="inline-block px-6 py-3 bg-primary text-on-primary rounded-full hover:bg-primary/90 transition-colors shadow-elevation-1 hover:shadow-elevation-2"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <h3 className="text-xl font-semibold mb-6 text-on-surface">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-sm font-medium border border-outline-variant"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;

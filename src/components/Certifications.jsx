import React from 'react';
import Section from './Section';
import { certificationsData } from '../data/portfolio';
import { motion } from 'framer-motion';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications" className="bg-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {certificationsData.map((cert, index) => (
          <motion.div 
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface-container-high p-6 rounded-xl shadow-elevation-1 hover:shadow-elevation-2 transition-all border border-outline-variant flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <FaFilePdf size={32} />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">{cert.title}</h3>
            <p className="text-on-surface-variant text-sm mb-1">{cert.issuer}</p>
            <p className="text-on-surface-variant text-xs mb-4 opacity-80">{cert.date}</p>
            <p className="text-on-surface-variant mb-6 text-sm">
              {cert.description}
            </p>
            <a 
              href={cert.file} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <FaDownload size={14} /> View / Download
            </a>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;

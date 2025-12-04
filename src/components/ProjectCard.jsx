import React, { useState } from 'react';
import { FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-surface-container-high rounded-xl overflow-hidden shadow-elevation-1 hover:shadow-elevation-3 transition-all duration-300 group"
    >
      <div className="aspect-[9/16] overflow-hidden relative group/image bg-surface-container-highest">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10 pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImageIndex}
            src={project.images[currentImageIndex]} 
            alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
            initial={{ opacity: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, x: "-50%", y: "-50%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 max-w-[95%] max-h-[95%] w-auto h-auto rounded-xl shadow-md"
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity z-20 hover:bg-black/70"
        >
          <FaChevronLeft size={12} />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/image:opacity-100 transition-opacity z-20 hover:bg-black/70"
        >
          <FaChevronRight size={12} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
          {project.images.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
            />
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
        <p className="text-on-surface-variant mb-4 text-sm line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start items-center">
          <motion.a 
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
          >
            <FaGithub size={18} /> Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

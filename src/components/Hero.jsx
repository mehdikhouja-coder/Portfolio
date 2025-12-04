import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { heroData } from '../data/portfolio';

const Hero = () => {
  const { name, title, description, socialLinks, image } = heroData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Hello, I'm</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-on-surface mb-4">
            {name}
          </h1>
          <h3 className="text-2xl md:text-3xl font-medium text-on-surface-variant mb-6">
            {title}
          </h3>
          <p className="text-lg text-on-surface-variant mb-8 max-w-lg mx-auto md:mx-0">
            {description}
          </p>
          
          <div className="flex space-x-4 justify-center md:justify-start mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-on-surface-variant hover:text-primary transition-colors"
                aria-label={link.label}
              >
                <link.icon />
              </a>
            ))}
          </div>

          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-primary text-on-primary rounded-full font-medium hover:bg-primary/90 transition-colors cursor-pointer shadow-elevation-2 hover:shadow-elevation-3"
            >
              View Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 border-2 border-outline text-on-surface-variant rounded-full font-medium hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-surface-container-high shadow-elevation-3">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

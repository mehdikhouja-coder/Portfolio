import React, { useState } from 'react';
import Section from './Section';
import { heroData } from '../data/portfolio';
import { motion } from 'framer-motion';

const Contact = () => {
  const { socialLinks } = heroData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    // Replace with your actual email address
    window.location.href = `mailto:mehdikhoujaprofessional@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Let's Talk</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-700"
              >
                <div className="text-2xl text-primary">
                  <link.icon />
                </div>
                <span className="font-medium text-slate-900 dark:text-white">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;

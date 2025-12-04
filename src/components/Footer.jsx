import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Mehdi. All rights reserved.
        </p>
        <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;

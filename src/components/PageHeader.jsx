import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle, breadcrumb }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-950 dark:from-slate-950 dark:to-primary-950 py-16 md:py-20 text-white border-b border-primary-800/20">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-0 w-60 h-60 bg-blue-600/15 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Title & Subtitle */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base mb-6"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Breadcrumb Navigation */}
        {breadcrumb && (
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center space-x-2 text-xs md:text-sm font-medium"
          >
            <Link to="/" className="text-slate-400 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-primary-400">{breadcrumb}</span>
          </motion.nav>
        )}
      </div>
    </div>
  );
}

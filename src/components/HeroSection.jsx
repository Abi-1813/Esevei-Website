import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaClock, FaCheckCircle, FaSearch } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-slate-50 to-white dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 py-16 md:py-24 transition-colors duration-300">
      
      {/* Decorative Blob Gradients */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-100/40 dark:bg-primary-950/15 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-indigo-100/30 dark:bg-indigo-950/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2 bg-primary-100/70 dark:bg-primary-950/60 border border-primary-200/40 dark:border-primary-850 px-3 py-1.5 rounded-full text-xs font-bold text-primary-700 dark:text-primary-400 uppercase tracking-wider"
            >
              <FaShieldAlt className="w-3.5 h-3.5 shrink-0" />
              <span>Government Approved Facilitation Center</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white leading-tight tracking-tight"
            >
              Secure & Fast <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-500 dark:from-primary-400 dark:to-indigo-400">
                E-Sevai & Online Services
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-650 dark:text-slate-355 max-w-2xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed font-medium"
            >
              Apply for Aadhaar updates, PAN cards, Passport slots, Income and Community certificates, Ration services, and business filings, all in one place with professional assistance.
            </motion.p>

            {/* Quick Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400 font-semibold"
            >
              <span className="flex items-center bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 rounded-lg px-3 py-1.5 shadow-sm">
                <FaCheckCircle className="text-emerald-500 mr-2 shrink-0" /> Accurate Submission
              </span>
              <span className="flex items-center bg-white dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800 rounded-lg px-3 py-1.5 shadow-sm">
                <FaClock className="text-primary-500 mr-2 shrink-0" /> Prompt Status Updates
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto text-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/35 hover:-translate-y-0.5"
              >
                Browse 50+ Services
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900/80 rounded-2xl font-bold transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                Inquire Online
              </Link>
            </motion.div>
          </div>

          {/* Right Graphic/Details Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-sm glass-card rounded-3xl p-6 md:p-8 border border-white/20 relative shadow-2xl overflow-hidden"
            >
              {/* Top Banner Details */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl"></div>

              {/* Business Card Representation */}
              <div className="border-b border-slate-200/50 dark:border-slate-800/40 pb-6 mb-6">
                <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-950/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Center Administrator
                </span>
                <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mt-3 mb-1">
                  Mr. Rajesh Kumar
                </h2>
                <p className="text-slate-550 dark:text-slate-400 text-xs font-semibold">
                  Proprietor, Authorized E-Sevai Facilitator
                </p>
              </div>

              {/* Center Credentials Grid */}
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Contact Hotline
                  </span>
                  <a href="tel:+919876543210" className="text-slate-800 dark:text-white font-bold text-sm hover:underline">
                    +91 9876543210
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email Inquiry
                  </span>
                  <a href="mailto:info@abcesevai.com" className="text-slate-800 dark:text-white font-bold text-sm hover:underline">
                    info@abcesevai.com
                  </a>
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Center Office Location
                  </span>
                  <p className="text-slate-850 dark:text-slate-300 text-xs leading-relaxed font-semibold">
                    No. 25, Main Road, Chennai, Tamil Nadu
                  </p>
                </div>

                {/* Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200/30 dark:border-slate-800/30">
                  <div className="bg-slate-100/50 dark:bg-slate-900/50 rounded-xl p-3 text-center border border-slate-200/30 dark:border-slate-800">
                    <span className="block text-lg">📁</span>
                    <span className="block text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-1 leading-tight">Secure Uploads</span>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-900/50 rounded-xl p-3 text-center border border-slate-200/30 dark:border-slate-800">
                    <span className="block text-lg">⚡</span>
                    <span className="block text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase mt-1 leading-tight">Same Day Verification</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

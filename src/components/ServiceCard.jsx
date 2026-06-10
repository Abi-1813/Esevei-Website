import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { FaChevronDown, FaChevronUp, FaClock, FaClipboardList } from 'react-icons/fa';

export default function ServiceCard({ service, index }) {
  const [showRequirements, setShowRequirements] = useState(false);
  const navigate = useNavigate();

  // Dynamically resolve Fa icons
  const IconComponent = FaIcons[service.icon] || FaIcons.FaGlobe;

  const handleInquire = () => {
    // Navigate to contact and pass the service name as state/query
    navigate(`/contact?service=${encodeURIComponent(service.name)}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass-card rounded-2xl p-6 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden border border-slate-200/50 dark:border-slate-800/40"
    >
      {/* Top Background Hover Effect */}
      <div className="absolute top-0 left-0 w-2 h-full bg-primary-600 dark:bg-primary-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

      <div>
        {/* Category & Icon */}
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-primary-50 dark:bg-primary-950/45 text-primary-600 dark:text-primary-400 px-2.5 py-1 rounded-full border border-primary-100 dark:border-primary-950/20">
            {service.category}
          </span>
          <div className="p-3 bg-primary-100/60 dark:bg-primary-900/40 rounded-xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-semibold text-lg text-slate-900 dark:text-white mb-2 leading-snug">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Details Row */}
        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-5 space-x-4">
          <span className="flex items-center">
            <FaClock className="mr-1.5 text-primary-500 shrink-0" />
            {service.processingTime}
          </span>
        </div>
      </div>

      {/* Action Area */}
      <div className="mt-auto space-y-3">
        {/* Toggle Requirements Button */}
        <button
          onClick={() => setShowRequirements(!showRequirements)}
          className="w-full flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors duration-200 focus:outline-none"
        >
          <span className="flex items-center">
            <FaClipboardList className="mr-1.5" />
            Required Documents
          </span>
          {showRequirements ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
        </button>

        {/* Requirements List (Animated Accordion) */}
        <AnimatePresence initial={false}>
          {showRequirements && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-slate-100/60 dark:bg-slate-900/60 rounded-xl px-3 py-2.5 text-[11px] text-slate-600 dark:text-slate-400"
            >
              <ul className="list-disc pl-4 space-y-1">
                {service.requirements.map((req, idx) => (
                  <li key={idx} className="leading-tight">{req}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Inquire Button */}
        <button
          onClick={handleInquire}
          className="w-full py-2.5 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold transition-all duration-200 shadow-md shadow-primary-500/10 hover:shadow-lg hover:shadow-primary-500/20 active:scale-98 cursor-pointer flex items-center justify-center space-x-1"
        >
          <span>Apply / Inquire Now</span>
        </button>
      </div>
    </motion.div>
  );
}

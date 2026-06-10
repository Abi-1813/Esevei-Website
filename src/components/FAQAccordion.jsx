import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function FAQAccordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={faq.id || index}
            className="glass-card rounded-2xl overflow-hidden border border-slate-200/50 dark:border-slate-800/40 transition-all duration-300"
          >
            {/* Header / Toggle Button */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none group cursor-pointer"
            >
              <span className="font-display font-medium text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 pr-4 text-sm md:text-base">
                {faq.question}
              </span>
              <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-905 group-hover:bg-primary-50 dark:group-hover:bg-primary-950 text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300 ${
                isOpen ? 'rotate-180 bg-primary-100/50 dark:bg-primary-950' : ''
              }`}>
                <FaChevronDown className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Answer / Body (Animated Expand) */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-slate-650 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-950/20">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

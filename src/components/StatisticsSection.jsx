import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaBriefcase, FaAward, FaCalendarCheck } from 'react-icons/fa';

export default function StatisticsSection() {
  const stats = [
    {
      id: 1,
      number: '10,000+',
      label: 'Happy Citizens Assisted',
      icon: FaUserCheck,
      color: 'text-blue-500 bg-blue-500/10'
    },
    {
      id: 2,
      number: '50+',
      label: 'Digital Services Offered',
      icon: FaBriefcase,
      color: 'text-amber-500 bg-amber-500/10'
    },
    {
      id: 3,
      number: '99.9%',
      label: 'Application Success Rate',
      icon: FaAward,
      color: 'text-emerald-500 bg-emerald-500/10'
    },
    {
      id: 4,
      number: '7 Years',
      label: 'Trust & Experience',
      icon: FaCalendarCheck,
      color: 'text-indigo-500 bg-indigo-500/10'
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-slate-100/30 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center border border-slate-200/50 dark:border-slate-800/40 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3.5xl text-slate-900 dark:text-white mb-1 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

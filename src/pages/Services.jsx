import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import { servicesData, SERVICES_CATEGORIES } from '../data/services';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Categories list for tabs
  const categoriesList = useMemo(() => {
    return ['All', ...Object.values(SERVICES_CATEGORIES)];
  }, []);

  // Filtered services logic
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.requirements.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-12">
      {/* Page Title Header */}
      <PageHeader
        title="Our Digital Services"
        subtitle="Apply for state & central government documents, certificates, licences, registrations, and exam forms with certified accuracy."
        breadcrumb="Services"
      />

      {/* Filter and Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white dark:bg-slate-900/50 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 shadow-sm glass">
          
          {/* Search Box */}
          <div className="relative w-full md:max-w-sm">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <FaSearch className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, e.g., Aadhaar, Income..."
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 dark:bg-slate-950/40 border border-slate-250 dark:border-slate-850 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500/25 transition-all duration-200"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-655"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Categories Horizontal Scroll/List */}
          <div className="w-full overflow-x-auto flex space-x-2 pb-1.5 md:pb-0 scrollbar-none justify-start md:justify-end">
            {categoriesList.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 focus:outline-none cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-500/20'
                    : 'bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white dark:bg-slate-900/30 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 max-w-xl mx-auto"
          >
            <span className="text-4xl">🔍</span>
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mt-4 mb-2">
              No Services Found
            </h3>
            <p className="text-slate-500 dark:text-slate-450 text-xs px-6">
              We couldn't find any services matching your search or category selection. Try adjusting your search query, or contact us directly to inquire.
            </p>
            <div className="mt-6">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold transition-all duration-200"
              >
                Clear Search & Filters
              </button>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}

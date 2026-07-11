import React from 'react';
import PageHeader from '../components/PageHeader';
import FAQAccordion from '../components/FAQAccordion';
import { faqsData } from '../data/faqs';
import { Link } from 'react-router-dom';

export default function FAQ() {
  return (
    <div className="space-y-12">
      {/* Page Header */}
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about document eligibility, processing times, service fees, and application tracking."
        breadcrumb="FAQ"
      />

      {/* Accordion List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion faqs={faqsData} />
      </section>

      {/* Unresolved Question Banner */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-slate-100 dark:bg-slate-900/40 rounded-2xl p-6 text-center border border-slate-200/50 dark:border-slate-800/40">
          <span className="text-3xl">💬</span>
          <h3 className="font-display font-bold text-base text-slate-900 dark:text-white mt-3 mb-1">
            Still Have Questions?
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs max-w-md mx-auto mb-4 leading-relaxed">
            If you have a query about a specific certificate requirements or state schemes not answered here, contact Mr. Murugavel V directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <a
              href="https://wa.me/919487475497?text=Hi%20Murugavel,%20I%2520have%2520a%2520question%2520about%2520certificate%2520applications."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-colors duration-200 shadow-md shadow-emerald-500/10 cursor-pointer"
            >
              Ask on WhatsApp
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-primary-650 hover:bg-primary-750 text-white rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

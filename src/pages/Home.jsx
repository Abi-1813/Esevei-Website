import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserCheck, FaChevronRight, FaStar, FaGlobe, FaHandsHelping, FaFileAlt } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import StatisticsSection from '../components/StatisticsSection';
import TestimonialCard from '../components/TestimonialCard';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';
import { testimonialsData } from '../data/testimonials';

export default function Home() {
  // Highlight only top 4 services on the home page
  const highlightServices = servicesData.filter(s => 
    ['aadhaar', 'pan', 'voter-id', 'passport'].includes(s.id)
  );

  return (
    <div className="space-y-16">
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Key Highlights / Quick Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Easy Document Verification',
              description: 'We scan, verify, and format your proofs based on exact state & central portal requirements to prevent rejections.',
              icon: FaFileAlt,
              color: 'from-blue-500 to-cyan-500'
            },
            {
              title: 'Secure Client Dashboard',
              description: 'Your identity proofs and certificate data are uploaded directly to government databases through encrypted channels.',
              icon: FaShieldAlt,
              color: 'from-indigo-500 to-purple-500'
            },
            {
              title: 'Dedicated Client Support',
              description: 'Have a question? Receive immediate status tracking updates via call or WhatsApp straight from Mr. Murugavel V.',
              icon: FaHandsHelping,
              color: 'from-emerald-500 to-teal-500'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/40 relative hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Government Service Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
              Core Facilitations
            </span>
            <h2 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
              Most Requested Digital Services
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl">
              We assist with applications for essential identity documents and permits. Check requirements and apply online.
            </p>
          </div>
          <div className="text-center md:text-right shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center text-sm font-bold text-primary-650 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-200 group"
            >
              <span>View All 50+ Services</span>
              <FaChevronRight className="ml-1.5 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* 4. Statistics Section */}
      <StatisticsSection />

      {/* 5. Why Choose Us */}
      <section className="bg-slate-900 text-slate-100 dark:bg-slate-950/60 py-16 md:py-20 border-y border-slate-800 dark:border-slate-900 overflow-hidden relative">
        <div className="absolute right-0 top-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Why Choose Left */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-primary-400 uppercase tracking-widest">
                Our Competitive Advantage
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4.5xl text-white tracking-tight leading-tight">
                Why Citizens Trust <br />
                REHOBOTH CSC CENTER
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Applying for government certificates independently can be confusing, time-consuming, and prone to application rejection due to incorrect documents. We eliminate that friction.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Experienced Consultant',
                    text: 'Managed by Mr. Murugavel V with 7+ years of revenue and online facilitation experience.'
                  },
                  {
                    title: 'Accurate Pre-Screening',
                    text: 'We verify your certificates and details before uploading to guarantee error-free forms.'
                  },
                  {
                    title: 'Transparent Pricing Structure',
                    text: 'Fixed nominal service rates, receipt generation for every payment, and zero hidden costs.'
                  }
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="text-emerald-400 text-lg mt-0.5">✓</span>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white">{point.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Right - Graphical trust elements */}
            <div className="flex justify-center">
              <div className="w-full max-w-md bg-slate-850 dark:bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6 shadow-xl relative">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <FaUserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Trust & Security Checked</h4>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">Authorized facilitation</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  We process documents securely using government interfaces and never share your personal identity details with third-party aggregators.
                </p>

                <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-800 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="block font-bold text-lg text-white">100%</span>
                    <span className="block text-[9px] text-slate-500 uppercase mt-0.5">Privacy Assured</span>
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-white">Quick</span>
                    <span className="block text-[9px] text-slate-500 uppercase mt-0.5">Status Tracking</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/about"
                    className="inline-flex items-center text-xs font-bold text-primary-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    <span>Read More About Us</span>
                    <FaChevronRight className="ml-1 w-2.5 h-2.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-primary-650 dark:text-primary-400 uppercase tracking-widest">
            Client Reviews
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            Read testimonials from local citizens and businesses who have successfully obtained documents through our center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index} 
            />
          ))}
        </div>
      </section>

      {/* 7. Contact CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-700 to-indigo-650 dark:from-slate-950 dark:to-primary-950 text-white rounded-3xl p-8 md:p-12 border border-primary-650/10 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Circle Backgrounds */}
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-white/5 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
          <div className="absolute left-0 top-0 w-60 h-60 bg-primary-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <h3 className="font-display font-bold text-2xl md:text-3.5xl tracking-tight leading-tight">
                Need Help with Your Government Applications?
              </h3>
              <p className="text-slate-255 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
                Contact Mr. Murugavel V today. Send your details online or call us directly. We will verify your credentials and guide you instantly.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center gap-3 w-full max-w-xs mx-auto">
              <a
                href="tel:+919487475497"
                className="w-full text-center py-3.5 px-6 bg-white text-primary-700 font-bold rounded-2xl hover:bg-slate-50 transition-colors duration-200 shadow-lg text-sm"
              >
                Call Hotline Now
              </a>
              <Link
                to="/contact"
                className="w-full text-center py-3.5 px-6 bg-primary-600 border border-primary-500/30 text-white font-bold rounded-2xl hover:bg-primary-700 transition-colors duration-200 text-sm"
              >
                Send Online Request
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

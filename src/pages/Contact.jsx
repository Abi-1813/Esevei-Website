import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const ownerDetails = {
    name: 'Mr. Rajesh Kumar',
    phone: '+91 9876543210',
    email: 'info@abcesevai.com',
    address: 'No. 25, Main Road, Chennai, Tamil Nadu'
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <PageHeader
        title="Contact Our Center"
        subtitle="Send your service requests online, view our working hours, or call Mr. Rajesh Kumar directly for instant application support."
        breadcrumb="Contact Us"
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Contact Information Cards & Map */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact cards */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                Center Contact Information
              </h3>
              
              {/* Address card */}
              <div className="flex items-start p-4 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl shadow-sm">
                <div className="p-3 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-xl mr-4 shrink-0">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-0.5">Office Address</h4>
                  <p className="text-xs md:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-semibold">
                    {ownerDetails.address}
                  </p>
                </div>
              </div>

              {/* Call card */}
              <div className="flex items-start p-4 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl shadow-sm">
                <div className="p-3 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-xl mr-4 shrink-0">
                  <FaPhoneAlt className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-0.5">Phone Call Hotline</h4>
                  <a href={`tel:${ownerDetails.phone}`} className="text-xs md:text-sm text-slate-700 dark:text-slate-350 hover:text-primary-600 dark:hover:text-primary-400 font-bold">
                    {ownerDetails.phone}
                  </a>
                  <span className="block text-[10px] text-slate-400 mt-0.5">Owner: Mr. Rajesh Kumar</span>
                </div>
              </div>

              {/* Email card */}
              <div className="flex items-start p-4 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl shadow-sm">
                <div className="p-3 bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 rounded-xl mr-4 shrink-0">
                  <FaEnvelope className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-0.5">Email Support</h4>
                  <a href={`mailto:${ownerDetails.email}`} className="text-xs md:text-sm text-slate-700 dark:text-slate-350 hover:text-primary-600 dark:hover:text-primary-400 font-bold">
                    {ownerDetails.email}
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="flex items-start p-4 bg-white dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800/40 rounded-2xl shadow-sm">
                <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-xl mr-4 shrink-0">
                  <FaClock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-0.5">Center Timing</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-350 font-semibold leading-relaxed">
                    Mon - Sat: 9:30 AM - 7:30 PM <br />
                    <span className="text-rose-500 font-bold">Sunday & Public Holidays Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Chat Buttons block */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${ownerDetails.phone}`}
                className="flex items-center justify-center space-x-2 py-3 bg-primary-650 hover:bg-primary-750 text-white rounded-xl text-xs font-bold transition-all duration-200 shadow-md shadow-primary-500/10 cursor-pointer"
              >
                <FaPhoneAlt />
                <span>Call Center</span>
              </a>
              <a
                href={`https://wa.me/919876543210?text=Hi%20Rajesh%20Kumar,%20I%20have%20an%20e-sevai%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold transition-all duration-200 shadow-md shadow-emerald-500/10 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Map Frame Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg h-64 relative bg-slate-100">
              <iframe
                title="ABC E-Sevai Maiyam Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124332.96495116744!2d80.14112108781995!3d13.041692131922718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x82e4b03fcf0049f!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Right Side: Form Container */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About Column */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🏛️</span>
            <div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                ABC E-SEVAI
              </span>
              <span className="block text-[9px] font-semibold text-slate-400 tracking-wider">
                MAIYAM • FACILITATION CENTER
              </span>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your trusted partner for all online government services, documentation, and identity applications in Chennai, Tamil Nadu. Fast, secure, and hassle-free submissions.
          </p>
          <div className="flex items-center text-xs text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 w-fit">
            <FaClock className="mr-1.5" />
            <span>Mon - Sat: 9:30 AM - 7:30 PM</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-display text-white font-semibold text-base mb-6 tracking-wide uppercase">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: 'Home Page', path: '/' },
              { name: 'Our Services', path: '/services' },
              { name: 'About Our Center', path: '/about' },
              { name: 'Frequently Asked Questions', path: '/faq' },
              { name: 'Contact Us', path: '/contact' }
            ].map((link, idx) => (
              <li key={idx}>
                <Link 
                  to={link.path} 
                  className="flex items-center text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200 group"
                >
                  <FaArrowRight className="w-2.5 h-2.5 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h3 className="font-display text-white font-semibold text-base mb-6 tracking-wide uppercase">Contact Details</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start">
              <FaMapMarkerAlt className="w-5 h-5 text-primary-400 mr-3 mt-0.5 shrink-0" />
              <span>
                No. 25, Main Road, <br />
                Chennai, Tamil Nadu - 600001
              </span>
            </li>
            <li className="flex items-center">
              <FaPhone className="w-4 h-4 text-primary-400 mr-3 shrink-0" />
              <a href="tel:+919876543210" className="hover:text-primary-400 transition-colors duration-200">
                +91 9876543210
              </a>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="w-4 h-4 text-primary-400 mr-3 shrink-0" />
              <a href="mailto:info@abcesevai.com" className="hover:text-primary-400 transition-colors duration-200">
                info@abcesevai.com
              </a>
            </li>
            <li className="pt-2 border-t border-slate-800 text-xs text-slate-500">
              <span className="font-medium text-slate-400">Owner:</span> Mr. Rajesh Kumar
            </li>
          </ul>
        </div>

        {/* Important Disclaimer Column */}
        <div>
          <h3 className="font-display text-white font-semibold text-base mb-6 tracking-wide uppercase">Important Notice</h3>
          <p className="text-slate-500 text-xs leading-relaxed">
            <strong>Disclaimer:</strong> ABC E-Sevai Maiyam is a private facilitation agency. We assist citizens in formatting and submitting digital applications for various services. We charge a nominal service fee for typing, scanning, and consulting. We are not direct government officials, and final approvals lie with the respective government authorities.
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 dark:border-slate-900 text-center flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>© {currentYear} ABC E-Sevai Maiyam. All rights reserved.</p>
        <p>
          Designed for Premium Service & Accessibility
        </p>
      </div>
    </footer>
  );
}

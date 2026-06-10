import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";
  const message = encodeURIComponent("Hi ABC E-Sevai Maiyam, I would like to inquire about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 animate-bounce-subtle"
      aria-label="Contact on WhatsApp"
      style={{ animationDuration: '3s' }}
    >
      <FaWhatsapp className="w-6 h-6" />
      <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        Chat with Mr. Rajesh Kumar
      </span>
    </a>
  );
}

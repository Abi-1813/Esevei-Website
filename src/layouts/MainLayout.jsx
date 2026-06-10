import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import BackToTopButton from '../components/BackToTopButton';
import ScrollToTop from '../components/ScrollToTop';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Dynamic Toast Notifications */}
      <Toaster 
        position="top-right" 
        toastOptions={{
          className: 'dark:bg-slate-900 dark:text-slate-100 dark:border dark:border-slate-800',
          duration: 4000,
        }}
      />
      
      {/* Route scroll reset helper */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow pt-24 pb-12">
        <Outlet />
      </main>

      {/* Floating widgets */}
      <WhatsAppButton />
      <BackToTopButton />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

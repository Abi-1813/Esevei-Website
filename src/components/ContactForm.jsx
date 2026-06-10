import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useForm } from '../hooks/useForm';
import { servicesData } from '../data/services';
import { FaUser, FaEnvelope, FaPhone, FaConciergeBell, FaPaperPlane } from 'react-icons/fa';

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  };

  // Validation function
  const validate = (values) => {
    const errors = {};
    
    if (!values.name.trim()) {
      errors.name = 'Full name is required';
    } else if (values.name.trim().length < 3) {
      errors.name = 'Name must be at least 3 characters';
    }

    if (!values.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(values.phone.trim())) {
      errors.phone = 'Enter a valid 10-digit mobile number';
    }

    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      errors.email = 'Enter a valid email address';
    }

    if (!values.message.trim()) {
      errors.message = 'Message or details of request is required';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  // Submit Handler
  const onSubmit = async (values) => {
    // Mock API Call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Log values & notify user
    console.log('Form Submitted successfully:', values);
    toast.success((t) => (
      <div>
        <span className="font-bold block text-sm mb-0.5 text-slate-900 dark:text-white">Inquiry Submitted!</span>
        <span className="text-xs text-slate-500 dark:text-slate-400">Mr. Rajesh Kumar will contact you within 24 hours.</span>
      </div>
    ));
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = useForm(initialValues, validate, onSubmit);

  // Sync service pre-fill from query param
  useEffect(() => {
    if (serviceParam) {
      // Find matching service
      const matched = servicesData.find(
        (s) => s.name.toLowerCase() === decodeURIComponent(serviceParam).toLowerCase()
      );
      if (matched) {
        setValues((prev) => ({ ...prev, service: matched.name }));
      }
    }
  }, [serviceParam, setValues]);

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-6 border border-slate-200/50 dark:border-slate-800/40">
      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
        Send Online Inquiry
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm">
        Fill out this form and we will review your documents, calculate official fees, and start your application process.
      </p>

      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Full Name <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-450 dark:text-slate-500">
            <FaUser className="w-4 h-4" />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Mr. John Doe"
            className={`w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900/40 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
              touched.name && errors.name
                ? 'border-rose-450 focus:ring-rose-500/20'
                : 'border-slate-250 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/25'
            }`}
          />
        </div>
        {touched.name && errors.name && (
          <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.name}</p>
        )}
      </div>

      {/* Phone Input */}
      <div>
        <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Mobile Number <span className="text-rose-500">*</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-450 dark:text-slate-500">
            <FaPhone className="w-4 h-4" />
          </div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="9876543210"
            className={`w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900/40 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
              touched.phone && errors.phone
                ? 'border-rose-450 focus:ring-rose-500/20'
                : 'border-slate-250 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/25'
            }`}
          />
        </div>
        {touched.phone && errors.phone && (
          <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.phone}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Email Address <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-450 dark:text-slate-500">
            <FaEnvelope className="w-4 h-4" />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            className={`w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900/40 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
              touched.email && errors.email
                ? 'border-rose-450 focus:ring-rose-500/20'
                : 'border-slate-250 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/25'
            }`}
          />
        </div>
        {touched.email && errors.email && (
          <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.email}</p>
        )}
      </div>

      {/* Service Selection Dropdown */}
      <div>
        <label htmlFor="service" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Select Service Required <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-450 dark:text-slate-500">
            <FaConciergeBell className="w-4 h-4" />
          </div>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-250 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:border-primary-500 focus:ring-primary-500/25 transition-all duration-200 text-slate-700 dark:text-slate-200"
          >
            <option value="">General Online Inquiry</option>
            {servicesData.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
          Details / Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Please write details, e.g., 'I need to correct my DOB on Aadhaar. I have my 10th marksheet as proof.'"
          className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/40 border rounded-xl text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
            touched.message && errors.message
              ? 'border-rose-450 focus:ring-rose-500/20'
              : 'border-slate-250 dark:border-slate-800 focus:border-primary-500 focus:ring-primary-500/25'
          }`}
        ></textarea>
        {touched.message && errors.message && (
          <p className="text-xs text-rose-500 mt-1.5 font-medium">{errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-4 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-500/60 text-white font-bold rounded-xl text-sm transition-all duration-200 shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Submitting Inquiry...</span>
          </>
        ) : (
          <>
            <FaPaperPlane />
            <span>Submit Secure Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
}

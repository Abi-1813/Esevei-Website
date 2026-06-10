import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaAward, FaUserShield, FaHandshake, FaUserGraduate } from 'react-icons/fa';
import PageHeader from '../components/PageHeader';

export default function About() {
  const values = [
    {
      title: 'Digital Inclusion',
      description: 'Bringing complex government portals closer to local citizens, elderly individuals, and small business owners who face barriers accessing online services.',
      icon: FaHandshake,
    },
    {
      title: 'Privacy and Integrity',
      description: 'Your identity papers, passwords, and revenue statements are stored locally with strong safety systems and destroyed after submission.',
      icon: FaUserShield,
    },
    {
      title: 'Submission Accuracy',
      description: 'Over 7 years of working with state and central directories translates into zero typos, valid document formats, and quick approvals.',
      icon: FaAward,
    }
  ];

  return (
    <div className="space-y-16">
      {/* Page Header */}
      <PageHeader
        title="About Our Center"
        subtitle="Learn about our mission, vision, and the dedication Mr. Rajesh Kumar brings to simplifying digital government services for citizens."
        breadcrumb="About Us"
      />

      {/* Main Grid: Overview & Owner Detail */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Owner details / graphic */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-sm glass-card rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/40 relative shadow-xl text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1590402421685-65cdd1eb74b7?auto=format&fit=crop&w=300&h=300&q=80"
                alt="Rajesh Kumar"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-500/25 mb-6 shadow-md"
                onError={(e) => {
                  e.target.src = "https://api.dicebear.com/7.x/initials/svg?seed=Rajesh%20Kumar";
                }}
              />
              <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-950/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Founder & Proprietor
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mt-4 mb-1">
                Mr. Rajesh Kumar
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-4">
                7+ Years revenue portal expertise
              </p>
              
              <div className="bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/40 rounded-2xl p-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left">
                "Our center is built on the foundation of transparency. We exist to guide people who find digital forms complex, ensuring their files are correct the first time."
              </div>
            </motion.div>
          </div>

          {/* About Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 dark:text-white tracking-tight leading-tight">
              Bridging the Digital Divide <br />
              with Professional Service
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
              Established in Chennai, Tamil Nadu, ABC E-Sevai Maiyam has grown from a local xerox and application shop into a premier authorized digital facilitation center. Managed under the guidance of Mr. Rajesh Kumar, we have successfully assisted thousands of residents in securing state benefits, identities, and tax setups.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Our core objective is simple: reduce the queue and error margin. By combining top-tier scanner devices, high-speed lines, and deep understanding of government application rules, we process files with maximum accuracy.
            </p>

            {/* Experience details */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/50 dark:border-slate-800/40">
              <div>
                <span className="block font-display font-bold text-2xl md:text-3.5xl text-primary-650 dark:text-primary-400">7+</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mt-1">Years Active</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl md:text-3.5xl text-primary-650 dark:text-primary-400">10k+</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mt-1">Applications</span>
              </div>
              <div>
                <span className="block font-display font-bold text-2xl md:text-3.5xl text-primary-650 dark:text-primary-400">99.9%</span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold mt-1">Approvals</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-slate-100/40 dark:bg-slate-905/30 py-12 md:py-16 border-y border-slate-200/50 dark:border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/40"
          >
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400 rounded-lg flex items-center justify-center mb-5">
              <FaBullseye className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
              Our Mission
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To deliver error-free, secure, and rapid digital government and online application facilitation. We strive to save valuable time for citizens by double-checking credentials and utilizing optimization scripts to complete filings reliably.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/40"
          >
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center mb-5">
              <FaEye className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
              Our Vision
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              To become Tamil Nadu's leading private e-governance facilitator center. We envision an accessible, digital-first environment where any local citizen, regardless of age or computer literacy, can apply for and receive documents securely.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold text-primary-650 dark:text-primary-400 uppercase tracking-widest">
            Core Beliefs
          </span>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight">
            The Values that Drive Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="mx-auto w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-primary-600 dark:text-primary-400 border border-slate-200/40 dark:border-slate-800/40">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="text-slate-550 dark:text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm mx-auto">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

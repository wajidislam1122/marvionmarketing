import React from 'react';
import { motion } from 'framer-motion';
export function SocialProof() {
  const stats = [
  {
    value: '50+',
    label: 'Projects Completed'
  },
  {
    value: '1M+',
    label: 'Organic Reach Generated'
  },
  {
    value: '1000+',
    label: 'Leads Delivered'
  }];

  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
            Trusted By Growing Businesses
          </p>

          {/* Mock Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalTech', 'Nexus', 'Vertex', 'Lumina'].map(
              (logo, i) =>
              <div
                key={i}
                className="text-xl md:text-2xl font-bold font-serif tracking-tighter">
                
                  {logo}
                </div>

            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((stat, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.1
            }}
            className="glass-card rounded-2xl p-8 text-center">
            
              <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
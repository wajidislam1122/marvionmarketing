import React from 'react';
import { motion } from 'framer-motion';
export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="glass-card rounded-3xl p-12 md:p-20 border-cyan-500/30">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To <span className="text-gradient">Grow Your Brand?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let Marvion Marketing help you build a stronger online presence and
            generate more leads.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-accent text-center font-semibold text-lg shadow-lg">
              
              Book Free Consultation
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center font-semibold text-lg">
              
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}
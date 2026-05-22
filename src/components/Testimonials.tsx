import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon, StarIcon } from 'lucide-react';
export function Testimonials() {
  const reviews = [
  {
    quote:
    'Professional service with excellent communication and real business growth. Our leads doubled in 2 months.',
    name: 'Sarah Jenkins',
    role: 'Founder, Bloom Boutique',
    initials: 'SJ'
  },
  {
    quote:
    'The reels they create are top-tier. We went viral twice in our first month working with Marvion Marketing.',
    name: 'David Chen',
    role: 'CEO, TechFlow',
    initials: 'DC'
  },
  {
    quote:
    'Finally an agency that understands ROI. The Facebook ads campaigns have been consistently profitable.',
    name: 'Emma Roberts',
    role: 'Marketing Director, FitLife',
    initials: 'ER'
  }];

  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
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
            className="text-3xl md:text-4xl font-bold mb-4">
            
            What Clients <span className="text-gradient">Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) =>
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
            className="glass-card rounded-2xl p-8 relative">
            
              <QuoteIcon
              className="absolute top-6 right-6 text-white/5"
              size={60} />
            

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, idx) =>
              <StarIcon
                key={idx}
                size={16}
                className="fill-cyan-400 text-cyan-400" />

              )}
              </div>

              <p className="text-gray-300 mb-8 relative z-10 leading-relaxed">
                "{review.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
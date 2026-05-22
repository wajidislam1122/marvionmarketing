import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  BarChart3Icon,
  ZapIcon,
  MessageSquareIcon } from
'lucide-react';
export function WhyChooseUs() {
  const reasons = [
  'Creative Marketing Strategy',
  'Fast Communication',
  'Premium Quality Content',
  'Results-Focused Campaigns',
  'Affordable Pricing',
  'Consistent Brand Growth'];

  return (
    <section className="py-24 bg-white/[0.01] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="relative h-[500px] rounded-3xl glass-card p-8 flex flex-col justify-between overflow-hidden">
            
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <ZapIcon className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Fast Execution</h4>
                  <p className="text-sm text-gray-400">
                    Campaigns live in days, not weeks.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 mb-8 ml-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <BarChart3Icon className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Data-Driven</h4>
                    <p className="text-sm text-gray-400">
                      Decisions based on real analytics.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <MessageSquareIcon className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold">24/7 Support</h4>
                  <p className="text-sm text-gray-400">
                    Always here when you need us.
                  </p>
                </div>
              </div>
            </div>

            {/* Abstract shapes */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-white/10 rounded-full" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-white/5 rounded-full" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why Businesses Choose{' '}
              <span className="text-gradient">Marvion Marketing</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10">
              We don't just post content; we build systems that generate
              attention, trust, and revenue for your brand.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, i) =>
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.1
                }}
                className="flex items-start gap-3">
                
                  <CheckCircle2Icon
                  className="text-cyan-400 shrink-0 mt-0.5"
                  size={20} />
                
                  <span className="font-medium text-gray-200">{reason}</span>
                </motion.div>
              )}
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-semibold">
                
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
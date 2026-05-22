import React from 'react';
import { motion } from 'framer-motion';
import {
  PhoneCallIcon,
  SearchIcon,
  SettingsIcon,
  RocketIcon } from
'lucide-react';
export function Process() {
  const steps = [
  {
    num: '01',
    title: 'Discovery Call',
    desc: 'We learn about your business, goals, and current challenges.',
    icon: PhoneCallIcon
  },
  {
    num: '02',
    title: 'Business Analysis',
    desc: 'Deep dive into your industry, competitors, and target audience.',
    icon: SearchIcon
  },
  {
    num: '03',
    title: 'Content & Ads Setup',
    desc: 'Creating the strategy, designing assets, and launching campaigns.',
    icon: SettingsIcon
  },
  {
    num: '04',
    title: 'Growth & Optimization',
    desc: 'Monitoring data, tweaking performance, and scaling results.',
    icon: RocketIcon
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
            
            How We <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
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
              delay: 0.1
            }}
            className="text-gray-400 text-lg max-w-2xl mx-auto">
            
            A proven 4-step framework to take your brand from where it is to
            where it needs to be.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-cyan-500/50 to-blue-500/0 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {steps.map((step, i) =>
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
                delay: i * 0.15
              }}
              className="relative flex flex-col items-center text-center group">
              
                <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center mb-6 relative group-hover:border-cyan-400/50 transition-colors duration-300">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-xs font-bold shadow-lg">
                    {step.num}
                  </div>
                  <step.icon
                  size={32}
                  className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                  {step.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
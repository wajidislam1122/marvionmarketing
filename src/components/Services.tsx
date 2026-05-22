import React from 'react';
import { motion } from 'framer-motion';
import {
  Share2Icon,
  VideoIcon,
  TargetIcon,
  PenToolIcon,
  LightbulbIcon,
  TrendingUpIcon } from
'lucide-react';
export function Services() {
  const services = [
  {
    title: 'Social Media Management',
    description:
    'Professional content creation and page management designed to grow your online presence.',
    icon: Share2Icon
  },
  {
    title: 'Reels & Video Editing',
    description:
    'High-converting short-form videos optimized for engagement and reach.',
    icon: VideoIcon
  },
  {
    title: 'Facebook & Instagram Ads',
    description:
    'Performance-driven advertising campaigns focused on generating real leads and customers.',
    icon: TargetIcon
  },
  {
    title: 'Branding & Design',
    description:
    'Build a modern and professional brand identity that stands out online.',
    icon: PenToolIcon
  },
  {
    title: 'Content Strategy',
    description:
    'Custom content plans tailored to your business goals and target audience.',
    icon: LightbulbIcon
  },
  {
    title: 'Growth Strategy',
    description:
    'Data-driven strategies to scale your business faster through digital marketing.',
    icon: TrendingUpIcon
  }];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            
            Our <span className="text-gradient">Services</span>
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
            className="text-gray-400 text-lg">
            
            Comprehensive digital marketing solutions to elevate your brand and
            drive measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) =>
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
            className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-300">
            
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
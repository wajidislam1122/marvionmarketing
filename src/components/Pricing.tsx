import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
export function Pricing() {
  const plans = [
  {
    name: 'Starter Package',
    price: '25000 PKR',
    description: 'Perfect for small businesses starting out.',
    features: [
    '12 Posts',
    '4 Reels',
    'Captions',
    'Hashtags',
    'Monthly Planning'],

    cta: 'Get Started',
    popular: false
  },
  {
    name: 'Growth Package',
    price: '45000 PKR',
    description: 'Ideal for brands ready to scale and generate leads.',
    features: [
    '20 Posts',
    '8 Reels',
    'Story Designs',
    'Ads Management',
    'Analytics Report'],

    cta: 'Most Popular',
    popular: true
  },
  {
    name: 'Premium Package',
    price: '75000 PKR',
    description: 'Full-service marketing for established enterprises.',
    features: [
    'Full Management',
    'Daily Stories',
    'Advanced Ads',
    'Lead Generation',
    'Strategy Calls'],

    cta: 'Scale Your Brand',
    popular: false
  }];

  return (
    <section id="pricing" className="py-24">
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
            
            Simple Monthly <span className="text-gradient">Packages</span>
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
            
            Transparent pricing with no hidden fees. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
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
            className={`glass-card rounded-3xl p-8 relative ${plan.popular ? 'border-cyan-500/50 bg-white/[0.05] md:scale-105 shadow-[0_0_40px_rgba(6,182,212,0.15)] z-10' : 'border-white/10'}`}>
            
              {plan.popular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-accent px-4 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Most Popular
                </div>
            }

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) =>
              <li
                key={idx}
                className="flex items-center gap-3 text-sm text-gray-300">
                
                    <CheckIcon size={18} className="text-cyan-400 shrink-0" />
                    {feature}
                  </li>
              )}
              </ul>

              <a
              href="#contact"
              className={`block w-full py-4 rounded-xl text-center font-semibold transition-all ${plan.popular ? 'bg-gradient-accent text-white' : 'bg-white/5 hover:bg-white/10 border border-white/10'}`}>
              
                {plan.cta}
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}

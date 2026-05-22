import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, TrendingUpIcon } from 'lucide-react';
export function Portfolio() {
  const cases = [
  {
    title: 'Restaurant Brand Growth',
    metric: '+300% Reach',
    description:
    'Leads generated through Instagram reels and targeted local ads.',
    color: 'from-orange-500/20 to-red-500/20',
    accent: 'text-orange-400'
  },
  {
    title: 'E-commerce Scaling',
    metric: '4.5x ROAS',
    description:
    'Scaled Facebook ads campaigns resulting in record-breaking monthly revenue.',
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'text-cyan-400'
  },
  {
    title: 'Tech Startup Launch',
    metric: '10k+ Followers',
    description:
    'Built organic presence from scratch in 90 days with educational content.',
    color: 'from-purple-500/20 to-pink-500/20',
    accent: 'text-purple-400'
  }];

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
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
              
              Recent Work & <span className="text-gradient">Results</span>
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
              
              See how we've helped businesses transform their online presence
              and drive real revenue.
            </motion.p>
          </div>
          <motion.a
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            href="#contact"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            
            View All Case Studies <ArrowUpRightIcon size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) =>
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
            className="glass-card rounded-2xl overflow-hidden group cursor-pointer">
            
              {/* Mock Thumbnail */}
              <div
              className={`h-48 w-full bg-gradient-to-br ${item.color} relative overflow-hidden flex items-center justify-center`}>
              
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />

                <div className="glass-card px-4 py-2 rounded-full flex items-center gap-2 z-10">
                  <TrendingUpIcon size={18} className={item.accent} />
                  <span className="font-bold">{item.metric}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
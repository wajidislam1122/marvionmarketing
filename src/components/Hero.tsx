import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2Icon,
  PlayIcon,
  TrendingUpIcon,
  UsersIcon } from
'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Grow Your Business With{' '}
              <span className="text-gradient">Strategic Social Media</span>{' '}
              Marketing
            </h1>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We help brands generate more leads, engagement, and sales through
              high-quality content, reels, and paid advertising.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full bg-gradient-accent text-center font-semibold text-lg">
                
                Get Free Audit
              </a>
              <a
                href="#services"
                className="px-8 py-4 rounded-full glass-card hover:bg-white/10 transition-colors text-center font-semibold text-lg">
                
                View Services
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon size={18} className="text-cyan-400" />
                <span>Content Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon size={18} className="text-cyan-400" />
                <span>Reels Editing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon size={18} className="text-cyan-400" />
                <span>Lead Generation Ads</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (CSS/Div based mockup) */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative h-[400px] sm:h-[500px] w-full">
            
            {/* Dashboard Card */}
            <motion.div
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut'
              }}
              className="absolute top-0 left-0 w-4/5 h-64 glass-card rounded-2xl p-6 border-t border-l border-white/20">
              
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-sm text-gray-400 font-medium">
                    Total Reach
                  </h3>
                  <p className="text-2xl font-bold">
                    1.2M{' '}
                    <span className="text-sm text-green-400 font-normal">
                      +24%
                    </span>
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <TrendingUpIcon size={20} className="text-blue-400" />
                </div>
              </div>

              {/* Mock Chart */}
              <div className="h-24 w-full flex items-end gap-2">
                {[40, 70, 45, 90, 65, 100, 85].map((height, i) =>
                <div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-blue-500/20 to-cyan-400/50 rounded-t-sm"
                  style={{
                    height: `${height}%`
                  }} />

                )}
              </div>
            </motion.div>

            {/* Phone/Reel Card */}
            <motion.div
              animate={{
                y: [10, -10, 10]
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
                delay: 1
              }}
              className="absolute bottom-0 right-0 w-3/5 sm:w-1/2 h-80 glass-card rounded-3xl p-2 border-t border-r border-white/20 shadow-2xl bg-[#0A0A0F]/80">
              
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                {/* Mock Video Content */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center pl-1">
                    <PlayIcon size={20} className="text-white" />
                  </div>
                </div>

                {/* Reel UI Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
                    <span className="text-xs font-medium">@marvion</span>
                  </div>
                  <p className="text-xs text-gray-300 line-clamp-2">
                    3 tips to skyrocket your engagement in 2024 🚀 #marketing
                  </p>
                </div>

                {/* Floating Like/Comment Mock */}
                <div className="absolute right-2 bottom-20 flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-500/80" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <div className="w-4 h-3 rounded-sm bg-white/80" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{
                repeat: Infinity,
                duration: 4
              }}
              className="absolute top-1/2 -left-8 glass-card rounded-full py-2 px-4 flex items-center gap-2">
              
              <UsersIcon size={16} className="text-cyan-400" />
              <span className="text-sm font-semibold">1000+ Leads</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}
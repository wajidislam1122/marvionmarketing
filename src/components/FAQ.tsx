import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export function FAQ() {
  const faqs = [
  {
    q: 'How long before results?',
    a: 'Usually within 30–90 days depending on strategy and niche. Organic growth takes time to build momentum, while paid ads can generate leads almost immediately.'
  },
  {
    q: 'Do you provide ads management?',
    a: 'Yes, Facebook and Instagram advertising services are included in our Growth and Premium packages. We handle everything from creative to targeting and optimization.'
  },
  {
    q: 'Do you create reels?',
    a: 'Yes, short-form content creation is one of our core services. We script, edit, and optimize reels to maximize engagement and reach.'
  },
  {
    q: 'Do you work internationally?',
    a: 'Yes, we work with businesses worldwide. Our team is fully remote and equipped to handle international campaigns and different time zones.'
  }];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) =>
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
            className="glass-card rounded-2xl overflow-hidden">
            
              <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
              
                <span className="font-semibold text-lg">{faq.q}</span>
                <ChevronDownIcon
                className={`text-cyan-400 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              
              </button>

              <AnimatePresence>
                {openIndex === i &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
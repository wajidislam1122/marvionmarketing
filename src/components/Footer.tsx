import React from 'react';
import {
  MailIcon,
  MessageCircleIcon,
  GlobeIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center font-bold text-xl">
                M
              </div>
              <span className="text-xl font-bold tracking-tight">
                Marvion <span className="text-gradient">Marketing</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              A premium social media marketing agency helping brands generate
              more leads, engagement, and sales through strategic digital
              marketing.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-cyan-400 transition-colors">
                
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-cyan-400 transition-colors">
                
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-cyan-400 transition-colors">
                
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'Pricing', 'Contact'].map(
                (link) =>
                <li key={link}>
                    <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors">
                    
                      {link}
                    </a>
                  </li>

              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@marvion.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  
                  <MailIcon size={16} />
                  <span>mudassar@marvionmarketing.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  
                  <MessageCircleIcon size={18} />
                  <span>WhatsApp Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  
                  <GlobeIcon size={18} />
                  <span>www.marvionmarketing.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Marvion Marketing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>);

}

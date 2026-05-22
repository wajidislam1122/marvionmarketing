import React from 'react';
export function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border-b border-white/10 py-2 px-4 text-center">
      <p className="text-sm font-medium text-blue-100">
        🚀 Free Social Media Audit Available —{' '}
        <a
          href="#contact"
          className="underline hover:text-white transition-colors">
          
          Book Your Consultation Today
        </a>
      </p>
    </div>);

}
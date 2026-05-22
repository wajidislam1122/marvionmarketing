import React from 'react';
import { MessageCircleIcon } from 'lucide-react';
export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
      aria-label="Chat on WhatsApp">
      
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
      <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-300">
        <MessageCircleIcon size={28} className="text-white" />
      </div>
    </a>);

}
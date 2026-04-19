import React from 'react'
import { MessageCircle, Phone } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      {/* Call Button (Mobile Only) */}
      <a 
        href="tel:+919970936454" 
        className="md:hidden w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce duration-[3000ms]"
      >
        <Phone size={24} />
      </a>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919970936454?text=Hi%20Healix%20Physio,%20I'd%20like%20to%20book%20an%20appointment." 
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform group relative"
      >
        <MessageCircle size={32} />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-medical-slate px-4 py-2 rounded-xl text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
          Chat with us for Booking
        </span>
      </a>
    </div>
  )
}

export default WhatsAppButton

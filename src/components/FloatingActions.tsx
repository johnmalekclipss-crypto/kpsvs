import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenEnquiry }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3">
        <a
          href={BUSINESS_INFO.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-3.5 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          title="Direct WhatsApp enquiry with Sushil Verma"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          
          {/* Hover Expanded Text */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap font-medium text-xs tracking-wide group-hover:max-w-xs transition-all duration-300 pr-1">
            Enquire on WhatsApp
          </span>

          {/* Pulsing Aura */}
          <span className="absolute -inset-1 rounded-full bg-[#25d366] opacity-30 animate-ping -z-10" />
        </a>
      </aside>

      {/* Mobile Sticky Quick Action Bar (Bottom Screen) */}
      <nav aria-label="Mobile Navigation" className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#0e0d14]/95 backdrop-blur-md border-t border-[#d4af37]/30 px-3 py-2 flex items-center justify-around gap-2 shadow-2xl">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#191724] border border-[#d4af37]/35 text-[#f6eedf] text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Call Store</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={BUSINESS_INFO.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#25d366] to-[#1ebea5] text-white text-xs font-semibold shadow-md"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Quick Enquiry Modal Trigger */}
        <button
          onClick={onOpenEnquiry}
          className="flex items-center justify-center px-3 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold"
          title="Quick Enquiry"
        >
          Enquire
        </button>

        {/* Directions */}
        <a
          href={BUSINESS_INFO.social.googleMaps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2.5 rounded-xl bg-[#1a1724] border border-white/10 text-[#d4af37]"
          title="Google Maps"
        >
          <MapPin className="w-4 h-4" />
        </a>
      </nav>
    </>
  );
};

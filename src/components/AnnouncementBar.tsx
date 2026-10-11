import React, { useState } from 'react';
import { Phone, MapPin, X, Sparkles, Check, Edit3 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(BUSINESS_INFO.announcementText);
  const [tempMessage, setTempMessage] = useState(BUSINESS_INFO.announcementText);

  if (!isVisible) return null;

  const handleSave = () => {
    setMessage(tempMessage.trim() || BUSINESS_INFO.announcementText);
    setIsEditing(false);
  };

  return (
    <aside aria-label="Announcement" className="relative bg-gradient-to-r from-[#17141f] via-[#211a2e] to-[#17141f] border-b border-[#d4af37]/30 text-xs sm:text-sm text-[#f5ecd7] py-2 px-3 sm:px-6 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Left: Location & Contact Quick Pill */}
        <div className="hidden lg:flex items-center gap-4 text-[#e0cfb3] text-xs">
          <span className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            Naurangiya, Padrauna (U.P.)
          </span>
          <span className="text-[#d4af37]/40">•</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors font-medium tracking-wide"
            title="Call Kedar Prasad Sushil Verma Sarraf"
          >
            <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
            {BUSINESS_INFO.phone}
          </a>
        </div>

        {/* Center: Main Announcement Message */}
        <div className="flex-1 flex items-center justify-center text-center px-2">
          {isEditing ? (
            <div className="flex items-center gap-2 max-w-lg w-full">
              <input
                type="text"
                value={tempMessage}
                onChange={(e) => setTempMessage(e.target.value)}
                className="w-full bg-[#0d0c10] border border-[#d4af37] px-2.5 py-0.5 rounded text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
                placeholder="Enter announcement text..."
                autoFocus
              />
              <button
                onClick={handleSave}
                className="p-1 text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 rounded transition-colors"
                title="Save changes"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 group">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0 animate-pulse" />
              <span className="font-serif tracking-wide text-[#fdf6e6] font-medium">
                {message}
              </span>
              <button
                onClick={() => {
                  setTempMessage(message);
                  setIsEditing(true);
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 text-[#d4af37]/70 hover:text-[#d4af37]"
                title="Edit announcement message"
              >
                <Edit3 className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-[#f5ebd2] hover:bg-[#d4af37]/25 hover:text-[#fff] transition-all text-xs font-medium"
          >
            Enquire WhatsApp
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 text-[#e0cfb3]/70 hover:text-white hover:bg-white/5 rounded transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};

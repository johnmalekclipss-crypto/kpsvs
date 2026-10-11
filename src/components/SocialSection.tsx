import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export const SocialSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[#0c0a10] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181522] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Stay Connected</span>
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#faf3e3]">
            Follow Our Official Channels
          </h2>

          <p className="text-xs sm:text-sm text-[#b8ad9a] font-light">
            Stay updated with our latest traditional jewellery arrivals, festive greetings, and showroom announcements.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Instagram Card */}
          <a
            href={BUSINESS_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl glass-panel border border-[#d4af37]/25 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] p-0.5 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#121018] rounded-[10px] flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-[#f58529] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#ffd700] transition-colors">
                  Follow Us on Instagram
                </h3>
                <p className="text-xs text-[#a99e8c] font-mono">
                  @jewellersns.kpsvs
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#d4af37]/60 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
          </a>

          {/* Facebook Card */}
          <a
            href={BUSINESS_INFO.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl glass-panel border border-[#d4af37]/25 hover:border-[#d4af37] transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1877f2] p-0.5 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#121018] rounded-[10px] flex items-center justify-center">
                  <FacebookIcon className="w-6 h-6 text-[#1877f2] group-hover:text-white transition-colors" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-[#ffd700] transition-colors">
                  Connect With Us on Facebook
                </h3>
                <p className="text-xs text-[#a99e8c]">
                  Kedar Prasad Sushil Verma Sarraf
                </p>
              </div>
            </div>
            <ExternalLink className="w-5 h-5 text-[#d4af37]/60 group-hover:text-[#d4af37] group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};

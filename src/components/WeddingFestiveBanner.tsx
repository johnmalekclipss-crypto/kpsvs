import React from 'react';
import { MessageCircle, Sparkles, Heart } from 'lucide-react';
import { asset } from '../utils/asset';

interface WeddingFestiveBannerProps {
  onOpenEnquiry: (category?: string) => void;
}

export const WeddingFestiveBanner: React.FC<WeddingFestiveBannerProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-[#0c0a10] border-y border-[#d4af37]/25">
      {/* Background imagery with warm golden radiance */}
      <div className="absolute inset-0 z-0">
        <img
          src={asset('images/festive-banner.jpg')}
          alt="Festive and Bridal Jewellery Moments at KP SVS"
          className="w-full h-full object-cover object-center filter brightness-[0.28] contrast-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a10] via-[#0c0a10]/80 to-[#0c0a10]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1827]/90 border border-[#d4af37]/40 shadow-lg text-xs font-serif text-[#d4af37] tracking-widest uppercase">
          <Heart className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Weddings • Auspicious Milestones • Festivals</span>
        </div>

        {/* Verbatim Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#faf3e3] tracking-tight leading-tight">
          Celebrate Every <br className="hidden sm:inline" />
          <span className="text-gold-gradient italic font-light">Precious Moment</span>
        </h2>

        {/* Verbatim Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-[#d5cbba] max-w-2xl mx-auto font-light leading-relaxed">
          Explore jewellery styles for weddings, festivals, family celebrations, and unforgettable occasions.
        </p>

        <div className="ornament-divider py-2">
          <Sparkles className="w-4 h-4 text-[#d4af37]" />
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => onOpenEnquiry('Wedding & Festive Jewellery')}
            className="group relative inline-flex items-center gap-2.5 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b8860b] text-[#110e05] font-semibold text-sm sm:text-base tracking-wider uppercase shadow-2xl shadow-[#d4af37]/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire About Jewellery</span>
          </button>
        </div>
      </div>
    </section>
  );
};

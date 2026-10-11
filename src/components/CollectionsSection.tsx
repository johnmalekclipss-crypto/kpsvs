import React, { useState } from 'react';
import { MessageCircle, Sparkles, Info, ArrowUpRight } from 'lucide-react';
import { COLLECTIONS, BUSINESS_INFO } from '../data/jewelleryData';
import type { JewelleryCollection } from '../types';

interface CollectionsSectionProps {
  onOpenEnquiry: (collectionName: string) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onOpenEnquiry }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gold' | 'silver' | 'bridal' | 'traditional'>('all');

  const filterTabs = [
    { label: 'All Collections', value: 'all' as const },
    { label: 'Gold Jewellery', value: 'gold' as const },
    { label: 'Bridal Sets', value: 'bridal' as const },
    { label: 'Traditional Art', value: 'traditional' as const },
    { label: 'Silver & Gifts', value: 'silver' as const },
  ];

  const filteredCollections = activeFilter === 'all'
    ? COLLECTIONS
    : COLLECTIONS.filter((col) => col.category === activeFilter);

  return (
    <section id="collections" className="relative py-20 sm:py-28 bg-[#0b0a0f] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1824] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Offerings</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5eb] tracking-tight">
            Jewellery Collections
          </h2>

          <p className="text-sm sm:text-base text-[#c4bba9] max-w-2xl mx-auto font-light leading-relaxed">
            Explore curated styles across pure gold, bridal elegance, fine silver, and timeless traditional ornaments at KP SVS.
          </p>

          <div className="ornament-divider pt-2">
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          </div>

          {/* Illustrative Disclaimer Note Required by Prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#15131c] border border-[#d4af37]/25 text-xs text-[#dcd2be] max-w-xl mx-auto text-left sm:text-center mt-2">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              Images shown are representative illustrative designs. Visit our showroom or contact us directly to explore in-store availability.
            </span>
          </div>
        </div>

        {/* Filter Navigation Tabs - Horizontal Swipeable on Phone */}
        <div className="flex items-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto no-scrollbar py-2 px-1 sm:justify-center sm:flex-wrap -mx-4 sm:mx-0 px-4 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide shrink-0 transition-all duration-300 ${
                activeFilter === tab.value
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0d0c05] font-semibold shadow-lg shadow-[#d4af37]/25 scale-105'
                  : 'bg-[#15131e] text-[#c9bfa9] border border-[#d4af37]/25 hover:border-[#d4af37]/60 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredCollections.map((col: JewelleryCollection) => (
            <article
              key={col.id}
              className="group rounded-2xl overflow-hidden bg-[#121118] border border-[#d4af37]/25 hover:border-[#d4af37]/70 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col justify-between"
            >
              {/* Product Card Image Container */}
              <div className="relative h-56 sm:h-72 overflow-hidden bg-black/40">
                <img
                  src={col.image}
                  alt={`${col.name} - KP SVS Jewellery`}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                  loading="lazy"
                  width="800"
                  height="600"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121118] via-transparent to-transparent pointer-events-none" />

                {/* Subtle Illustrative Badge */}
                <div className="absolute top-3 right-3 glass-panel px-2.5 py-1 rounded-full text-[10px] text-[#f4eedf] tracking-wide font-sans">
                  Representative Design
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#faf3e3] group-hover:text-[#ffd700] transition-colors">
                    {col.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#b8ad9a] font-light leading-relaxed">
                    {col.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {col.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-[#191724] border border-[#d4af37]/20 text-[#dfd4c1]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-[#d4af37]/15 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenEnquiry(col.name)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0e0c05] text-xs font-semibold tracking-wider uppercase hover:shadow-lg hover:shadow-[#d4af37]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Enquire Now</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.whatsappEnquiryUrl(
                      `Namaste KP SVS, I would like to enquire about designs in your "${col.name}" collection.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-[#d4af37]/35 text-[#d4af37] hover:bg-[#d4af37]/15 hover:text-white transition-colors"
                    title={`Direct WhatsApp enquiry for ${col.name}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

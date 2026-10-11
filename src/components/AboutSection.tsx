import React from 'react';
import { UserCheck, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { asset } from '../utils/asset';

interface AboutSectionProps {
  onOpenEnquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#0e0d14] border-t border-[#d4af37]/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1824] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Our Showroom</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5eb] tracking-tight">
            A Name You Can Trust
          </h2>

          <div className="ornament-divider">
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Owner & Showroom Showcase Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Owner Portrait Card */}
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#d4af37]/30 to-[#996515]/30 blur-sm group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-2xl overflow-hidden bg-[#14121b] border border-[#d4af37]/40 shadow-xl">
                <div className="relative h-[340px] sm:h-[380px] overflow-hidden">
                  <img
                    src={asset('images/sushil_verma_owner.jpg')}
                    alt="Sushil Verma - Owner of Kedar Prasad Sushil Verma Sarraf"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    width="1000"
                    height="1200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                  
                  {/* Verified Owner Badge */}
                  <div className="absolute top-4 right-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <UserCheck className="w-4 h-4 text-[#d4af37]" />
                    <span className="text-xs font-medium text-[#f6eedf]">Proprietor</span>
                  </div>

                  {/* Owner Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-serif uppercase tracking-widest text-[#d4af37]">
                      Shop Owner
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                      {BUSINESS_INFO.owner}
                    </h3>
                    <p className="text-xs text-[#d3cbbe] mt-0.5">
                      Kedar Prasad Sushil Verma Sarraf (KP SVS)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Shop Banner Showcase */}
            <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/30 bg-[#14121b] p-3">
              <div className="text-[11px] font-serif text-[#d4af37] uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Official Showroom Signage</span>
                <span className="text-[#a49986]">Naurangiya (U.P.)</span>
              </div>
              <div className="rounded-lg overflow-hidden border border-[#d4af37]/20">
                <img
                  src={asset('images/kpsvs-banner.jpg')}
                  alt="Official Kedar Prasad Sushil Verma Sarraf Banner and Signage"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                  width="1600"
                  height="606"
                />
              </div>
            </div>
          </div>

          {/* Right: Verbatim Introduction Copy & Value Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#d4af37]/30 space-y-6">
              {/* Verbatim Prompt Copy Block */}
              <div className="space-y-4 text-base sm:text-lg text-[#ddd5c5] leading-relaxed">
                <p>
                  Welcome to <strong className="text-[#f7eedc] font-semibold">Kedar Prasad Sushil Verma Sarraf (KP SVS)</strong>, a jewellery destination in Naurangiya, Uttar Pradesh. Under the ownership of <strong className="text-[#d4af37] font-semibold">{BUSINESS_INFO.owner}</strong>, our shop welcomes customers looking to explore beautiful jewellery for everyday wear, celebrations, weddings, and special occasions.
                </p>
                <p>
                  Visit us to discover jewellery styles that complement your traditions and personal taste.
                </p>
              </div>

              {/* Verified Details Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#d4af37]/20">
                <div className="p-4 rounded-xl bg-[#191722] border border-[#d4af37]/20">
                  <span className="text-xs font-serif text-[#d4af37] uppercase tracking-wider block">
                    Showroom Name
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#f8f1e4] mt-1">
                    {BUSINESS_INFO.shopName}
                  </p>
                  <p className="text-xs text-[#a99f8d]">Brand: {BUSINESS_INFO.brandName}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#191722] border border-[#d4af37]/20">
                  <span className="text-xs font-serif text-[#d4af37] uppercase tracking-wider block">
                    Proprietor
                  </span>
                  <p className="font-serif text-sm font-semibold text-[#f8f1e4] mt-1">
                    {BUSINESS_INFO.owner}
                  </p>
                  <p className="text-xs text-[#a99f8d]">Direct Customer Care</p>
                </div>

                <div className="p-4 rounded-xl bg-[#191722] border border-[#d4af37]/20">
                  <span className="text-xs font-serif text-[#d4af37] uppercase tracking-wider block">
                    Categories
                  </span>
                  <p className="text-xs font-medium text-[#f8f1e4] mt-1 leading-snug">
                    {BUSINESS_INFO.category}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#191722] border border-[#d4af37]/20">
                  <span className="text-xs font-serif text-[#d4af37] uppercase tracking-wider block">
                    Showroom Address
                  </span>
                  <p className="text-xs text-[#f8f1e4] mt-1 leading-snug">
                    कप्तानगंज रोड नौरंगिया, निकट शिव मंदिर पोखरा, Padrauna 274305
                  </p>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1b1824] border border-[#d4af37]/50 hover:border-[#d4af37] text-[#f7eee2] text-sm font-medium transition-all"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  Call Sushil Verma: {BUSINESS_INFO.phone}
                </a>

                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-sm font-semibold shadow-md hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask an Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

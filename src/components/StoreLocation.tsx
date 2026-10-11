import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Sparkles, Building, Landmark } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';

export const StoreLocation: React.FC = () => {
  return (
    <section id="store-location" className="relative py-20 sm:py-28 bg-[#0b0a0f] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1824] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Destination</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5eb] tracking-tight">
            Visit KP SVS in Naurangiya
          </h2>

          <p className="text-sm sm:text-base text-[#c4bba9] max-w-2xl mx-auto font-light leading-relaxed">
            We welcome you to visit our jewellery showroom in Naurangiya to explore our collections in person.
          </p>

          <div className="ornament-divider pt-2">
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Card & Direction Triggers */}
          <div className="lg:col-span-6 flex flex-col justify-between p-8 sm:p-10 rounded-2xl glass-panel border border-[#d4af37]/30 space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {BUSINESS_INFO.shopName}
                  </h3>
                  <p className="text-xs text-[#d4af37] uppercase tracking-wider font-serif">
                    Proprietor: {BUSINESS_INFO.owner}
                  </p>
                </div>
              </div>

              {/* Exact Prominent Address Block */}
              <div className="p-6 rounded-xl bg-[#15131e] border border-[#d4af37]/25 space-y-3">
                <span className="text-xs font-serif text-[#d4af37] uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Full Showroom Address
                </span>
                
                <p className="text-base sm:text-lg font-medium text-[#fbf6ec] leading-relaxed">
                  {BUSINESS_INFO.addressHindi}
                </p>

                <p className="text-xs text-[#a99f8f] pt-1">
                  Landmark: Near Shiv Mandir Pokhra, directly opposite Naurangiya Bazar Gate, Kaptanganj Road, Padrauna 274305.
                </p>
              </div>

              {/* Key Landmark Aids */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-lg bg-[#181622] border border-white/5 flex items-center gap-3">
                  <Landmark className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#f5ebd9]">Shiv Mandir Pokhra</h4>
                    <p className="text-[11px] text-[#9a907f]">Adjacent landmark</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-[#181622] border border-white/5 flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[#d4af37] shrink-0" />
                  <div>
                    <h4 className="text-xs font-semibold text-[#f5ebd9]">Naurangiya Bazar Gate</h4>
                    <p className="text-[11px] text-[#9a907f]">Directly opposite</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#d4af37]/20">
              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#110e05] font-semibold text-xs sm:text-sm tracking-wide uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>

              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 rounded-xl bg-[#1b1926] border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f7eee2] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all text-center"
              >
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="py-3.5 px-5 rounded-xl bg-[#181622] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] hover:text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-all"
                title="Call store before visiting"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden glass-panel border border-[#d4af37]/30 flex flex-col">
            <div className="p-4 bg-[#14121b] border-b border-[#d4af37]/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-serif text-[#d4af37]">
                <MapPin className="w-4 h-4" />
                <span>Interactive Location Map • Naurangiya</span>
              </div>
              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
              >
                View Larger Map →
              </a>
            </div>

            <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-[#1a1824]">
              <iframe
                title="Google Maps Location - Kedar Prasad Sushil Verma Sarraf"
                src="https://maps.google.com/maps?q=Naurangiya+Kaptanganj+Road+Padrauna+Uttar+Pradesh+274305&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] sm:min-h-[420px] border-0 filter contrast-[1.05] grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

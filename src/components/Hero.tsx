import React from 'react';
import { ArrowRight, MapPin, Sparkles, Shield, Award, Phone } from 'lucide-react';
import { asset } from '../utils/asset';

interface HeroProps {
  onOpenEnquiry: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0c0b10] py-16 sm:py-24">
      {/* Ambient background glow layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[140px] opacity-70" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#996515]/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Royal Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181622] border border-[#d4af37]/35 shadow-sm text-xs sm:text-sm text-[#f1e4ce]">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span className="font-serif tracking-wider uppercase text-[#e9dcbe]">
                Kedar Prasad Sushil Verma Sarraf
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fbf6ec] leading-[1.15]">
                Elegance That <br />
                <span className="text-gold-gradient italic font-light">Lasts Forever</span>
              </h1>
            </div>

            {/* Subheading verbatim from prompt */}
            <p className="text-sm sm:text-lg md:text-xl text-[#c7beac] max-w-2xl font-light leading-relaxed">
              Discover timeless jewellery and traditional craftsmanship at <span className="text-[#f5ecd7] font-medium">Kedar Prasad Sushil Verma Sarraf</span>, your local jewellery destination in Naurangiya, Uttar Pradesh.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <a
                href="#collections"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b8860b] text-[#0f0c05] font-semibold text-sm sm:text-base tracking-wide shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>Explore Collections</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#store-location"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#15131c] border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f7eee1] hover:text-[#ffd700] hover:bg-[#1f1c29] text-sm sm:text-base font-medium transition-all duration-300 shadow-md"
              >
                <MapPin className="w-4 h-4 text-[#d4af37]" />
                <span>Visit Our Store</span>
              </a>
            </div>

            {/* Trust Highlights Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-6 pt-4 sm:pt-6 border-t border-[#d4af37]/15 w-full">
              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-serif text-[#f2e7d3] font-semibold">Gold & Silver</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#a89f8c]">Traditional Art</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-serif text-[#f2e7d3] font-semibold">Naurangiya, UP</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#a89f8c]">Local Showroom</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-left">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-[11px] sm:text-xs font-serif text-[#f2e7d3] font-semibold">Direct Enquiries</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#a89f8c]">+91 96702 28927</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Frame Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Golden Outer Decorative Frame */}
              <div className="absolute -inset-2 sm:-inset-3 rounded-2xl bg-gradient-to-tr from-[#d4af37]/40 via-transparent to-[#d4af37]/30 blur-sm pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4af37]/50 shadow-2xl shadow-black/80 bg-[#121118]">
                {/* LCP Candidate Image with fetchpriority="high" per modern-web-guidance */}
                <img
                  src={asset('images/hero-luxury-necklace.jpg')}
                  alt="Traditional Indian Gold Jewellery Collection at KP SVS"
                  className="w-full h-[320px] sm:h-[460px] lg:h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                  width="1200"
                  height="1400"
                />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Floating Showcase Badges */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-medium text-[#f6eedf] tracking-wide">
                    Showroom Open • Naurangiya
                  </span>
                </div>

                <div className="absolute bottom-4 inset-x-4 glass-panel rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#d4af37] font-serif uppercase tracking-widest">
                      Curated For Special Occasions
                    </p>
                    <h3 className="text-sm font-semibold text-white">
                      Bridal & Festive Craftsmanship
                    </h3>
                  </div>
                  <button
                    onClick={() => onOpenEnquiry('Bridal Jewellery')}
                    className="px-3.5 py-1.5 rounded-lg bg-[#d4af37] text-black text-xs font-semibold hover:bg-[#ffeaa7] transition-colors shadow-sm"
                  >
                    Enquire
                  </button>
                </div>
              </div>

              {/* Decorative Corner Filigrees */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#d4af37]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#d4af37]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

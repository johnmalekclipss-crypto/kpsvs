import React from 'react';
import { MapPin, Sparkles, Users, Gift, MessageSquareText, Compass } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/jewelleryData';

export const WhyChooseUs: React.FC = () => {
  // Map icon names to Lucide icon components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#d4af37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#d4af37]" />;
      case 'Gift':
        return <Gift className="w-6 h-6 text-[#d4af37]" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-[#d4af37]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#d4af37]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-20 sm:py-28 bg-[#0b0a0e] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1824] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Commitment</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5eb] tracking-tight">
            Why Choose KP SVS?
          </h2>

          <p className="text-sm sm:text-base text-[#c4bba9] max-w-2xl mx-auto font-light leading-relaxed">
            Experience welcoming hospitality, personalized assistance, and enduring jewellery crafted for life’s most cherished celebrations.
          </p>

          <div className="ornament-divider pt-2">
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 rounded-2xl bg-[#13111b] border border-[#d4af37]/20 hover:border-[#d4af37]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c1926] border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37]/15 transition-colors">
                  {renderIcon(item.iconName)}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#f7efe2] group-hover:text-[#ffd700] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#b8ad9b] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center text-xs text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors">
                <span>KP SVS Naurangiya</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

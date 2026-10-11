import React from 'react';
import { Phone, MapPin, Navigation, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { asset } from '../utils/asset';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Showroom Location', href: '#store-location' },
    { name: 'Contact & Enquiry', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#07060a] border-t border-[#d4af37]/25 text-[#cec3af] pt-16 pb-24 lg:pb-12 overflow-hidden">
      {/* Top subtle gold divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#d4af37]/15">
          {/* Brand & Proprietor Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#d4af37] p-0.5 bg-black shadow-md">
                <img
                  src={asset('images/kpsvs-monogram.jpg')}
                  alt="KP SVS Logo"
                  className="w-full h-full object-cover rounded-full"
                  width="48"
                  height="48"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-gold-gradient">
                  {BUSINESS_INFO.brandName}
                </h3>
                <p className="text-xs text-[#a99e8c] tracking-wider uppercase font-sans">
                  {BUSINESS_INFO.shopName}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#b8ad9a] font-light leading-relaxed max-w-sm">
              Traditional and modern Indian jewellery showroom located in Naurangiya, Padrauna, Uttar Pradesh. Specializing in gold, silver, bridal, and festive jewellery.
            </p>

            <div className="p-3 rounded-xl bg-[#121019] border border-[#d4af37]/20 text-xs text-[#dfd5c4] space-y-1">
              <p><strong className="text-[#d4af37]">Proprietor:</strong> {BUSINESS_INFO.owner}</p>
              <p className="text-[11px] text-[#9c917f]">Direct customer care & showroom consultation</p>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#181524] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Follow KP SVS on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#181524] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Connect with KP SVS on Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href={BUSINESS_INFO.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#181524] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] hover:text-white flex items-center justify-center transition-colors"
                aria-label="View KP SVS on Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#d4af37]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 py-0.5"
                  >
                    <span className="text-[#d4af37]/40 text-xs">›</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Direct (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-widest text-[#d4af37]">
              Showroom Contact
            </h4>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-[#d4af37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {BUSINESS_INFO.addressHindi}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#d4af37] hover:text-white transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Google Maps Directions →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Dynamic Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#958a77]">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-center sm:text-left">
            <span>© {currentYear} {BUSINESS_INFO.shopName}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Proprietor: {BUSINESS_INFO.owner}</span>
          </div>

          {/* Prompt Required Tagline */}
          <div className="font-serif italic text-[#d4af37] tracking-wider text-center">
            "{BUSINESS_INFO.tagline}"
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#d4af37] hover:text-white transition-colors p-1"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

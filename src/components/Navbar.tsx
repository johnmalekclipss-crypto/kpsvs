import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/jewelleryData';
import { asset } from '../utils/asset';

interface NavbarProps {
  onOpenEnquiry: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Collections', href: '#collections' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#0d0c11]/92 backdrop-blur-md border-b border-[#d4af37]/25 shadow-xl shadow-black/40 py-2.5 sm:py-3'
          : 'bg-[#0e0d13]/80 backdrop-blur-sm border-b border-[#d4af37]/15 py-3.5 sm:py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#d4af37]/60 p-0.5 bg-black shadow-md shadow-[#d4af37]/10 group-hover:border-[#d4af37] transition-all">
              <img
                src={asset('images/kpsvs-monogram.jpg')}
                alt="KPSVS Royal Monogram"
                className="w-full h-full object-cover rounded-full"
                width="48"
                height="48"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-gold-gradient group-hover:brightness-110 transition-all">
                {BUSINESS_INFO.brandName}
              </span>
              <span className="text-[10px] sm:text-xs text-[#c9bfa8] tracking-widest uppercase font-sans">
                Sarraf • Naurangiya
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#d8d0c2] hover:text-[#d4af37] transition-colors relative py-1 text-sm tracking-wide font-sans after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#d4af37] after:to-[#f3e5ab] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-[#e8dfcf] hover:text-[#d4af37] border border-[#d4af37]/20 hover:border-[#d4af37]/50 rounded-full transition-all"
              title="Call our showroom"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Call Us</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b8860b] text-[#120f06] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4" />
                Enquire Now
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-3 py-1.5 rounded-full bg-[#d4af37] text-black font-semibold text-xs tracking-wide shadow-sm"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d4af37] hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#100f16]/98 backdrop-blur-xl border-b border-[#d4af37]/30 shadow-2xl py-6 px-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <nav className="flex flex-col gap-4 text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#ece3d3] hover:text-[#d4af37] py-2 border-b border-white/5 font-serif text-lg tracking-wide flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-[#d4af37]/40 text-xs">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#d4af37]/40 text-[#f6eedf] bg-[#1a1722] hover:bg-[#221f2d] text-sm font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                Call +91 96702 28927
              </a>
              <a
                href={BUSINESS_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black text-sm font-semibold tracking-wide shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Jewellery Enquiry
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

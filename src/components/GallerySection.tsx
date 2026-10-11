import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MessageCircle, Info } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_INFO } from '../data/jewelleryData';
import type { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeLightbox = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSelectedItem(null);
  };

  const nextImage = () => {
    const nextIdx = (selectedIndex + 1) % GALLERY_ITEMS.length;
    setSelectedIndex(nextIdx);
    setSelectedItem(GALLERY_ITEMS[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (selectedIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedIndex(prevIdx);
    setSelectedItem(GALLERY_ITEMS[prevIdx]);
  };

  // Keyboard navigation & light dismiss fallback per modern-web-guidance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, selectedIndex]);

  // Click outside backdrop fallback for dialog per modern-web-guidance
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!dialogRef.current) return;
    const rect = dialogRef.current.getBoundingClientRect();
    const isInside =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInside) {
      closeLightbox();
    }
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#0e0d14] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1824] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5eb] tracking-tight">
            Featured Jewellery Gallery
          </h2>

          <p className="text-sm sm:text-base text-[#c4bba9] max-w-2xl mx-auto font-light leading-relaxed">
            A glimpse into the artistry, detailing, and brilliance of traditional ornaments. Click any piece to examine closely.
          </p>

          <div className="ornament-divider pt-2">
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          </div>
        </div>

        {/* Gallery Grid - 2 columns on Phone, 4 on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {GALLERY_ITEMS.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, index)}
              className="group relative h-48 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-[#d4af37]/25 hover:border-[#d4af37]/80 bg-[#14121b] shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#d4af37]/15"
              tabIndex={0}
              role="button"
              aria-label={`View enlarged view of ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(item, index);
                }
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width="600"
                height="600"
              />

              {/* Shimmer overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Enlarge Icon Badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full glass-panel flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 text-[#d4af37]">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Image Details on bottom */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-5 space-y-0.5 sm:space-y-1">
                <span className="text-[9px] sm:text-[11px] font-serif uppercase tracking-widest text-[#d4af37] block">
                  {item.category}
                </span>
                <h3 className="font-serif text-xs sm:text-base font-bold text-[#faf3e5] leading-snug line-clamp-1 sm:line-clamp-none">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#c9bea9] line-clamp-2 hidden sm:block pt-1 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog with modern closedby="any" and custom fallback */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        closedby="any"
        aria-labelledby="dialog-title"
        className="fixed inset-0 m-auto p-0 bg-transparent backdrop:bg-black/90 backdrop:backdrop-blur-md max-w-4xl w-[94vw] rounded-2xl border border-[#d4af37]/40 shadow-2xl focus:outline-none z-50 overflow-hidden"
      >
        {selectedItem && (
          <div className="relative bg-[#100f16] text-[#faf3e5] rounded-2xl overflow-hidden flex flex-col md:flex-row max-h-[88vh] overflow-y-auto">
            {/* Image Preview Container */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] md:min-h-[460px]">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[60vh] md:max-h-[75vh] w-auto max-w-full object-contain p-2"
              />

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Counter Indicator */}
              <div className="absolute bottom-3 left-3 glass-panel px-3 py-1 rounded-full text-xs text-[#d4af37] font-mono">
                {selectedIndex + 1} / {GALLERY_ITEMS.length}
              </div>
            </div>

            {/* Info and Actions Sidebar */}
            <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#d4af37]/25 space-y-6 bg-[#13111b]">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-serif uppercase tracking-widest text-[#d4af37]">
                    {selectedItem.category}
                  </span>
                  <button
                    onClick={closeLightbox}
                    className="p-1 rounded-full text-[#c9bea9] hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Close dialog"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 id="dialog-title" className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {selectedItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#c5b9a5] leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="p-3 rounded-xl bg-[#1a1724] border border-[#d4af37]/20 text-[11px] text-[#b3a895] flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    Illustrative jewellery photography. Visit KP SVS Naurangiya to discover available showroom pieces.
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="space-y-3 pt-4 border-t border-[#d4af37]/20">
                <a
                  href={BUSINESS_INFO.whatsappEnquiryUrl(
                    `Namaste KP SVS, I saw "${selectedItem.title}" in your website gallery and would like to enquire about similar pieces.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <button
                  onClick={closeLightbox}
                  className="w-full py-2.5 px-4 rounded-xl border border-white/15 text-xs text-[#d3c8b4] hover:bg-white/5 transition-colors"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
};

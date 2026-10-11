import React, { useEffect, useRef, useState } from 'react';
import { X, MessageCircle, Phone, Sparkles, Shield } from 'lucide-react';
import { BUSINESS_INFO, COLLECTIONS } from '../data/jewelleryData';

interface EnquiryModalProps {
  isOpen: boolean;
  initialCategory?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, initialCategory, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'Gold Jewellery');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Click backdrop fallback per modern-web-guidance
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (!dialogRef.current) return;
    const rect = dialogRef.current.getBoundingClientRect();
    const isInside =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;
    if (!isInside) {
      onClose();
    }
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Namaste Sushil Verma Ji (KP SVS),\n\nI would like to enquire about: *${selectedCategory}*.\nName: ${customerName.trim() || 'Visitor'}\nPhone: ${customerPhone.trim() || 'Not specified'}\nNote: ${notes.trim() || 'Please share available designs & showroom options.'}\n\nEnquiry from KPSVS Website.`;
    
    const url = `https://wa.me/919670228927?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleDialogClick}
      closedby="any"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 m-auto p-0 bg-transparent backdrop:bg-black/80 backdrop:backdrop-blur-md max-w-lg w-[92vw] rounded-2xl border border-[#d4af37]/40 shadow-2xl focus:outline-none z-50 overflow-hidden"
    >
      <div className="bg-[#100f16] text-[#f8f2e4] p-6 sm:p-8 rounded-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 id="enquiry-modal-title" className="font-serif text-lg sm:text-xl font-bold text-white">
                Jewellery Enquiry
              </h3>
              <p className="text-[11px] text-[#baa994]">
                Kedar Prasad Sushil Verma Sarraf • Naurangiya
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-[#c9bea9] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close enquiry modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSend} className="space-y-4">
          <div>
            <label className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1">
              Interested Collection
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#171520] border border-[#d4af37]/30 text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            >
              {COLLECTIONS.map((c) => (
                <option key={c.id} value={c.name} className="bg-[#171520]">
                  {c.name}
                </option>
              ))}
              <option value="General Showroom Enquiry" className="bg-[#171520]">
                General Showroom Enquiry
              </option>
              <option value="Wedding & Festive Sets" className="bg-[#171520]">
                Wedding & Festive Sets
              </option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1">
              Your Name (Optional)
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Ankit Verma"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#171520] border border-[#d4af37]/30 text-white placeholder-[#786f61] text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="e.g. 96702 28927"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#171520] border border-[#d4af37]/30 text-white placeholder-[#786f61] text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            />
          </div>

          <div>
            <label className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1">
              Specific Requirements
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us what style, budget range, or occasion you are considering..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#171520] border border-[#d4af37]/30 text-white placeholder-[#786f61] text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none"
            />
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#9b907f] pt-1">
            <Shield className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span>Connects directly to shop WhatsApp with Sushil Verma.</span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="py-3 px-4 rounded-xl border border-[#d4af37]/40 text-[#d4af37] hover:bg-[#d4af37]/15 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </form>
      </div>
    </dialog>
  );
};

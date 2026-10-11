import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, User, Shield, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_INFO, COLLECTIONS } from '../data/jewelleryData';
import type { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    category: 'Gold Jewellery',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedStatus, setSubmittedStatus] = useState<boolean>(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your name';
    }
    const cleanPhone = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or question';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // As required by the guidelines: "If no backend is available, make WhatsApp enquiry the primary working alternative"
    // We compose the structured WhatsApp message with the verified details and trigger WhatsApp
    const enquiryText = `Namaste Sushil Verma Ji (KP SVS),\n\nMy Name: ${formData.fullName.trim()}\nPhone: ${formData.phoneNumber.trim()}\nJewellery Category: ${formData.category}\nMessage: ${formData.message.trim()}\n\nI would like to enquire about jewellery availability at your Naurangiya showroom.`;

    const waUrl = `https://wa.me/919670228927?text=${encodeURIComponent(enquiryText)}`;
    
    setSubmittedStatus(true);
    // Open WhatsApp safely
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0e0d14] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b1824] border border-[#d4af37]/30 text-xs font-serif text-[#d4af37] tracking-wider uppercase">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect Directly</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#faf5eb] tracking-tight">
            Contact & Enquiry
          </h2>

          <p className="text-sm sm:text-base text-[#c4bba9] max-w-2xl mx-auto font-light leading-relaxed">
            Reach out to Sushil Verma and the KP SVS team for enquiries, custom requests, or showroom guidance.
          </p>

          <div className="ornament-divider pt-2">
            <span className="w-2 h-2 rotate-45 bg-[#d4af37]" />
          </div>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Business Information & Quick Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl glass-panel border border-[#d4af37]/30 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                Showroom Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-serif uppercase tracking-wider text-[#d4af37] block">
                      Proprietor / Owner
                    </span>
                    <p className="font-semibold text-base text-[#faf3e5] mt-0.5">
                      {BUSINESS_INFO.owner}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-serif uppercase tracking-wider text-[#d4af37] block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-semibold text-base text-[#faf3e5] hover:text-[#d4af37] transition-colors mt-0.5 block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-[#a39886]">
                      Alternative: {BUSINESS_INFO.secondaryPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center shrink-0 text-[#d4af37]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-serif uppercase tracking-wider text-[#d4af37] block">
                      Showroom Location
                    </span>
                    <p className="font-medium text-sm text-[#f6eedf] mt-0.5">
                      {BUSINESS_INFO.locationShort}
                    </p>
                    <p className="text-xs text-[#a39886] mt-1 leading-relaxed">
                      {BUSINESS_INFO.addressHindi}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Buttons */}
              <div className="pt-4 border-t border-[#d4af37]/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex-1 py-3.5 px-4 rounded-xl bg-[#191724] border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f7eee2] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-[#0d0c05] text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-[#d4af37]/30 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Send a Jewellery Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#baa994] mt-1">
                  Fill in your details below to connect directly with our showroom via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1.5">
                    Customer Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Ramesh Verma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#13111b] border ${
                      errors.fullName ? 'border-red-500' : 'border-[#d4af37]/30'
                    } text-white placeholder-[#786f61] text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1.5">
                    Phone Number (10 digits) *
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="e.g. 96702 28927"
                    className={`w-full px-4 py-3 rounded-xl bg-[#13111b] border ${
                      errors.phoneNumber ? 'border-red-500' : 'border-[#d4af37]/30'
                    } text-white placeholder-[#786f61] text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all`}
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Jewellery Category */}
                <div>
                  <label htmlFor="category" className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1.5">
                    Jewellery Category *
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#13111b] border border-[#d4af37]/30 text-white text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
                  >
                    {COLLECTIONS.map((c) => (
                      <option key={c.id} value={c.name} className="bg-[#13111b] text-white">
                        {c.name}
                      </option>
                    ))}
                    <option value="Custom Order / In-Store Visit" className="bg-[#13111b] text-white">
                      Custom Order / In-Store Visit
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-serif uppercase tracking-wider text-[#d4af37] mb-1.5">
                    Your Enquiry / Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Please let us know what style, occasion, or jewellery design you are looking for..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#13111b] border ${
                      errors.message ? 'border-red-500' : 'border-[#d4af37]/30'
                    } text-white placeholder-[#786f61] text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Privacy-conscious note */}
                <div className="flex items-center gap-2 text-xs text-[#a99e8c] pt-1">
                  <Shield className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>
                    Privacy note: Your phone number is strictly used to address your jewellery enquiry. No spam or unsolicited promotions.
                  </span>
                </div>

                {/* Submit Trigger */}
                <div className="pt-3">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b8860b] text-[#110e05] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#d4af37]/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry via WhatsApp</span>
                  </button>
                </div>

                {submittedStatus && (
                  <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Enquiry prepared! WhatsApp has been opened to connect you directly with Sushil Verma.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

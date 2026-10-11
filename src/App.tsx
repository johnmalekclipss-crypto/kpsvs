import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CollectionsSection } from './components/CollectionsSection';
import { GallerySection } from './components/GallerySection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WeddingFestiveBanner } from './components/WeddingFestiveBanner';
import { StoreLocation } from './components/StoreLocation';
import { ContactSection } from './components/ContactSection';
import { SocialSection } from './components/SocialSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { EnquiryModal } from './components/EnquiryModal';

export const App: React.FC = () => {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Gold Jewellery');

  const handleOpenEnquiry = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4efe6] flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-[#ffd700]">
      {/* 1. Slim Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Sticky Luxury Navigation Header */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. About the Shop & Proprietor Sushil Verma */}
        <AboutSection onOpenEnquiry={() => handleOpenEnquiry('General Showroom Consultation')} />

        {/* 5. Jewellery Collections */}
        <CollectionsSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Featured Jewellery Gallery with Lightbox */}
        <GallerySection />

        {/* 7. Why Choose KP SVS */}
        <WhyChooseUs />

        {/* 8. Wedding & Festive Collection Banner */}
        <WeddingFestiveBanner onOpenEnquiry={handleOpenEnquiry} />

        {/* 9. Visit Our Store in Naurangiya */}
        <StoreLocation />

        {/* 10. Contact & WhatsApp Enquiry Section */}
        <ContactSection />

        {/* 11. Official Social Media Channels */}
        <SocialSection />
      </main>

      {/* 12. Complete Showroom Footer */}
      <Footer />

      {/* 13. Conversion Floating Actions (WhatsApp & Mobile Quick Bar) */}
      <FloatingActions onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 14. Quick Enquiry Lightbox Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        initialCategory={selectedCategory}
        onClose={handleCloseEnquiry}
      />
    </div>
  );
};

export default App;

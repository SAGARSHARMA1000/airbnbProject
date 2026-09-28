'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { StickySubNavbar } from '@/components/StickySubNavbar';
import { ListingHeader } from '@/components/ListingHeader';
import { PhotoGallery } from '@/components/PhotoGallery';
import { PhotoTourModal } from '@/components/PhotoTourModal';
import { HostQuickInfo } from '@/components/HostQuickInfo';
import { GuestFavoriteBanner } from '@/components/GuestFavoriteBanner';
import { HighlightsSection } from '@/components/HighlightsSection';
import { TranslationBanner } from '@/components/TranslationBanner';
import { DescriptionSection } from '@/components/DescriptionSection';
import { SleepingArrangements } from '@/components/SleepingArrangements';
import { AmenitiesSection } from '@/components/AmenitiesSection';
import { DatePickerSection } from '@/components/DatePickerSection';
import { StickyReservationCard } from '@/components/StickyReservationCard';
import { ReviewsSection } from '@/components/ReviewsSection';
import { LocationMap } from '@/components/LocationMap';
import { HostProfileSection } from '@/components/HostProfileSection';
import { ThingsToKnowSection } from '@/components/ThingsToKnowSection';
import { SimilarListingsSection } from '@/components/SimilarListingsSection';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import { LISTING_DATA } from '@/data/listingData';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, CheckCircle2, X, Copy, Check, MessageSquare, Mail, Share2 } from 'lucide-react';

export default function ListingPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxInitialIndex, setLightboxInitialIndex] = useState(0);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showSaveToast, setShowSaveToast] = useState(false);

  // Sub-navbar scroll detection and active tab tracking
  const [showStickySubNav, setShowStickySubNav] = useState(false);
  const [activeSection, setActiveSection] = useState<'photos' | 'amenities' | 'reviews' | 'location'>('photos');

  // Shared Date Range State: Defaults to Oct 18, 2026 - Oct 23, 2026 (5 nights) matching screenshot
  const [checkIn, setCheckIn] = useState<Date | null>(new Date(2026, 9, 18));
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(2026, 9, 23));

  // Scroll listener for sticky sub-navbar and section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      // Show sub-navbar after passing photo gallery
      const galleryEl = document.getElementById('photos-section');
      const galleryBottom = galleryEl ? galleryEl.offsetTop + galleryEl.offsetHeight - 80 : 500;
      setShowStickySubNav(scrollPos > galleryBottom);

      // Section detection
      const locationEl = document.getElementById('location-section');
      const reviewsEl = document.getElementById('reviews-section');
      const amenitiesEl = document.getElementById('amenities-section');

      const triggerOffset = 180;
      if (locationEl && scrollPos >= locationEl.offsetTop - triggerOffset) {
        setActiveSection('location');
      } else if (reviewsEl && scrollPos >= reviewsEl.offsetTop - triggerOffset) {
        setActiveSection('reviews');
      } else if (amenitiesEl && scrollPos >= amenitiesEl.offsetTop - triggerOffset) {
        setActiveSection('amenities');
      } else {
        setActiveSection('photos');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenLightbox = (index: number = 0) => {
    setLightboxInitialIndex(index);
    setIsLightboxOpen(true);
  };

  const handleToggleSave = () => {
    const nextSavedState = !isSaved;
    setIsSaved(nextSavedState);
    setShowSaveToast(true);
    setTimeout(() => {
      setShowSaveToast(false);
    }, 3000);
  };

  // Automatically dismiss the share prompt after a short delay.
  // Re-opening it clears the previous timer and starts a fresh one.
  useEffect(() => {
    if (!isShareModalOpen) return;

    const timeoutId = window.setTimeout(() => {
      setIsShareModalOpen(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [isShareModalOpen]);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubNavNavigate = (section: 'photos' | 'amenities' | 'reviews' | 'location') => {
    setActiveSection(section);
    if (section === 'photos') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetId = `${section}-section`;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#FF385C]/20 selection:text-[#FF385C]">
      {/* Top Main Navbar */}
      <Navbar savedCount={isSaved ? 1 : 0} />

      {/* Sticky Sub-Navbar that smoothly appears when scrolling past PhotoGallery */}
      <StickySubNavbar
        listing={LISTING_DATA}
        activeSection={activeSection}
        onNavigate={handleSubNavNavigate}
        onReserve={() => scrollToSection('calendar-section')}
        isVisible={showStickySubNav}
        nights={5}
        totalPrice={28499}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-280 mx-auto px-6 md:px-10 w-full pb-20 md:pb-12">
        {/* Listing Header: Title, Share/Save */}
        <ListingHeader
          listing={LISTING_DATA}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onOpenShareModal={() => setIsShareModalOpen(true)}
        />

        {/* 5-Photo Responsive Hero Mosaic */}
        <PhotoGallery
          photos={LISTING_DATA.photos}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8">
          {/* Left Main Content Column */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-0">
            {/* Host Quick Info (Entire rental unit in Candolim, India + Host brief) */}
            <HostQuickInfo
              listing={LISTING_DATA}
              onHostClick={() => scrollToSection('host-section')}
            />

            {/* Guest Favorite Banner */}
            {LISTING_DATA.rating.isGuestFavorite && (
              <GuestFavoriteBanner
                overallRating={LISTING_DATA.rating.overall}
                reviewCount={LISTING_DATA.rating.reviewCount}
              />
            )}

            {/* Property Highlights */}
            <HighlightsSection />

            {/* Translation Notice Banner */}
            <TranslationBanner />

            {/* Property Description */}
            <DescriptionSection
              summary={LISTING_DATA.description.summary}
            />

            {/* Sleeping Arrangements (2 Photo Cards: Bedroom & Living room) */}
            <SleepingArrangements bedrooms={LISTING_DATA.bedrooms} />

            {/* Amenities Grid & Modal */}
            <AmenitiesSection amenities={LISTING_DATA.amenities} />

            {/* Interactive Calendar / Date Picker */}
            <div id="calendar-section" className="scroll-mt-24">
              <DatePickerSection
                checkIn={checkIn}
                checkOut={checkOut}
                onSelectDates={(inDate, outDate) => {
                  setCheckIn(inDate);
                  setCheckOut(outDate);
                }}
              />
            </div>
          </div>

          {/* Right Column: Sticky Floating Reservation Widget & Promo Banner */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-4">
            <StickyReservationCard
              listing={LISTING_DATA}
              checkIn={checkIn}
              checkOut={checkOut}
              onOpenCalendar={() => scrollToSection('calendar-section')}
              onScrollToReviews={() => scrollToSection('reviews-section')}
            />
          </div>
        </div>

        {/* Reviews Section with Giant Laurel Wreath & Category Score Bars */}
        <ReviewsSection listing={LISTING_DATA} />

        {/* Interactive Location Map */}
        <LocationMap listing={LISTING_DATA} />

        {/* Detailed Host Profile Section */}
        <HostProfileSection listing={LISTING_DATA} />

        {/* Things to Know Policies Section */}
        <ThingsToKnowSection
          listing={LISTING_DATA}
          onAddDatesClick={() => scrollToSection('calendar-section')}
        />

        {/* More Places to Stay (Similar Listings) */}
        <SimilarListingsSection listings={LISTING_DATA.similarListings} />
      </main>

      {/* Mobile Fixed Bottom Booking Bar */}
      <MobileBottomBar
        pricePerNight={LISTING_DATA.pricing.basePricePerNight}
        checkIn={checkIn}
        checkOut={checkOut}
        onReserve={() => scrollToSection('calendar-section')}
      />

      {/* Global Lightbox Gallery Modal */}
      <PhotoTourModal
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        photos={LISTING_DATA.photos}
        initialIndex={lightboxInitialIndex}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Save to Wishlist Toast positioned at Bottom Center of Screen */}
      <AnimatePresence>
        {showSaveToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%', scale: 0.95 }}
            animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: 20, x: '-50%', scale: 0.95 }}
            transition={{ type: 'spring', damping: 26, stiffness: 350 }}
            className="fixed bottom-8 left-1/2 z-50 bg-gray-900 text-white px-6 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-white/10"
          >
            {isSaved ? (
              <>
                <span className="text-sm font-semibold">Saved to Wishlist</span>
              </>
            ) : (
              <>
                <span className="text-sm font-semibold">Removed from Wishlist</span>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Bottom-Center Text-Only Share Bar */}
      <AnimatePresence>
        {isShareModalOpen && (
          <>
            {/* Bottom-Center Text-Only Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: '-50%', scale: 0.95 }}
              animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
              exit={{ opacity: 0, y: 20, x: '-50%', scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              role="status"
              aria-live="polite"
              className="fixed bottom-8 left-1/2 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-white/10 flex items-center gap-4 text-sm font-medium"
            >
              <button
                type="button"
                aria-label="Share options"
                className="hover:text-gray-300 transition cursor-pointer font-semibold"
              >
                Share options
              </button>

              
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}


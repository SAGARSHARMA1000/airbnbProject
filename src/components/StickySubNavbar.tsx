'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListingDetails } from '@/data/listingData';

interface StickySubNavbarProps {
  listing: ListingDetails;
  activeSection: 'photos' | 'amenities' | 'reviews' | 'location';
  onNavigate: (section: 'photos' | 'amenities' | 'reviews' | 'location') => void;
  onReserve: () => void;
  isVisible: boolean;
  nights?: number;
  totalPrice?: number;
}

export const StickySubNavbar: React.FC<StickySubNavbarProps> = ({
  listing,
  activeSection,
  onNavigate,
  isVisible,
  nights = 5,
  totalPrice = 28499,
}) => {
  const navTabs = [
    { id: 'photos', label: 'Photos' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
  ] as const;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -70, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-xs"
        >
          <div className="max-w-[1120px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
            {/* Left Nav Links */}
            <nav className="flex items-center gap-6 sm:gap-8 h-full">
              {navTabs.map((tab) => {
                const isActive = activeSection === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onNavigate(tab.id)}
                    className={`relative h-full flex items-center text-sm font-semibold transition cursor-pointer ${
                      isActive
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSubNavTab"
                        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gray-900 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Quick Reserve Widget */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex flex-col text-right">
                <div className="flex items-baseline justify-end gap-1">
                  <span className="font-bold text-gray-900 text-base">
                    {listing.pricing.currencySymbol}
                    {totalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-600 font-normal">
                    for {nights} nights
                  </span>
                </div>
                <div className="flex items-center justify-end gap-1 text-xs font-semibold text-gray-900">
                  <Star className="w-3 h-3 fill-gray-900 text-gray-900" />
                  <span>{listing.rating.overall.toFixed(2)}</span>
                  <span className="text-gray-400 font-normal">·</span>
                  <span className="text-gray-500 font-normal underline">
                    {listing.rating.reviewCount} reviews
                  </span>
                </div>
              </div>

              {/* Reserve Button with sleek black film hover overlay */}
              <button
                className="relative group overflow-hidden bg-[#FF385C] text-white font-semibold text-sm sm:text-base py-3 px-6 sm:px-8 rounded-3xl transition duration-200 cursor-pointer shadow-sm active:scale-98"
              >
                {/* Black film appear on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 pointer-events-none" />
                <span className="relative z-10">Reserve</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

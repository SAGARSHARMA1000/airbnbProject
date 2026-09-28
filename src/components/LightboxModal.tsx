'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Share, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoItem } from '@/data/listingData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  initialIndex?: number;
  isSaved?: boolean;
  onToggleSave?: () => void;
  onOpenShare?: () => void;
}

const CATEGORIES = [
  'All',
  'Infinity Pool & Caldera',
  'Living Room',
  'Bedrooms',
  'Kitchen & Dining',
  'Terrace',
] as const;

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  photos,
  initialIndex = 0,
  isSaved = false,
  onToggleSave,
  onOpenShare,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);

  // Sync initial index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialIndex]);

  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter((p) => p.category === selectedCategory);

  // Ensure current index stays in range of filtered photos
  const safeIndex = currentIndex < filteredPhotos.length ? currentIndex : 0;
  const currentPhoto = filteredPhotos[safeIndex] || photos[0];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : filteredPhotos.length - 1));
  }, [filteredPhotos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < filteredPhotos.length - 1 ? prev + 1 : 0));
  }, [filteredPhotos.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Photo Gallery Lightbox"
        className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col justify-between"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 z-20">
          <button
            onClick={onClose}
            aria-label="Close photo gallery"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/10 transition text-sm font-semibold cursor-pointer"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Close</span>
          </button>

          {/* Photo Counter */}
          <div className="text-sm font-medium tracking-wide text-white/90">
            {safeIndex + 1} / {filteredPhotos.length}
          </div>

          {/* Share / Save Actions */}
          <div className="flex items-center gap-2">
            {onOpenShare && (
              <button
                onClick={onOpenShare}
                className="p-2 rounded-full hover:bg-white/10 transition text-white"
                aria-label="Share photo"
              >
                <Share className="w-4 h-4" />
              </button>
            )}
            {onToggleSave && (
              <button
                onClick={onToggleSave}
                className="p-2 rounded-full hover:bg-white/10 transition text-white"
                aria-label="Save to wishlist"
              >
                <Heart
                  className={`w-4 h-4 ${
                    isSaved ? 'fill-[#FF385C] text-[#FF385C]' : ''
                  }`}
                />
              </button>
            )}
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="px-6 py-2 overflow-x-auto flex items-center justify-center gap-2 border-b border-white/5 scrollbar-none z-20">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-1 rounded-full text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Center Image Stage */}
        <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition shadow-lg cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Active Image */}
          <div className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center">
            {currentPhoto && (
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentPhoto.url}
                  alt={currentPhoto.alt}
                  fill
                  sizes="(max-width: 1280px) 90vw, 1200px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition shadow-lg cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption & Thumbnail Strip */}
        <div className="px-6 py-4 border-t border-white/10 bg-black/60 backdrop-blur-md z-20">
          {currentPhoto && (
            <p className="text-center text-sm text-white/80 max-w-2xl mx-auto mb-3 font-light truncate">
              {currentPhoto.caption}
            </p>
          )}

          {/* Thumbnails */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-4xl mx-auto scrollbar-thin">
            {filteredPhotos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-14 h-10 rounded-md overflow-hidden shrink-0 transition cursor-pointer ${
                  idx === safeIndex
                    ? 'ring-2 ring-white scale-105 opacity-100'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

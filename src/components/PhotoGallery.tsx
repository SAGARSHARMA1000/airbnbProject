'use client';

import React from 'react';
import Image from 'next/image';
import { LayoutGrid } from 'lucide-react';
import { PhotoItem } from '@/data/listingData';

interface PhotoGalleryProps {
  photos: PhotoItem[];
  onOpenLightbox: (initialIndex?: number) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  onOpenLightbox,
}) => {
  const displayPhotos = photos.slice(0, 5);

  const handlePhotoKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onOpenLightbox(index);
    }
  };

  return (
    <section id="photos-section" className="relative rounded-2xl overflow-hidden mt-4 scroll-mt-24">
      {/* Desktop & Tablet 5-Photo Grid */}
      <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-[420px] lg:h-[480px]">
        {/* Main Large Hero Image (Left 2 columns, spans 2 rows) */}
        {displayPhotos[0] && (
          <div
            onClick={() => onOpenLightbox(0)}
            onKeyDown={(event) => handlePhotoKeyDown(event, 0)}
            role="button"
            tabIndex={0}
            aria-label="Open first photo in photo tour"
            className="col-span-2 row-span-2 relative overflow-hidden cursor-pointer group bg-gray-100"
          >
            <Image
              src={displayPhotos[0].url}
              alt={displayPhotos[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 50vw, 600px"
              className="object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}

        {/* Top Right 1 */}
        {displayPhotos[1] && (
          <div
            onClick={() => onOpenLightbox(1)}
            onKeyDown={(event) => handlePhotoKeyDown(event, 1)}
            role="button"
            tabIndex={0}
            aria-label="Open second photo in photo tour"
            className="col-span-1 row-span-1 relative overflow-hidden cursor-pointer group bg-gray-100"
          >
            <Image
              src={displayPhotos[1].url}
              alt={displayPhotos[1].alt}
              fill
              sizes="(max-width: 1024px) 25vw, 300px"
              className="object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}

        {/* Top Right 2 */}
        {displayPhotos[2] && (
          <div
            onClick={() => onOpenLightbox(2)}
            onKeyDown={(event) => handlePhotoKeyDown(event, 2)}
            role="button"
            tabIndex={0}
            aria-label="Open third photo in photo tour"
            className="col-span-1 row-span-1 relative overflow-hidden cursor-pointer group bg-gray-100"
          >
            <Image
              src={displayPhotos[2].url}
              alt={displayPhotos[2].alt}
              fill
              sizes="(max-width: 1024px) 25vw, 300px"
              className="object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}

        {/* Bottom Right 1 */}
        {displayPhotos[3] && (
          <div
            onClick={() => onOpenLightbox(3)}
            onKeyDown={(event) => handlePhotoKeyDown(event, 3)}
            role="button"
            tabIndex={0}
            aria-label="Open fourth photo in photo tour"
            className="col-span-1 row-span-1 relative overflow-hidden cursor-pointer group bg-gray-100"
          >
            <Image
              src={displayPhotos[3].url}
              alt={displayPhotos[3].alt}
              fill
              sizes="(max-width: 1024px) 25vw, 300px"
              className="object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}

        {/* Bottom Right 2 */}
        {displayPhotos[4] && (
          <div
            onClick={() => onOpenLightbox(4)}
            onKeyDown={(event) => handlePhotoKeyDown(event, 4)}
            role="button"
            tabIndex={0}
            aria-label="Open fifth photo in photo tour"
            className="col-span-1 row-span-1 relative overflow-hidden cursor-pointer group bg-gray-100"
          >
            <Image
              src={displayPhotos[4].url}
              alt={displayPhotos[4].alt}
              fill
              sizes="(max-width: 1024px) 25vw, 300px"
              className="object-cover group-hover:scale-105 group-hover:brightness-95 transition-all duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        )}
      </div>

      {/* Mobile Single Hero with Tap */}
      <div
        onClick={() => onOpenLightbox(0)}
        onKeyDown={(event) => handlePhotoKeyDown(event, 0)}
        role="button"
        tabIndex={0}
        aria-label="Open photo tour"
        className="md:hidden relative h-72 w-full cursor-pointer bg-gray-100"
      >
        {displayPhotos[0] && (
          <Image
            src={displayPhotos[0].url}
            alt={displayPhotos[0].alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      {/* Floating "Show all photos" Button */}
      <button
        onClick={() => onOpenLightbox(0)}
        className="absolute bottom-4 right-4 z-10 flex items-center gap-2 bg-white/95 backdrop-blur-xs text-gray-900 px-3.5 py-1.5 rounded-lg border border-gray-900/80 hover:bg-white text-sm font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
      >
        <LayoutGrid className="w-4 h-4" />
        <span>Show all {photos.length} photos</span>
      </button>
    </section>
  );
};

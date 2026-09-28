'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, Heart, Share } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { PhotoItem } from '@/data/listingData';

interface PhotoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: PhotoItem[];
  initialIndex?: number;
  isSaved?: boolean;
  onToggleSave?: () => void;
  onOpenShare?: () => void;
}

interface PhotoGroup {
  category: string;
  photos: PhotoItem[];
}

// Temporary gallery content keeps each tour section visually populated while
// the remaining listing photos are being finalized.
const MOCK_PHOTOS: PhotoItem[] = [
  {
    id: 'mock-living-room-1',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
    alt: 'Additional living room view',
    category: 'Living room 1',
    caption: 'Additional living room view',
  },
  {
    id: 'mock-kitchen-1',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85&sat=-5',
    alt: 'Additional full kitchen view',
    category: 'Full kitchen',
    caption: 'Additional full kitchen view',
  },
  {
    id: 'mock-kitchen-2',
    url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=85',
    alt: 'Kitchen counter and dining area',
    category: 'Full kitchen',
    caption: 'Kitchen counter and dining area',
  },
  {
    id: 'mock-bedroom-1',
    url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
    alt: 'Additional bedroom view',
    category: 'Bedroom',
    caption: 'Additional bedroom view',
  },
  {
    id: 'mock-jacuzzi-1',
    url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=85',
    alt: 'Additional rooftop terrace view',
    category: 'Additional photos',
    caption: 'Additional rooftop terrace view',
  },
  {
    id: 'mock-living-room-2',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Additional living room seating area',
    category: 'Living room 2',
    caption: 'Additional living room seating area',
  },
  {
    id: 'mock-bathroom-1',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    alt: 'Full bathroom view',
    category: 'Full bathroom',
    caption: 'Full bathroom view',
  },
  {
    id: 'mock-gym-1',
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    alt: 'Gym and fitness area',
    category: 'Gym',
    caption: 'Gym and fitness area',
  },
  {
    id: 'mock-exterior-1',
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
    alt: 'Exterior of the property',
    category: 'Exterior',
    caption: 'Exterior of the property',
  },
  {
    id: 'mock-pool-1',
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
    alt: 'Outdoor pool area',
    category: 'Pool',
    caption: 'Outdoor pool area',
  },
  {
    id: 'mock-additional-1',
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    alt: 'Additional property photo',
    category: 'Additional photos',
    caption: 'Additional property photo',
  },
];

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  onClose,
  photos,
  initialIndex = 0,
  isSaved = false,
  onToggleSave,
  onOpenShare,
}) => {
  const tourPhotos = useMemo(() => {
    const sectionNames: PhotoItem['category'][] = [
      'Living room 1',
      'Living room 2',
      'Additional photos',
      'Bedroom',
      'Exterior',
      'Full bathroom',
      'Full kitchen',
      'Pool',
    ];

    const mappedPhotos = photos.map((photo, index) => ({
      ...photo,
      category: sectionNames[index] ?? photo.category,
    }));

    return [...mappedPhotos, ...MOCK_PHOTOS];
  }, [photos]);
  const groups = useMemo<PhotoGroup[]>(() => {
    const grouped = new Map<string, PhotoItem[]>();

    tourPhotos.forEach((photo) => {
      grouped.set(photo.category, [...(grouped.get(photo.category) ?? []), photo]);
    });

    return Array.from(grouped, ([category, groupedPhotos]) => ({
      category,
      photos: groupedPhotos,
    }));
  }, [tourPhotos]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset';
      return;
    }

    document.body.style.overflow = 'hidden';
    const initialPhoto = tourPhotos[initialIndex] ?? tourPhotos[0];
    setSelectedCategory(initialPhoto?.category ?? groups[0]?.category ?? '');

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [groups, initialIndex, isOpen, photos, tourPhotos]);

  useEffect(() => {
    if (!isOpen || !selectedCategory) return;
    sectionRefs.current[selectedCategory]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [isOpen, selectedCategory]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Photo tour"
        className="fixed inset-0 z-50 overflow-y-auto bg-white text-gray-900"
      >
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white px-5 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo tour"
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <ArrowLeft className="h-6 w-6" strokeWidth={1.75} />
          </button>

          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Photo tour</h2>

          <div className="flex items-center gap-2">
            {onOpenShare && (
              <button
                type="button"
                onClick={onOpenShare}
                aria-label="Share photo tour"
                className="rounded-full p-2 transition hover:bg-gray-100"
              >
                <Share className="h-5 w-5" strokeWidth={1.75} />
              </button>
            )}
            {onToggleSave && (
              <button
                type="button"
                onClick={onToggleSave}
                aria-label="Save photo tour"
                className="rounded-full p-2 transition hover:bg-gray-100"
              >
                <Heart
                  className={`h-5 w-5 ${isSaved ? 'fill-[#FF385C] text-[#FF385C]' : ''}`}
                  strokeWidth={1.75}
                />
              </button>
            )}
          </div>
        </header>

        <nav
          aria-label="Photo tour categories"
          className="border-b border-gray-100 bg-white px-5 py-5 sm:px-8"
        >
          <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto pb-1 scrollbar-none">
            {groups.map((group) => (
              <button
                key={group.category}
                type="button"
                onClick={() => setSelectedCategory(group.category)}
                className={`group w-40 shrink-0 text-left sm:w-44 ${
                  selectedCategory === group.category ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                <span className="relative block h-24 overflow-hidden rounded-xl bg-gray-100 sm:h-28">
                  <Image
                    src={group.photos[0].url}
                    alt=""
                    fill
                    sizes="176px"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </span>
                <span className="mt-2 block text-base font-medium">{group.category}</span>
              </button>
            ))}
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
          {groups.map((group) => (
            <section
              key={group.category}
              ref={(element) => {
                sectionRefs.current[group.category] = element;
              }}
              className="grid scroll-mt-24 grid-cols-1 gap-8 border-b border-gray-100 py-12 last:border-b-0 md:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.8fr)] md:gap-12 md:py-16"
            >
              <div className="self-start">
                <h3 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {group.category}
                </h3>
                <p className="mt-3 text-base text-gray-500">
                  {group.photos.length} {group.photos.length === 1 ? 'photo' : 'photos'}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.photos.map((photo, photoIndex) => (
                  <div
                    key={photo.id}
                    className={`group relative overflow-hidden rounded-xl bg-gray-100 ${
                      photoIndex === 0 && group.photos.length > 1
                        ? 'aspect-[16/9] sm:col-span-2'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <Image
                      src={photo.url}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 720px"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      priority={group.category === selectedCategory && photoIndex === 0}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </AnimatePresence>
  );
};

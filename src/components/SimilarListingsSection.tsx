'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SimilarListing } from '@/data/listingData';

interface SimilarListingItem {
  id: string;
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const ALL_SIMILAR_LISTINGS: SimilarListingItem[][] = [
  // Page 1
  [
    {
      id: 'sim-1',
      title: 'Beautiful Studio with a view to die for',
      price: 23600,
      rating: 4.91,
      imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-2',
      title: 'NAQAB - 1bhk with private pool',
      price: 42218,
      rating: 4.95,
      imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-3',
      title: 'Greentique Luxury Flat with plunge pool, Calangute',
      price: 44506,
      rating: 4.94,
      imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-4',
      title: 'The Tropical Studio | 5 mins to Beach',
      price: 22824,
      rating: 4.96,
      imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-5',
      title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute',
      price: 39942,
      rating: 4.95,
      imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80',
    },
  ],
  // Page 2
  [
    {
      id: 'sim-6',
      title: 'Azure 1BHK Beachside Jacuzzi Suite',
      price: 26400,
      rating: 4.92,
      imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-7',
      title: 'Villa Solarium with Rooftop Infinity Pool',
      price: 48500,
      rating: 4.98,
      imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-8',
      title: 'Boho Chic Garden Studio near Baga',
      price: 19800,
      rating: 4.88,
      imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-9',
      title: 'Serene Palm Haven Penthouse Candolim',
      price: 34200,
      rating: 4.93,
      imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'sim-10',
      title: 'Casa Candolim Luxe with Private Plunge',
      price: 41000,
      rating: 4.97,
      imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80',
    },
  ],
];

interface SimilarListingsSectionProps {
  listings?: SimilarListing[];
}

export const SimilarListingsSection: React.FC<SimilarListingsSectionProps> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = ALL_SIMILAR_LISTINGS.length;

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  return (
    <section className="py-12 border-b border-gray-200">
      {/* Header with Title and Page Indicator + Navigation Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
          More stays nearby
        </h3>

        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-normal text-gray-600">
            {currentPage + 1} / {totalPages}
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-white text-gray-800"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer bg-white text-gray-800"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Horizontal Sliding Container Track */}
      <div className="relative overflow-hidden w-full">
        <motion.div
          className="flex w-full"
          animate={{ x: `-${currentPage * 100}%` }}
          transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.8 }}
        >
          {ALL_SIMILAR_LISTINGS.map((pageListings, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {pageListings.map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 mb-3">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 200px"
                      className="object-cover group-hover:scale-100 transition duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 mb-1 group-hover:text-black">
                    {item.title}
                  </h4>

                  {/* Price & Rating Row */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-900">
                    <span className="font-semibold">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span>★</span>
                    <span className="font-normal text-gray-800">
                      {item.rating.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



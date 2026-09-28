'use client';

import React, { useState } from 'react';
import { Search, Plus, Minus, ChevronRight } from 'lucide-react';
import { ListingDetails } from '@/data/listingData';

interface LocationMapProps {
  listing: ListingDetails;
}

export const LocationMap: React.FC<LocationMapProps> = ({ listing }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="location-section" className="py-12 border-b border-gray-200 scroll-mt-24">
      {/* Header */}
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">
        Where you&apos;ll be
      </h3>
      <p className="text-sm sm:text-base text-gray-800 font-normal mb-6">
        Candolim, Goa, India
      </p>

      {/* Map Container */}
      <div className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden border border-gray-200/90 shadow-2xs bg-[#e2ece0]">
        {/* Top-Left Search / Explore Action Pill */}
        <button
          onClick={() => alert('Search nearby places in Candolim')}
          className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-50 transition cursor-pointer"
          aria-label="Search map"
        >
          <Search className="w-4 h-4 stroke-[2]" />
        </button>

        {/* Top-Right Zoom Controls */}
        <div className="absolute top-4 right-4 z-20 flex flex-col bg-white rounded-xl shadow-md border border-gray-200 divide-y divide-gray-200 overflow-hidden">
          <button
            onClick={() => setZoomLevel((z) => Math.min(2, z + 0.2))}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-700 transition cursor-pointer"
            aria-label="Zoom in"
          >
            <Plus className="w-4 h-4 stroke-[2]" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 text-gray-700 transition cursor-pointer"
            aria-label="Zoom out"
          >
            <Minus className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Stylized Vector Map Graphics */}
        <div
          className="absolute inset-0 transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1000 600"
          >
            {/* Background Land Surface */}
            <rect width="1000" height="600" fill="#e4ede2" />

            {/* Grid Lines */}
            <g stroke="#d5e3d2" strokeWidth="1">
              <line x1="100" y1="0" x2="100" y2="600" />
              <line x1="200" y1="0" x2="200" y2="600" />
              <line x1="300" y1="0" x2="300" y2="600" />
              <line x1="400" y1="0" x2="400" y2="600" />
              <line x1="500" y1="0" x2="500" y2="600" />
              <line x1="600" y1="0" x2="600" y2="600" />
              <line x1="700" y1="0" x2="700" y2="600" />
              <line x1="800" y1="0" x2="800" y2="600" />
              <line x1="900" y1="0" x2="900" y2="600" />

              <line x1="0" y1="100" x2="1000" y2="100" />
              <line x1="0" y1="200" x2="1000" y2="200" />
              <line x1="0" y1="300" x2="1000" y2="300" />
              <line x1="0" y1="400" x2="1000" y2="400" />
              <line x1="0" y1="500" x2="1000" y2="500" />
            </g>

            {/* Coastal Arabian Sea on Left */}
            <path
              d="M0,0 L400,0 L200,600 L0,600 Z"
              fill="#9ec8e8"
            />

            {/* Soft Green Area Highlight Circles */}
            <circle cx="290" cy="220" r="55" fill="#cde2cc" opacity="0.9" />
            <circle cx="670" cy="300" r="60" fill="#cde2cc" opacity="0.9" />
            <circle cx="820" cy="180" r="45" fill="#cde2cc" opacity="0.7" />
          </svg>

          {/* Central Property Icon Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            {/* Soft Shadow Halo */}
            <div className="w-14 h-14 rounded-full bg-black/10 flex items-center justify-center p-1">
              <div className="w-11 h-11 rounded-full bg-[#181818] border-2 border-white flex items-center justify-center text-white shadow-xl">
                {/* House/Apartment Gate SVG Icon */}
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtext */}
      <p className="text-xs sm:text-sm text-gray-700 mt-4 mb-8 font-normal">
        Exact location will be provided after booking.
      </p>

      {/* Neighbourhood Highlights */}
      <div className="space-y-2">
        <h4 className="text-base sm:text-lg font-semibold text-gray-900">
          Neighbourhood highlights
        </h4>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal max-w-3xl">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button
          className="inline-flex items-center gap-1 font-semibold text-sm sm:text-base text-gray-900 underline hover:text-black cursor-pointer pt-1"
        >
          <span>Show more</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

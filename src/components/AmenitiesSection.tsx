'use client';

import React, { useState } from 'react';
import { AmenityItem } from '@/data/listingData';
import { DynamicIcon } from '@/components/DynamicIcon';
import { AmenitiesModal } from '@/components/AmenitiesModal';

interface AmenitiesSectionProps {
  amenities: AmenityItem[];
}

const unavailableAmenityNames = new Set([
  'Carbon monoxide alarm',
  'Smoke alarm',
]);

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featured = amenities.filter((a) => a.isFeatured).slice(0, 10);

  return (
    <>
      <div id="amenities-section" className="py-8 border-b border-gray-200 scroll-mt-24">
        <h3 className="text-xl sm:text-[22px] font-semibold text-gray-900 mb-6">
          What this place offers
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {featured.map((amenity, idx) => {
            const isUnavailable = unavailableAmenityNames.has(amenity.name);

            return (
              <div key={idx} className="flex items-center gap-4">
                <div
                  className={`relative shrink-0 ${
                    isUnavailable ? 'text-[#717171]' : 'text-gray-800'
                  }`}
                >
                  <DynamicIcon name={amenity.iconName} className="w-6 h-6 stroke-[1.5]" />
                  {isUnavailable && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 right-0 top-1/2 h-px bg-[#717171]"
                    />
                  )}
                </div>
                <span
                  className={`text-base font-normal ${
                    isUnavailable
                      ? 'text-[#717171] line-through decoration-[#717171]'
                      : 'text-gray-800'
                  }`}
                >
                  {amenity.name}
                </span>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 border border-gray-900 hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-xl transition cursor-pointer text-sm shadow-2xs"
        >
          Show all {amenities.length} amenities
        </button>
      </div>

      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amenities={amenities}
      />
    </>
  );
};

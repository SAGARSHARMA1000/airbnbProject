'use client';

import React from 'react';
import Image from 'next/image';
import { BedroomItem } from '@/data/listingData';

interface SleepingArrangementsProps {
  bedrooms: BedroomItem[];
}

export const SleepingArrangements: React.FC<SleepingArrangementsProps> = ({
  bedrooms,
}) => {
  return (
    <div className="py-8 border-b border-gray-200">
      <h3 className="text-xl sm:text-[22px] font-semibold text-gray-900 mb-6">
        Where you&apos;ll sleep
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
        {bedrooms.map((bed) => (
          <div
            key={bed.id}
            className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition bg-white"
          >
            {/* Room Photo */}
            <div className="relative h-44 w-full bg-gray-100">
              {bed.imageUrl && (
                <Image
                  src={bed.imageUrl}
                  alt={bed.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover"
                />
              )}
            </div>

            {/* Room Info */}
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 text-base mb-0.5">
                {bed.title}
              </h4>
              <p className="text-xs text-gray-600 font-normal">{bed.bedType}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

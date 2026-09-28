'use client';

import React from 'react';
import { ListingDetails } from '@/data/listingData';

interface HostQuickInfoProps {
  listing: ListingDetails;
  onHostClick?: () => void;
}

export const HostQuickInfo: React.FC<HostQuickInfoProps> = ({
  listing,
  onHostClick,
}) => {
  return (
    <div className="py-6 border-b border-gray-200">
      {/* Property Overview */}
      <h2 className="text-xl sm:text-[22px] font-semibold text-gray-900 leading-snug">
        Entire serviced apartment in Candolim, India
      </h2>
      <p className="text-sm text-gray-700 mt-1 font-normal">
        3 guests · 1 bedroom · 1 bed · 1 bathroom
      </p>

      {/* Host Brief Row */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100">
        <button
          onClick={onHostClick}
          className="relative group cursor-pointer shrink-0"
          aria-label="View Mirashya Homes profile"
        >
          {/* Mirashya Dark Green Circular Logo Avatar */}
          <div className="w-12 h-12 rounded-full bg-[#16382c] border border-gray-200 flex flex-col items-center justify-center text-[#d4af37] px-1 shadow-xs">
            <span className="text-[7px] tracking-widest font-serif uppercase font-bold text-center leading-none text-emerald-100">
              MIRASHYA
            </span>
          </div>
        </button>

        <div>
          <h3 className="font-semibold text-gray-900 text-base leading-snug">
            Hosted by Mirashya Homes
          </h3>
          <p className="text-xs text-gray-500 font-normal">
            2 years hosting
          </p>
        </div>
      </div>
    </div>
  );
};

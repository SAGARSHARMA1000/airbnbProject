'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface GuestFavoriteBannerProps {
  overallRating: number;
  reviewCount: number;
}

export const GuestFavoriteBanner: React.FC<GuestFavoriteBannerProps> = ({
  overallRating,
  reviewCount,
}) => {
  return (
    <div className="py-6 border-b border-gray-200">
      <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
        {/* Left Badge with Laurel Wreath Graphic & Text */}
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center text-gray-900 shrink-0">
            {/* Left Wreath Wing */}
            <svg className="w-8 h-10 text-gray-900" viewBox="0 0 24 32" fill="currentColor">
              <path d="M12 2C8 6 4 12 4 18c0 5 3 10 8 12-2-4-2-9 0-14 2-5 5-9 8-14-3 0-5-1-8-2z" />
              <circle cx="8" cy="10" r="1.5" />
              <circle cx="6" cy="16" r="1.5" />
              <circle cx="8" cy="22" r="1.5" />
            </svg>
            <div className="text-center px-1 font-bold text-xs leading-tight text-gray-900">
              <span className="block">Guest</span>
              <span className="block">favourite</span>
            </div>
            {/* Right Wreath Wing */}
            <svg className="w-8 h-10 text-gray-900 transform scale-x-[-1]" viewBox="0 0 24 32" fill="currentColor">
              <path d="M12 2C8 6 4 12 4 18c0 5 3 10 8 12-2-4-2-9 0-14 2-5 5-9 8-14-3 0-5-1-8-2z" />
              <circle cx="8" cy="10" r="1.5" />
              <circle cx="6" cy="16" r="1.5" />
              <circle cx="8" cy="22" r="1.5" />
            </svg>
          </div>

          <p className="text-sm font-normal text-gray-900 leading-snug">
            One of the most loved homes on Airbnb, according to guests
          </p>
        </div>

        {/* Right Rating Summary */}
        <div className="flex items-center gap-6 sm:border-l sm:border-gray-200 sm:pl-6 text-center shrink-0">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {overallRating.toFixed(2)}
            </div>
            <div className="flex items-center justify-center gap-0.5 text-gray-900 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gray-900 text-gray-900" />
              ))}
            </div>
          </div>

          <div className="border-l border-gray-200 pl-6 text-center">
            <div className="text-lg font-bold text-gray-900">{reviewCount}</div>
            <span className="text-xs text-gray-900 underline font-normal">Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

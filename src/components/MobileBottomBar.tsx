'use client';

import React from 'react';
import { format } from 'date-fns';
import { Sparkles } from 'lucide-react';

interface MobileBottomBarProps {
  pricePerNight: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onReserve: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  pricePerNight,
  checkIn,
  checkOut,
  onReserve,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 py-3 px-6 md:hidden flex items-center justify-between shadow-2xl">
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-base font-bold text-gray-900">${pricePerNight}</span>
          <span className="text-xs text-gray-500 font-normal">night</span>
        </div>
        <p className="text-[11px] text-gray-600 underline font-medium">
          {checkIn && checkOut
            ? `${format(checkIn, 'MMM d')} – ${format(checkOut, 'MMM d')}`
            : 'Oct 12 – 17'}
        </p>
      </div>

      <button
        onClick={onReserve}
        className="bg-gradient-to-r from-[#FF385C] via-[#E00B41] to-[#D70466] text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-md flex items-center gap-1.5 active:scale-95 transition"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Reserve</span>
      </button>
    </div>
  );
};

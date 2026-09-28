'use client';

import React from 'react';
import { Share, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ListingDetails } from '@/data/listingData';

interface ListingHeaderProps {
  listing: ListingDetails;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenShareModal: () => void;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({
  listing,
  isSaved,
  onToggleSave,
  onOpenShareModal,
}) => {
  return (
    <section className="pt-6 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-[26px] font-bold text-gray-900 tracking-normal leading-tight">
        {listing.title}
      </h1>

      {/* Share & Save Actions on Top Right */}
      <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
        <button
          type="button"
          onClick={onOpenShareModal}
          aria-label="Open share options"
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition text-gray-800 font-medium text-sm underline cursor-pointer"
        >
          <Share className="w-4 h-4" />
          <span>Share</span>
        </button>

        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={onToggleSave}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition text-gray-800 font-medium text-sm underline cursor-pointer"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isSaved
                ? 'fill-[#FF385C] text-[#FF385C]'
                : 'text-gray-800 hover:text-[#FF385C]'
            }`}
          />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </motion.button>
      </div>
    </section>
  );
};



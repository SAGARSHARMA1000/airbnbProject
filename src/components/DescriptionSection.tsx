'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DescriptionSectionProps {
  summary?: string;
  theSpace?: string;
  guestAccess?: string;
  otherDetails?: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  summary,
  theSpace,
  guestAccess,
  otherDetails,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedText =
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés,";

  const fullSummary =
    summary ||
    "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and vibrant North Goa nightlife.";

  return (
    <div className="py-6 border-b border-gray-200">
      <div className="text-base text-gray-800 leading-relaxed font-normal">
        {!isExpanded ? (
          <p className="text-gray-900">{truncatedText}</p>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <p className="text-gray-900 font-medium">{fullSummary}</p>

              {theSpace && (
                <div className="pt-2">
                  <h4 className="font-semibold text-gray-900 mb-1">The space</h4>
                  <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                    {theSpace}
                  </p>
                </div>
              )}

              {guestAccess && (
                <div className="pt-2">
                  <h4 className="font-semibold text-gray-900 mb-1">Guest access</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {guestAccess}
                  </p>
                </div>
              )}

              {otherDetails && (
                <div className="pt-2">
                  <h4 className="font-semibold text-gray-900 mb-1">Other things to note</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {otherDetails}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="mt-4 inline-flex items-center gap-1 font-semibold text-gray-900 underline hover:text-black cursor-pointer text-sm"
      >
        <span>{isExpanded ? 'Show less' : 'Show more'}</span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};


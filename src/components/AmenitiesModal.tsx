'use client';

import React, { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AmenityItem } from '@/data/listingData';
import { DynamicIcon } from '@/components/DynamicIcon';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  amenities: AmenityItem[];
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  isOpen,
  onClose,
  amenities,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Group amenities by category
  const groupedAmenities = useMemo(() => {
    const filtered = searchQuery.trim()
      ? amenities.filter((a) =>
          a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (a.description && a.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : amenities;

    const map = new Map<string, AmenityItem[]>();
    filtered.forEach((item) => {
      const cat = item.category || 'General';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(item);
    });

    // Sort categories alphabetically A-Z
    const sortedEntries = Array.from(map.entries()).sort(([catA], [catB]) =>
      catA.localeCompare(catB)
    );

    return new Map(sortedEntries);
  }, [amenities, searchQuery]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="All amenities modal"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">What this place offers</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="Close amenities modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div> 

          {/* Amenities List */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-8 divide-y divide-gray-100">
            {groupedAmenities.size === 0 ? (
              <p className="text-sm text-gray-500 py-8 text-center">
                No amenities found matching &quot;{searchQuery}&quot;
              </p>
            ) : (
              Array.from(groupedAmenities.entries()).map(([category, items], idx) => (
                <div key={category} className={idx === 0 ? '' : 'pt-6'}>
                  <h4 className="font-semibold text-gray-900 text-base mb-4">
                    {category}
                  </h4>
                  <div className="space-y-4">
                    {items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3.5 pb-2">
                        <div
                          className={`relative pt-0.5 shrink-0 ${
                            item.name === 'Carbon monoxide alarm' || item.name === 'Smoke alarm'
                              ? 'text-[#717171]'
                              : 'text-gray-700'
                          }`}
                        >
                          <DynamicIcon name={item.iconName} className="w-5 h-5 stroke-[1.75]" />
                          {(item.name === 'Carbon monoxide alarm' || item.name === 'Smoke alarm') && (
                            <span
                              aria-hidden="true"
                              className="absolute left-0 right-0 top-1/2 h-px bg-[#717171]"
                            />
                          )}
                        </div>
                        <div>
                          <p
                            className={`text-sm font-medium leading-snug ${
                              item.name === 'Carbon monoxide alarm' || item.name === 'Smoke alarm'
                                ? 'text-[#717171] line-through decoration-[#717171]'
                                : 'text-gray-900'
                            }`}
                          >
                            {item.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

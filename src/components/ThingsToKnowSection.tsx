'use client';

import React, { useState } from 'react';
import { CalendarX, Key, Shield, X } from 'lucide-react';
import { ListingDetails } from '@/data/listingData';

interface ThingsToKnowSectionProps {
  listing: ListingDetails;
  onAddDatesClick?: () => void;
}

export const ThingsToKnowSection: React.FC<ThingsToKnowSectionProps> = () => {
  const [activeModal, setActiveModal] = useState<'cancellation' | 'rules' | 'safety' | null>(null);

  return (
    <>
      <section className="py-12 border-b border-gray-200">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
          Things to know
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-sm">
          {/* Column 1: Cancellation Policy */}
          <div className="space-y-3">
            <div className="text-gray-900 mb-4">
              <CalendarX className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h4 className="font-semibold text-gray-900 text-base">
              Cancellation policy
            </h4>
            <div className="space-y-2 text-gray-700 font-normal text-sm leading-relaxed">
              <p>
                Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
              </p>
              <p>
                Review this host’s full policy for details.
              </p>
            </div>
            <button
              className="inline-block font-semibold text-gray-900 underline hover:text-black pt-2 cursor-pointer text-sm"
            >
              Learn more
            </button>
          </div>

          {/* Column 2: House Rules */}
          <div className="space-y-3">
            <div className="text-gray-900 mb-4">
              <Key className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h4 className="font-semibold text-gray-900 text-base">
              House rules
            </h4>
            <div className="space-y-2 text-gray-700 font-normal text-sm leading-relaxed">
              <p>Check-in after 2:00 pm</p>
              <p>Checkout before 11:00 am</p>
              <p>3 guests maximum</p>
            </div>
            <button
              className="inline-block font-semibold text-gray-900 underline hover:text-black pt-2 cursor-pointer text-sm"
            >
              Learn more
            </button>
          </div>

          {/* Column 3: Safety & Property */}
          <div className="space-y-3">
            <div className="text-gray-900 mb-4">
              <Shield className="w-6 h-6 stroke-[1.75]" />
            </div>
            <h4 className="font-semibold text-gray-900 text-base">
              Safety &amp; property
            </h4>
            <div className="space-y-2 text-gray-700 font-normal text-sm leading-relaxed">
              <p>Carbon monoxide alarm not reported</p>
              <p>Smoke alarm not reported</p>
              <p>Exterior security cameras on property</p>
            </div>
            <button
              className="inline-block font-semibold text-gray-900 underline hover:text-black pt-2 cursor-pointer text-sm"
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

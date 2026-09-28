'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Plus, Minus, Tag, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListingDetails } from '@/data/listingData';
import { format, differenceInCalendarDays, subDays } from 'date-fns';
import confetti from 'canvas-confetti';

interface StickyReservationCardProps {
  listing: ListingDetails;
  checkIn: Date | null;
  checkOut: Date | null;
  onOpenCalendar: () => void;
  onScrollToReviews: () => void;
}

export const StickyReservationCard: React.FC<StickyReservationCardProps> = ({
  listing,
  checkIn,
  checkOut,
  onOpenCalendar,
  onScrollToReviews,
}) => {
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);
  const [isPromoClaimed, setIsPromoClaimed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGuestDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const totalGuests = adults + childrenCount;
  const maxGuests = listing.stats.guests;

  // Nights calculation: default to 5 nights if not selected
  const nights = checkIn && checkOut ? Math.max(1, differenceInCalendarDays(checkOut, checkIn)) : 5;

  // Price calculations
  const defaultTotal = 28499;
  const pricePerNight = Math.round(defaultTotal / nights);
  const baseSubtotal = defaultTotal;
  const discount = isPromoClaimed ? Math.round(baseSubtotal * 0.1) : 0;
  const finalTotal = baseSubtotal - discount;

  // Free cancellation date (1 day before checkin, or October 17 by default)
  const cancellationDateText = checkIn
    ? format(subDays(checkIn, 1), 'd MMMM')
    : '17 October';

  const formattedCheckIn = checkIn ? format(checkIn, 'MM/dd/yyyy') : '10/18/2026';
  const formattedCheckOut = checkOut ? format(checkOut, 'MM/dd/yyyy') : '10/23/2026';


  return (
    <div className="sticky top-24 space-y-3.5">
      {/* 10% Off Promo Claim Banner (Now Sticky along with Main Reservation Card) */}
      <div className="bg-white border border-gray-200/90 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Tag className="w-5 h-5 fill-emerald-600/20 text-emerald-600 rotate-90" />
          </div>
          <div>
            <p className="text-xs sm:text-[13px] font-medium text-gray-900 leading-snug">
              Get 10% off your next stay.
            </p>
            <button
              className="text-xs text-gray-900 underline font-semibold hover:text-black cursor-pointer"
            >
              Terms apply
            </button>
          </div>
        </div>
        <button
          className={`text-xs font-semibold py-2 px-4 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
            isPromoClaimed
              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
          }`}
        >
          {isPromoClaimed ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-700" />
              <span>Claimed</span>
            </>
          ) : (
            'Claim'
          )}
        </button>
      </div>

      {/* Main Reservation Card */}
      <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl transition-shadow hover:shadow-2xl">
        {/* Header: Price & Duration matching screenshot */}
        <div className="flex items-baseline mb-6 justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900 underline underline-offset-2">
              {listing.pricing.currencySymbol}
              {finalTotal.toLocaleString()}
            </span>
            {isPromoClaimed && (
              <span className="text-sm font-normal text-gray-400 line-through">
                {listing.pricing.currencySymbol}
                {baseSubtotal.toLocaleString()}
              </span>
            )}
            <span className="text-gray-700 text-sm font-normal ml-0.5">
              for {nights} nights
            </span>
          </div>
          {isPromoClaimed && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              10% OFF
            </span>
          )}
        </div>

        {/* Date & Guest Input Box */}
        <div className="border border-gray-300 rounded-2xl overflow-hidden mb-4 shadow-2xs relative">
          {/* Check-in / Checkout Split Trigger */}
          <div
            onClick={onOpenCalendar}
            className="grid grid-cols-2 divide-x divide-gray-300 border-b border-gray-300 cursor-pointer bg-white hover:bg-gray-50/60 transition"
          >
            <div className="p-3">
              <span className="block text-[10px] font-black uppercase tracking-wider text-gray-900">
                CHECK-IN
              </span>
              <span className="block text-xs font-medium text-gray-900 truncate mt-0.5">
                {formattedCheckIn}
              </span>
            </div>
            <div className="p-3">
              <span className="block text-[10px] font-black uppercase tracking-wider text-gray-900">
                CHECKOUT
              </span>
              <span className="block text-xs font-medium text-gray-900 truncate mt-0.5">
                {formattedCheckOut}
              </span>
            </div>
          </div>

          {/* Guest Selector Trigger */}
          <div className="relative">
            <div
              onClick={() => setIsGuestDropdownOpen((prev) => !prev)}
              className="p-3 flex items-center justify-between cursor-pointer bg-white hover:bg-gray-50/60 transition"
            >
              <div>
                <span className="block text-[10px] font-black uppercase tracking-wider text-gray-900">
                  GUESTS
                </span>
                <span className="block text-xs font-medium text-gray-900 truncate mt-0.5">
                  {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
                  {infants > 0 && `, ${infants} infant`}
                  {pets > 0 && `, ${pets} pet`}
                </span>
              </div>
              {isGuestDropdownOpen ? (
                <ChevronUp className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-600" />
              )}
            </div>

            {/* Guest Dropdown Menu */}
            <AnimatePresence>
              {isGuestDropdownOpen && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-gray-200 rounded-3xl p-5 shadow-2xl space-y-4"
                >
                  {/* Adults */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Adults</p>
                      <p className="text-xs text-gray-500">Age 13+</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={adults <= 1}
                        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{adults}</span>
                      <button
                        type="button"
                        disabled={totalGuests >= maxGuests}
                        onClick={() => setAdults((prev) => Math.min(maxGuests - childrenCount, prev + 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Children</p>
                      <p className="text-xs text-gray-500">Ages 2–12</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={childrenCount <= 0}
                        onClick={() => setChildrenCount((prev) => Math.max(0, prev - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{childrenCount}</span>
                      <button
                        type="button"
                        disabled={totalGuests >= maxGuests}
                        onClick={() => setChildrenCount((prev) => Math.min(maxGuests - adults, prev + 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Infants */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Infants</p>
                      <p className="text-xs text-gray-500">Under 2</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={infants <= 0}
                        onClick={() => setInfants((prev) => Math.max(0, prev - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{infants}</span>
                      <button
                        type="button"
                        disabled={infants >= 5}
                        onClick={() => setInfants((prev) => prev + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  {/* Pets */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Pets</p>
                      <p className="text-xs text-gray-500">Service animals welcome</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        disabled={pets <= 0}
                        onClick={() => setPets((prev) => Math.max(0, prev - 1))}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{pets}</span>
                      <button
                        type="button"
                        disabled={pets >= 2}
                        onClick={() => setPets((prev) => prev + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-900 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setIsGuestDropdownOpen(false)}
                      className="text-xs font-semibold text-gray-900 underline hover:text-black cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Free cancellation notice pill matching screenshot */}
        <div className="bg-[#F7F7F7] rounded-xl py-3 px-4 text-center my-4 text-xs sm:text-[13px] text-gray-700">
          Free cancellation before{' '}
          <span className="font-semibold text-gray-900">{cancellationDateText}</span>
        </div>

        {/* Reserve Action Button with black film hover overlay */}
        <button
          className="relative group overflow-hidden w-full bg-[#FF385C] text-white font-semibold py-3.5 px-6 rounded-3xl transition duration-200 shadow-sm flex items-center justify-center cursor-pointer text-base active:scale-98"
        >
          {/* Black film appear on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 rounded-3xl transition-colors duration-200 pointer-events-none" />
          <span className="relative z-10 font-semibold">Reserve</span>
        </button>

        <p className="text-center text-xs text-gray-500 mt-3 font-normal">
          You won&apos;t be charged yet
        </p>
      </div>
    </div>
  );
};


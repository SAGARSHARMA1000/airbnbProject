'use client';

import React from 'react';
import { X, CheckCircle2, Calendar, Users, MapPin, Sparkles, Download, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListingDetails } from '@/data/listingData';
import { format } from 'date-fns';

interface ReservationSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: ListingDetails;
  checkIn: Date | null;
  checkOut: Date | null;
  guestsCount: {
    adults: number;
    children: number;
    infants: number;
    pets: number;
  };
  pricingBreakdown: {
    nights: number;
    baseSubtotal: number;
    cleaningFee: number;
    serviceFee: number;
    taxes: number;
    discount: number;
    total: number;
  };
}

export const ReservationSuccessModal: React.FC<ReservationSuccessModalProps> = ({
  isOpen,
  onClose,
  listing,
  checkIn,
  checkOut,
  guestsCount,
  pricingBreakdown,
}) => {
  if (!isOpen) return null;

  const totalGuests = guestsCount.adults + guestsCount.children;
  const reservationCode = 'HM' + Math.floor(100000 + Math.random() * 900000);

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Reservation Confirmed"
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-50 text-emerald-600 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Reservation Confirmed!
                </span>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  Pack your bags for Santorini!
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="Close confirmation"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Reservation Itinerary Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-4 text-sm">
            <div className="flex justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-gray-500 font-medium">Confirmation code</span>
              <span className="font-mono font-bold text-gray-900 bg-white px-2.5 py-1 rounded-md border border-gray-200 text-xs">
                {reservationCode}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-900">{listing.title}</h4>
                <p className="text-xs text-gray-500">{listing.location.displayAddress}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-200">
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500 block">Check-in</span>
                  <span className="font-semibold text-gray-900 text-xs">
                    {checkIn ? format(checkIn, 'EEE, MMM d, yyyy') : 'Oct 12, 2026'}
                  </span>
                  <span className="text-[10px] text-gray-400 block">After 3:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500 block">Checkout</span>
                  <span className="font-semibold text-gray-900 text-xs">
                    {checkOut ? format(checkOut, 'EEE, MMM d, yyyy') : 'Oct 17, 2026'}
                  </span>
                  <span className="text-[10px] text-gray-400 block">Before 11:00 AM</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-gray-200 text-xs text-gray-700">
              <Users className="w-4 h-4 text-gray-500" />
              <span>
                {totalGuests} {totalGuests === 1 ? 'guest' : 'guests'}
                {guestsCount.infants > 0 && `, ${guestsCount.infants} infant`}
                {guestsCount.pets > 0 && `, ${guestsCount.pets} pet`}
              </span>
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="mt-5 p-4 rounded-xl border border-gray-100 bg-white space-y-2 text-xs">
            <div className="flex justify-between text-gray-600">
              <span>Payment Method</span>
              <span className="font-medium text-gray-900">Visa ending in •••• 4242</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Total Paid</span>
              <span className="font-bold text-gray-900 text-sm">
                ${pricingBreakdown.total.toLocaleString()}
              </span>
            </div>
          </div>

          {/* AirCover Protection Tag */}
          <div className="mt-4 flex items-center gap-2 bg-emerald-50/60 text-emerald-800 p-3 rounded-xl text-xs font-medium border border-emerald-200/50">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>AirCover protection is automatically activated for your booking.</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                alert('Receipt downloaded successfully!');
              }}
              className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-2.5 px-4 rounded-xl transition text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Receipt</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-[#FF385C] to-[#E00B41] text-white font-semibold py-2.5 px-4 rounded-xl hover:opacity-95 transition text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>View Trip Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Send, ShieldCheck, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ListingDetails } from '@/data/listingData';

interface ContactHostModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: ListingDetails;
}

export const ContactHostModal: React.FC<ContactHostModalProps> = ({
  isOpen,
  onClose,
  listing,
}) => {
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact Host Modal"
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100"
        >
          {/* Header */}
          <div className="flex justify-between items-center pb-4 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">
              Contact {listing.host.name}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Host Info Summary */}
          <div className="flex items-center gap-3 py-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
              <Image
                src={listing.host.avatar}
                alt={listing.host.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                Typically responds {listing.host.responseTime}
              </p>
              <p className="text-xs text-gray-500">
                Response rate: {listing.host.responseRate}
              </p>
            </div>
          </div>

          {/* Form */}
          {isSent ? (
            <div className="py-8 text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">Message Sent!</h4>
              <p className="text-xs text-gray-500">
                {listing.host.name} will reply shortly to your Airbnb inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Your message to the host
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hi Elena & Nikos, I love Villa Asteria! I had a quick question about..."
                  className="w-full p-3.5 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <div className="flex items-start gap-2 bg-gray-50 p-3 rounded-xl border border-gray-100 text-[11px] text-gray-500 leading-tight">
                <ShieldCheck className="w-4 h-4 text-gray-700 shrink-0 mt-0.5" />
                <span>
                  To protect your payments, never transfer money or communicate outside of the Airbnb website or app.
                </span>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 rounded-xl transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-xl font-semibold text-xs flex items-center gap-2 transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

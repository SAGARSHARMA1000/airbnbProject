'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Check, GraduationCap, Cake, ShieldCheck } from 'lucide-react';
import { ListingDetails } from '@/data/listingData';

interface HostProfileSectionProps {
  listing: ListingDetails;
}

interface CoHostItem {
  name: string;
  avatar?: string;
  initial?: string;
  bgColor?: string;
  textColor?: string;
}

const CO_HOSTS: CoHostItem[] = [
  {
    name: 'Sharath',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Aman Dev Pahwa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Maria Karen Priyanka',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Simran',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Pallavi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Sanyukta',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Shruti',
    initial: 'S',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-600',
  },
  {
    name: 'Amisha',
    initial: 'A',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
];

export const HostProfileSection: React.FC<HostProfileSectionProps> = () => {
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageText, setMessageText] = useState('');

  return (
    <>
      <section id="host-section" className="py-12 border-b border-gray-200">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
          Meet your host
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Host Profile Card & Bio Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Host Floating Card */}
            <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 shadow-sm flex items-center justify-between gap-6 max-w-sm">
              {/* Left: Avatar & Name */}
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  {/* Dark Green Mirashya Avatar */}
                  <div className="w-20 h-20 rounded-full bg-[#16382c] border border-gray-200 flex flex-col items-center justify-center text-[#d4af37] px-1 shadow-sm">
                    <span className="text-[9px] tracking-widest font-serif uppercase font-bold text-center leading-none text-emerald-100">
                      MIRASHYA
                    </span>
                  </div>
                  {/* Verified Check Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-[#E00B41] text-white p-1 rounded-full border-2 border-white shadow-xs flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mt-3 leading-snug">
                  Mirashya<br />Homes
                </h4>
                <p className="text-xs text-gray-600 font-normal mt-0.5">
                  Host
                </p>
              </div>

              {/* Right: Stats Column */}
              <div className="space-y-4 text-left border-l border-gray-200 pl-6">
                <div>
                  <span className="block text-lg font-bold text-gray-900 leading-none">
                    1,463
                  </span>
                  <span className="text-xs text-gray-600 font-normal">
                    Reviews
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <span className="block text-lg font-bold text-gray-900 leading-none">
                    4.68★
                  </span>
                  <span className="text-xs text-gray-600 font-normal">
                    Rating
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <span className="block text-lg font-bold text-gray-900 leading-none">
                    2
                  </span>
                  <span className="text-xs text-gray-600 font-normal">
                    Years hosting
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-info list below card */}
            <div className="space-y-4 pt-2 text-sm text-gray-800">
              <div className="flex items-center gap-3">
                <Cake className="w-5 h-5 text-gray-800 shrink-0 stroke-[1.75]" />
                <span>Born in the 80s</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-gray-800 shrink-0 stroke-[1.75]" />
                <span>Where I went to school: NICMAR GOA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Co-Hosts, Host details, and Message button */}
          <div className="lg:col-span-7 space-y-6">
            {/* Co-Hosts */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                Co-Hosts
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6">
                {CO_HOSTS.map((cohost, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    {cohost.avatar ? (
                      <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                        <Image
                          src={cohost.avatar}
                          alt={cohost.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className={`w-9 h-9 rounded-full ${cohost.bgColor} ${cohost.textColor} flex items-center justify-center font-semibold text-sm shrink-0 border border-black/5`}>
                        {cohost.initial}
                      </div>
                    )}
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {cohost.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Host Details */}
            <div className="pt-2">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                Host details
              </h4>
              <div className="space-y-1 text-sm text-gray-700">
                <p>Response rate: 100%</p>
                <p>Responds within an hour</p>
              </div>
            </div>

            {/* Message Host Button */}
            <div>
              <button
                onClick={() => setShowMessageModal(true)}
                className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-xl text-sm transition cursor-pointer"
              >
                Message host
              </button>
            </div>

            {/* Security Notice */}
            <div className="pt-4 border-t border-gray-100 flex items-start gap-2.5 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-gray-700 shrink-0 mt-0.5" />
              <p className="leading-normal">
                To help protect your payment, always use Airbnb to send money and communicate with hosts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Message Mirashya Homes</h4>
            <p className="text-xs text-gray-500 mb-4">
              Ask about check-in timing, parking, or specific amenities.
            </p>
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Hi Mirashya Homes, I had a question about the romantic jacuzzi villa..."
              className="w-full h-32 p-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:outline-none resize-none"
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setShowMessageModal(false)}
                className="px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100 rounded-xl transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Your message has been sent to Mirashya Homes!');
                  setMessageText('');
                  setShowMessageModal(false);
                }}
                className="px-5 py-2 text-xs font-semibold bg-gray-900 text-white rounded-xl hover:bg-black transition cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

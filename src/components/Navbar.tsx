'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Search, Globe, Menu, User, Heart, HelpCircle, Sparkles, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onSearchClick?: () => void;
  savedCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ savedCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'stays' | 'experiences'>('stays');
  const [destination, setDestination] = useState('Oia, Santorini');
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <header className="relative z-30 bg-white border-b border-gray-200">
        <div className="max-w-[1120px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1.5 cursor-pointer">
            <Image
              src="/airbnbIcon.png"
              alt="Airbnb"
              width={32}
              height={32}
              className="w-10 h-10 object-contain"
              priority
            />
            <span className="text-[#FF385C] font-bold text-xl tracking-tight hidden md:inline">
              airbnb
            </span>
          </div>

          {/* Center Search Pill (Desktop) */}
          <div
            onClick={() => setIsSearchModalOpen(true)}
            className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer text-sm font-medium"
          >
            <Image
              src="/houseIcon.png"
              alt=""
              width={20}
              height={20}
              className="w-10 h-10 object-contain mr-1"
            />
            <button className="px-3 border-r border-gray-200 text-gray-900 font-semibold truncate max-w-[140px]">
              Anywhere
            </button>
            <button className="px-3 border-r border-gray-200 text-gray-900 font-semibold">
              Anytime
            </button>
            <button className="px-3 text-gray-500 font-normal">
              Add guests
            </button>
            <div className="bg-[#FF385C] p-2 rounded-full text-white ml-2">
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>

  

          {/* Right Navigation Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="hidden lg:block text-sm font-medium text-gray-800 hover:bg-gray-100 py-2.5 px-4 rounded-full transition">
              Become a host
            </button>
            
            <button
              aria-label="Language and currency"
              className="p-2.5 hover:bg-gray-100 rounded-full transition text-gray-700"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* User Dropdown Menu Trigger */}
            <div className="relative" ref={menuRef}>
              <button
              
                className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-3 hover:shadow-md transition cursor-pointer bg-white"
              >
                <Menu className="w-4 h-4 text-gray-700" />
                
              </button>

            </div>
          </div>
        </div>
      </header>  
    </>
  );
};

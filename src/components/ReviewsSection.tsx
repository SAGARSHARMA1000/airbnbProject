'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { ListingDetails } from '@/data/listingData';

interface ReviewsSectionProps {
  listing: ListingDetails;
}

interface DisplayReview {
  id: string;
  name: string;
  avatar?: string;
  initial?: string;
  yearsOnAirbnb: string;
  date: string;
  rating: number;
  comment: string;
  hasShowMore?: boolean;
}

const REVIEWS_DATA: DisplayReview[] = [
  {
    id: 'rev-1',
    name: 'Amit',
    initial: 'A',
    yearsOnAirbnb: '2 months on Airbnb',
    date: '1 week ago',
    rating: 5,
    comment: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    hasShowMore: false,
  },
  {
    id: 'rev-2',
    name: 'Aheesh',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    yearsOnAirbnb: '3 years on Airbnb',
    date: '2 weeks ago',
    rating: 5,
    comment: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    hasShowMore: true,
  },
  {
    id: 'rev-3',
    name: 'Samiksha',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    yearsOnAirbnb: '8 months on Airbnb',
    date: 'May 2026',
    rating: 5,
    comment: 'the host nitish was really great help',
    hasShowMore: false,
  },
  {
    id: 'rev-4',
    name: 'Vedant',
    initial: 'V',
    yearsOnAirbnb: '4 years on Airbnb',
    date: 'May 2026',
    rating: 5,
    comment: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....',
    hasShowMore: true,
  },
  {
    id: 'rev-5',
    name: 'Vaibhav S',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    yearsOnAirbnb: '3 years on Airbnb',
    date: 'April 2026',
    rating: 5,
    comment: 'The jacuzzi was the best part of our vacation! Very clean property, comfortable beds and amazing location close to the beach.',
    hasShowMore: false,
  },
  {
    id: 'rev-6',
    name: 'Mohd',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    yearsOnAirbnb: '5 years on Airbnb',
    date: 'April 2026',
    rating: 5,
    comment: 'Great host and prompt communication throughout. The place was spotless and we really enjoyed the private terrace.',
    hasShowMore: false,
  },
];

const FILTER_TAGS = [
  { emoji: '🛋️', label: 'Comfort', count: 6 },
  { emoji: '✔️', label: 'Accuracy', count: 5 },
  { emoji: '🛁', label: 'Hot tub', count: 5 },
  { emoji: '🍰', label: 'Condition', count: 4 },
  { emoji: '🎁', label: 'Hospitality', count: 8 },
  { emoji: '🛍️', label: 'Cleanliness', count: 4 },
  { emoji: '🎂', label: 'Amenities', count: 2 },
  { emoji: '🏖️', label: 'Location', count: 5 },
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ listing }) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [expandedReviews, setExpandedReviews] = useState<Record<string, boolean>>({});

  const toggleExpandReview = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    {
      title: 'Cleanliness',
      score: '5.0',
      icon: (
        // Spray bottle icon
        <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 10h4" />
          <path d="M9 10v11" />
          <path d="M10 2a2 2 0 0 1 2 2v2H7V4a2 2 0 0 1 2-2z" />
          <path d="M6 7h7a2 2 0 0 1 2 2l-1 11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 9a2 2 0 0 1 2-2z" />
          <path d="M17 7l1-1" />
          <path d="M19 10h2" />
        </svg>
      ),
    },
    {
      title: 'Accuracy',
      score: '5.0',
      icon: (
        // Checkmark in circle icon
        <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Check-in',
      score: '5.0',
      icon: (
        // Key icon
        <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7.5" cy="15.5" r="5.5" />
          <path d="m11.5 11.5 8.5-8.5" />
          <path d="M17 4l3 3" />
          <path d="m14 7 2 2" />
        </svg>
      ),
    },
    {
      title: 'Communication',
      score: '5.0',
      icon: (
        // Speech chat bubble icon
        <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="3" />
          <path d="M7 18v3l4-3" />
        </svg>
      ),
    },
    {
      title: 'Location',
      score: '4.8',
      icon: (
        // Folded map icon
        <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" x2="9" y1="3" y2="18" />
          <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
      ),
    },
    {
      title: 'Value',
      score: '4.8',
      icon: (
        // Price tag icon
        <svg className="w-7 h-7 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
          <path d="M7 7h.01" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <section id="reviews-section" className="py-12 border-b border-gray-200 scroll-mt-24">
        {/* Giant Laurel Leaves & 4.95 Score Header */}
        <div className="flex flex-col items-center justify-center text-center my-6">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {/* Left Laurel Wing */}
            <svg className="w-10 sm:w-12 h-14 sm:h-16 text-gray-800" viewBox="0 0 24 36" fill="currentColor">
              <path d="M12 2C7 8 3 14 3 22c0 6 3 11 8 13-2-4-2-10 0-16 2-6 5-11 8-17-3 0-6-1-7-2z" opacity="0.9" />
              <circle cx="8" cy="11" r="1.5" />
              <circle cx="5" cy="19" r="1.5" />
              <circle cx="8" cy="27" r="1.5" />
            </svg>

            {/* Score */}
            <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 tracking-tight">
              4.95
            </span>

            {/* Right Laurel Wing */}
            <svg className="w-10 sm:w-12 h-14 sm:h-16 text-gray-800 transform scale-x-[-1]" viewBox="0 0 24 36" fill="currentColor">
              <path d="M12 2C7 8 3 14 3 22c0 6 3 11 8 13-2-4-2-10 0-16 2-6 5-11 8-17-3 0-6-1-7-2z" opacity="0.9" />
              <circle cx="8" cy="11" r="1.5" />
              <circle cx="5" cy="19" r="1.5" />
              <circle cx="8" cy="27" r="1.5" />
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-3">
            Guest favourite
          </h3>
          <p className="text-sm text-gray-600 max-w-md mt-1 font-normal leading-relaxed">
            This home is a guest favourite based on ratings, reviews and reliability
          </p>

          <button
            onClick={() => alert('Reviews are submitted by verified guests who completed a stay.')}
            className="text-xs sm:text-sm font-semibold text-gray-900 underline mt-2 hover:text-black cursor-pointer"
          >
            How reviews work
          </button>
        </div>

        {/* Categories Bar / Grid with Vertical Dividers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 py-8 border-y border-gray-200 text-left my-8 divide-x-0 lg:divide-x divide-gray-200">
          {/* Column 1: Overall rating bar breakdown */}
          <div className="flex flex-col justify-between pr-4">
            <span className="text-xs font-semibold text-gray-900 mb-2">Overall rating</span>
            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2">5</span>
                <div className="flex-1 h-1 bg-gray-900 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2">4</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                  <div className="absolute left-1 top-[-2px] w-2 h-2 rounded-full bg-gray-900" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2">3</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2">2</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2">1</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              </div>
            </div>
          </div>

          {/* Columns 2-7: Individual Category Scores & Icons */}
          {categories.map((cat) => (
            <div key={cat.title} className="flex flex-col justify-between pl-0 lg:pl-6 pt-4 lg:pt-0">
              <span className="text-xs font-semibold text-gray-900">{cat.title}</span>
              <div className="mt-2">
                <span className="text-lg font-bold text-gray-900 block">{cat.score}</span>
              </div>
              <div className="mt-4 pt-1 text-gray-900">
                {cat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Keyword Pills matching screenshot */}
        <div className="flex items-center gap-3 overflow-x-auto py-2 mb-10 scrollbar-none">
          {FILTER_TAGS.map((tag) => {
            const isSelected = selectedTag === tag.label;
            return (
              <button
                key={tag.label}
                onClick={() => setSelectedTag(isSelected ? null : tag.label)}
                className={`border rounded-full py-2 px-4 text-xs font-medium whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 shadow-2xs ${
                  isSelected
                    ? 'border-gray-900 bg-gray-900 text-white'
                    : 'border-gray-300 bg-white text-gray-900 hover:border-gray-900'
                }`}
              >
                <span>{tag.emoji}</span>
                <span>{tag.label}</span>
                <span className={isSelected ? 'text-gray-300' : 'text-gray-500'}>
                  {tag.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid of Reviews matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className="space-y-3">
              {/* Reviewer Header */}
              <div className="flex items-center gap-3">
                {review.avatar ? (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-[#fbe7d5] text-[#b85c10] flex items-center justify-center font-semibold text-base shrink-0 border border-amber-100">
                    {review.initial}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-normal mt-0.5">
                    {review.yearsOnAirbnb}
                  </p>
                </div>
              </div>

              {/* Star Rating & Stay Date */}
              <div className="flex items-center gap-1.5 text-xs text-gray-700">
                <div className="flex text-gray-900">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-gray-900 text-gray-900" />
                  ))}
                </div>
                <span>·</span>
                <span className="font-semibold text-gray-900">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-800 leading-relaxed font-normal">
                {review.comment}
              </p>

              {/* Show more link */}
              {review.hasShowMore && (
                <button
                  onClick={() => toggleExpandReview(review.id)}
                  className="font-semibold underline text-sm text-gray-900 hover:text-black cursor-pointer block pt-1"
                >
                  {expandedReviews[review.id] ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Show All Reviews Button */}
        <div className="mt-10">
          <button
            className="border border-gray-900 hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-xl transition cursor-pointer text-sm shadow-2xs"
          >
            Show all {listing.rating.reviewCount} reviews
          </button>
        </div>
      </section>
    </>
  );
};

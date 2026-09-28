'use client';

import React from 'react';

interface HighlightItem {
  title: string;
  description: string;
  iconType: 'outdoor' | 'cooling' | 'self-checkin';
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    title: 'Outdoor entertainment',
    description: 'The pool and alfresco dining are great for summer trips.',
    iconType: 'outdoor',
  },
  {
    title: 'Designed for staying cool',
    description: 'Beat the heat with the A/C and ceiling fan.',
    iconType: 'cooling',
  },
  {
    title: 'Self check-in',
    description: 'You can check in with the building staff.',
    iconType: 'self-checkin',
  },
];

export const HighlightsSection: React.FC = () => {
  const renderIcon = (type: HighlightItem['iconType']) => {
    switch (type) {
      case 'outdoor':
        return (
          // Firepit / outdoor burner icon
          <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14c0 4.418 3.582 8 8 8s8-3.582 8-8H4z" />
            <path d="M12 2c-.5 2-2 3.5-2 5 0 1.657 1.343 3 3 3s3-1.343 3-3c0-2-2-3.5-2-5h-2z" />
            <path d="M9 22l-2 2" />
            <path d="M15 22l2 2" />
          </svg>
        );
      case 'cooling':
        return (
          // Ceiling fan / propeller icon
          <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="2" />
            <path d="M12 10V3a2 2 0 0 1 4 0v4" />
            <path d="M14 12h7a2 2 0 0 1 0 4h-4" />
            <path d="M12 14v7a2 2 0 0 1-4 0v-4" />
            <path d="M10 12H3a2 2 0 0 1 0-4h4" />
          </svg>
        );
      case 'self-checkin':
        return (
          // Door icon
          <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="3" width="14" height="18" rx="1" />
            <path d="M15 12v.01" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-6 border-b border-gray-200 space-y-6">
      {HIGHLIGHTS.map((item, idx) => (
        <div key={idx} className="flex items-start gap-4">
          <div className="pt-0.5 shrink-0 text-gray-900">
            {renderIcon(item.iconType)}
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-0.5 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

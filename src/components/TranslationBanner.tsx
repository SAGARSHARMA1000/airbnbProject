'use client';

import React, { useState } from 'react';
import { Languages } from 'lucide-react';

export const TranslationBanner: React.FC = () => {
  const [showOriginal, setShowOriginal] = useState(false);

  return (
    <div className="py-4 px-4 my-6 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-between text-xs text-gray-700">
      <div className="flex items-center gap-2.5">
        <span>
          {showOriginal
            ? 'Showing original listing text.'
            : 'Some info has been translated automatically.'}
        </span>
         <button
        className="font-bold underline text-gray-900 hover:text-black cursor-pointer shrink-0"
      >
        Show original
      </button>
      </div>
     
    </div>
  );
};

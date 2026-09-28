'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  isBefore,
  startOfToday,
  differenceInCalendarDays,
} from 'date-fns';

interface DatePickerSectionProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onSelectDates: (checkIn: Date | null, checkOut: Date | null) => void;
  minNights?: number;
}

const unavailableNovemberIntervals = [
  { start: new Date(2026, 10, 18), end: new Date(2026, 10, 24) },
  { start: new Date(2026, 10, 29), end: new Date(2026, 10, 30) },
];

export const DatePickerSection: React.FC<DatePickerSectionProps> = ({
  checkIn,
  checkOut,
  onSelectDates,
  minNights = 2,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date(2026, 9, 1)); // October 2026
  const today = startOfToday();

  const nextMonth = addMonths(currentMonth, 1);




  const nightsCount =
    checkIn && checkOut ? differenceInCalendarDays(checkOut, checkIn) : 0;

  const renderMonthCalendar = (monthDate: Date) => {
    const monthStart = startOfMonth(monthDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    return (
      <div className="w-full">
        <h4 className="text-center font-semibold text-sm text-gray-900 mb-4">
          {format(monthDate, 'MMMM yyyy')}
        </h4>

        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="py-1">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-1">
          {days.map((day, idx) => {
            const isCurrentMonth = isSameMonth(day, monthDate);
            const isPast = isBefore(day, today);
            const isUnavailable = unavailableNovemberIntervals.some((interval) =>
              isWithinInterval(day, interval)
            );
            const isCheckInDay = checkIn ? isSameDay(day, checkIn) : false;
            const isCheckOutDay = checkOut ? isSameDay(day, checkOut) : false;
            const isInRange =
              checkIn && checkOut
                ? isWithinInterval(day, { start: checkIn, end: checkOut })
                : false;

            if (!isCurrentMonth) {
              return <div key={idx} className="h-10" />;
            }

            return (
              <div
                key={idx}
                className={`h-10 flex items-center justify-center relative ${
                  isInRange && !isCheckInDay && !isCheckOutDay
                    ? 'bg-gray-100'
                    : ''
                } ${isCheckInDay && checkOut ? 'bg-linear-to-r from-transparent to-gray-100' : ''} ${
                  isCheckOutDay && checkIn ? 'bg-linear-to-l from-transparent to-gray-100' : ''
                }`}
              >
                <button
                  disabled={isPast || isUnavailable}
                
                  className={`w-9 h-9 rounded-full text-xs font-medium flex items-center justify-center transition cursor-pointer ${
                    isPast || isUnavailable
                      ? 'text-[#DDDDDD] line-through cursor-not-allowed'
                      : isCheckInDay || isCheckOutDay
                      ? 'bg-black text-white font-bold scale-105 shadow-xs'
                      : 'text-gray-800 hover:border hover:border-black'
                  }`}
                >
                  {format(day, 'd')}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="py-8 border-b border-gray-200">
      {/* Title with dynamic night count */}
      <div className="mb-6">
        <h3 className="text-xl sm:text-[22px] font-semibold text-gray-900">
          {nightsCount > 0
            ? `${nightsCount} nights in Candolim`
            : 'Select check-in date'}
        </h3>
        <p className="text-sm text-gray-500 mt-1 font-normal">
          {checkIn && checkOut
            ? `${format(checkIn, 'MMM d, yyyy')} – ${format(checkOut, 'MMM d, yyyy')}`
            : `Minimum stay: ${minNights} nights`}
        </p>
      </div>

      {/* Calendars container with month navigation */}
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button
            aria-label="Previous month"
            className="p-2 rounded-full hover:bg-gray-100 border border-gray-200 transition cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
          
            aria-label="Next month"
            className="p-2 rounded-full hover:bg-gray-100 border border-gray-200 transition cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* 2 Months Grid (Desktop) / 1 Month (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {renderMonthCalendar(currentMonth)}
          <div className="hidden md:block">{renderMonthCalendar(nextMonth)}</div>
        </div>
      </div>

      {/* Clear Dates Action */}
      <div className="flex justify-end mt-4">
      
          <button
            className="text-xs font-semibold underline text-gray-900 hover:text-black py-1 px-2 rounded-md hover:bg-gray-100 transition cursor-pointer"
          >
            Clear dates
          </button>
        
      </div>
    </div>
  );
};

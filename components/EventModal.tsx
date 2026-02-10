'use client';

import { Event } from '@/app/events/types';
import { MapPin, CalendarDays } from 'lucide-react';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0f0f0f] border border-[#2a2a2a] shadow-[0_0_60px_rgba(239,219,146,0.1)] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-slideUp"
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2a2a2a] p-4 sm:p-5 md:p-6 flex justify-between items-start">
          <div>
            <h2 className="text-[#efdb92] text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{event.title}</h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-[#efdb92]"><CalendarDays /></span> {new Date(event.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#efdb92]"><MapPin /></span> {event.location}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-[#efdb92] text-3xl leading-none transition-colors duration-200"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6 overflow-y-auto">
          {/* Description */}
          <div>
            <h3 className="text-[#efdb92] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Description</h3>
            <p className="text-gray-400 leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Registration Fee */}
          {event.registrationFee && (
            <div>
              <h3 className="text-[#efdb92] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Registration Fee</h3>
              <div className="bg-[#151515] border border-[#2a2a2a] rounded-lg p-4">
                <p className="text-gray-300 text-lg font-semibold">{event.registrationFee}</p>
              </div>
            </div>
          )}

          {/* Cash Prize */}
          {event.cashPrize && (
            <div>
              <h3 className="text-[#efdb92] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Cash Prize</h3>
              <div className="bg-[#151515] border border-[#2a2a2a] rounded-lg p-4">
                {event.cashPrize.type === 'single' && (
                  <p className="text-gray-300 text-lg font-semibold">
                    {event.cashPrize.amount?.toLowerCase().includes('book') || event.cashPrize.amount?.toLowerCase().includes('hamper') 
                      ? event.cashPrize.amount 
                      : `₹ ${event.cashPrize.amount}`}
                  </p>
                )}
                {event.cashPrize.type === 'prize-pool' && (
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Prize Pool</p>
                    <p className="text-gray-300 text-lg font-semibold">₹ {event.cashPrize.amount}</p>
                  </div>
                )}
                {event.cashPrize.type === 'first-second' && (
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-500 text-sm">1st Prize</p>
                      <p className="text-gray-300 text-lg font-semibold">₹ {event.cashPrize.first}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">2nd Prize</p>
                      <p className="text-gray-300 text-lg font-semibold">₹ {event.cashPrize.second}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Subevents */}
          {event.subevents && event.subevents.length > 0 && (
            <div>
              <h3 className="text-[#efdb92] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Subevents</h3>
              <div className="bg-[#151515] border border-[#2a2a2a] rounded-lg p-4">
                <ul className="space-y-2">
                  {event.subevents.map((subevent, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-3">
                      <span className="text-[#efdb92] mt-1">•</span>
                      <span>{subevent}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Event Guidelines */}
          <div>
            <h3 className="text-[#efdb92] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Event Guidelines</h3>
            <p className="text-gray-400 leading-relaxed whitespace-pre-line">
              {event.guidelines}
            </p>
          </div>

          {/* Event Coordinator */}
          {event.coordinator && (
            <div>
              <h3 className="text-[#efdb92] text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Event Coordinator{event.coordinator.name.includes(',') ? 's' : ''}</h3>
              <div className="bg-[#151515] border border-[#2a2a2a] rounded-lg p-4 space-y-3">
                {(() => {
                  const names = event.coordinator.name.split(',').map(n => n.trim());
                  const phones = event.coordinator.phone ? event.coordinator.phone.split(',').map(p => p.trim()) : [];
                  
                  return names.map((name, index) => (
                    <div key={index} className={index > 0 ? 'pt-3 border-t border-[#2a2a2a]' : ''}>
                      <p className="text-gray-300 font-semibold mb-1">{name}</p>
                      {phones[index] && (
                        <p className="flex items-center gap-2 text-sm text-gray-500">
                          <span className="text-[#efdb92]">📞</span> 
                          <a href={`tel:${phones[index]}`} className="hover:text-[#efdb92] transition-colors duration-200">
                            {phones[index]}
                          </a>
                        </p>
                      )}
                    </div>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Registration Button */}
          {event.title !== 'MayaSabha' && (
            <div className="pt-2 sm:pt-4">
              <a 
                href={event.registrationLink || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-[#efdb92] text-black px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold hover:bg-black hover:text-white hover:shadow-[0_0_20px_rgba(239,219,146,0.3)] transition-all duration-300"
              >
                Register for Event →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

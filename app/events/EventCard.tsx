import { Event } from './types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-lg border border-[rgba(255,255,255,0.16)] rounded-lg p-6 hover:border-[rgba(239,219,146,0.3)] transition-colors aspect-square flex items-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-[#efdb92] text-2xl font-bold">{event.title}</h2>
        
        <div className="flex gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            📅 {new Date(event.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
          <span className="flex items-center gap-1">
            📍 {event.location}
          </span>
        </div>
        
        <p className="text-gray-300 leading-relaxed">
          {event.shortDescription}
        </p>
      </div>
    </div>
  );
}

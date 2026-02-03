'use client';

import EventCard from "./EventCard";
import { mockEvents } from "./eventData";
import { useState } from "react";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', 'Management', 'Tech', 'Cultural', 'Psychology', 'Literary', 'General'];
  
  const filteredEvents = selectedCategory === 'All' 
    ? mockEvents 
    : mockEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="flex items-center justify-center text-[#efdb92] text-5xl font-bold mb-10 tracking-tight">Events</h1>
        
        {/* Category Filter Buttons */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-lg rounded-full px-6 py-3 border border-[rgba(255,255,255,0.16)] inline-flex gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-[#efdb92] transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[rgba(239,219,146,0.2)]'
                    : 'hover:bg-[rgba(255,255,255,0.09)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

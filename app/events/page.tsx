import EventCard from "./EventCard";
import { mockEvents } from "./eventData";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-[#efdb92] text-4xl font-bold mb-8">Events</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-6">
        {mockEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}

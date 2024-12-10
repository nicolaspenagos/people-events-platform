import React from "react";
import { Event } from "../store/events/types";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <li className="my-4 bg-white p-6 rounded-lg shadow-lg border border-green-300 hover:shadow-xl transition-shadow duration-300 transform hover:scale-95">
      <div className="flex flex-col md:flex-row md:gap-4">
        {/* Main information */}
        <div className="flex flex-col flex-grow">
          <h2 className="font-bold text-2xl text-green-800 mb-2">{event.activityName}</h2>
          <p className="text-green-700 mb-1"><strong>Timestamp:</strong> {new Date(event.date).toLocaleString()}</p>
          <p className="text-green-700 mb-1"><strong>Location:</strong> {event.site}</p>
          <p className="text-green-700 mb-1"><strong>City:</strong> {event.city}</p>
        </div>
        {/* Secondary information */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:gap-4">
          <p className="text-green-700 mb-1"><strong>Mode:</strong> {event.mode}</p>
          <p className="text-green-700 mb-1"><strong>Status:</strong> {event.status}</p>
          <p className="text-green-700 mb-1"><strong>Type:</strong> {event.type}</p>
          <p className="text-green-700 mb-1"><strong>Area:</strong> {event.area}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {/* Owners  */}
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Owner TCBP:</strong> {event.ownerTCBP || "N/A"}</p>
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Owner PJ:</strong> {event.ownerPJ || "N/A"}</p>
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Owner SST:</strong> {event.ownerSST || "N/A"}</p>
        {/* Associated and attendance  */}
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Be Kind Associate:</strong> {event.beKindAssociate}</p>
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Globers Invited:</strong> {event.globersInvited}</p>
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Globers Attended:</strong> {event.globersAttended || "N/A"}</p>
        {/* Costs  */}
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Cost COP:</strong> {event.costCOP ? `COP ${event.costCOP.toLocaleString()}` : "N/A"}</p>
        <p className="text-green-700 mb-1 w-full md:w-auto"><strong>Cost USD:</strong> {event.costUSD ? `USD ${event.costUSD.toLocaleString()}` : "N/A"}</p>
      </div>
      {/* Satisfaction   */}
      {event.satisfaction && (
        <div className="mt-4">
          <p className="text-green-700"><strong>Satisfaction:</strong> {event.satisfaction}</p>
        </div>
      )}
    </li>
  );
};

export default EventCard;

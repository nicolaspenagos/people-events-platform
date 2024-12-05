import React from "react";
import { useSelector } from "react-redux";
import { selectUpcomingEvents } from "../../store/events/selectors";
import { Link } from "react-router-dom";
import Button from "../../blocks/Button";
import useLoadEvents from "../../hooks/useLoadEvents";
import useDownloadEventsJson from "../../hooks/useDownloadEventsJson";  // Import the hook for downloading
import EventCard from "../../components/EventCard";
import Sidebar from "../../components/Sidebar";

function AllEvents() {
  const upcomingEvents = useSelector(selectUpcomingEvents);

  useLoadEvents();  // Keep loading the events

  // Use the download hook, passing the events as parameter
  const handleDownload = useDownloadEventsJson(upcomingEvents);

  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="pl-64 w-full h-full flex flex-col justify-center items-center gap-4">
        <div className="flex gap-4">
          <h1 className="text-green-500 text-4xl font-bold">
            People Events Platform
          </h1>
          <Link to="/new-event">
            <Button>Add Event</Button>
          </Link>
          <Button onClick={handleDownload}>Download Events</Button>
        </div>
        <ul className="w-full">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default AllEvents;

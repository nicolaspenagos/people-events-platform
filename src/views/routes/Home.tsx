import React from "react";
import { useSelector } from "react-redux";
import { selectUpcomingEvents } from "../../store/events/selectors";
import { Link } from "react-router-dom";
import Button from "../../blocks/Button";
import useLoadEvents from "../../hooks/useLoadEvents";
import EventCard from "../../components/EventCard";

function Home() {
  const upcomingEvents = useSelector(selectUpcomingEvents);

  useLoadEvents();

  return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <h1 className="text-green-500 text-4xl font-bold">
          People Events Platform
        </h1>
        <Link to="/new-event">
          <Button>Add Event</Button>
        </Link>
      </div>
      <ul className="w-full">
        {upcomingEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </ul>
    </main>
  );
}

export default Home;

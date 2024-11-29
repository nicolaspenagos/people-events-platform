import React, { useEffect } from "react";
import { Event } from "../../store/events/types";
import { useAppDispatch } from "../../store";
import { eventsActions } from "../../store/events/slice";
import { useSelector } from "react-redux";
import { selectUpcomingEvents } from "../../store/events/selectors";
import { crudAPI } from "../../services/crud-api";
import { extractJsonValues } from "../../services/utils";
import { Link } from "react-router-dom";
import Button from "../../blocks/Button";

function Home() {
  const dispatch = useAppDispatch();
  const upcomingEvents = useSelector(selectUpcomingEvents);

  // Use effect to load events from the API when the component mounts
  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventResponse = await crudAPI.getEvents();
        const events = extractJsonValues(eventResponse.data);
        dispatch(eventsActions.addEvents(events));
      } catch (error) {
        console.error("Error loading events:", error);
      }
    };

    loadEvents();
  }, [dispatch]);

  return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <h1 className="text-green-500 text-4xl font-bold">
          People Events Platform
        </h1>
        {/* Link to navigate to the New Event form */}
        <Link to="/new-event">
          <Button>Add Event</Button>
        </Link>
      </div>
      <ul className="w-full">
        {upcomingEvents.map((event) => (
          <li className="my-3 bg-green-300 p-4 rounded-lg shadow-lg" key={event.id}>
            <h2 className="font-bold text-xl">{event.activityName}</h2>
            <div className="mt-2">
              <p><strong>Location:</strong> {event.site}</p>
              <p><strong>Timestamp:</strong> {new Date(event.date).toLocaleString()}</p>
              <p><strong>Mode:</strong> {event.mode}</p>
              <p><strong>City:</strong> {event.city}</p>
              <p><strong>Site:</strong> {event.site}</p>
              <p><strong>Status:</strong> {event.status}</p>
              <p><strong>Type:</strong> {event.type}</p>
              <p><strong>Area:</strong> {event.area}</p>
              <p><strong>Owner TCBP:</strong> {event.ownerTCBP || "N/A"}</p>
              <p><strong>Owner PJ:</strong> {event.ownerPJ || "N/A"}</p>
              <p><strong>Owner SST:</strong> {event.ownerSST || "N/A"}</p>
              <p><strong>Be Kind Associate:</strong> {event.beKindAssociate}</p>
              <p><strong>Globers Invited:</strong> {event.globersInvited}</p>
              <p><strong>Globers Attended:</strong> {event.globersAttended || "N/A"}</p>
              <p><strong>Satisfaction:</strong> {event.satisfaction || "N/A"}</p>
              <p><strong>Cost COP:</strong> {event.costCOP ? `COP ${event.costCOP.toLocaleString()}` : "N/A"}</p>
              <p><strong>Cost USD:</strong> {event.costUSD ? `USD ${event.costUSD.toLocaleString()}` : "N/A"}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;

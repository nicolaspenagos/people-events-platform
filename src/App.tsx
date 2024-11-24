import React, { useEffect } from "react";
import { Event } from "./store/events/types";
import "./App.css";
import { useAppDispatch } from "./store";
import { eventsActions } from "./store/events/slice";
import { useSelector } from "react-redux";
import { selectUpcomingEvents } from "./store/events/selectors";
import { crudAPI } from "./services/crud-api";
import { extractJsonValues } from "./services/utils";

function App() {
  const dispatch = useAppDispatch();
  const upcomingEvents = useSelector(selectUpcomingEvents);

  // TODO: Implement a sort of useQuery/aysnc thunks hook to hanldle 'loading' and 'error' states
  // const  { isLoading, data, error } = useQuery(crudAPI.getEvents)
  // or
  // https://redux-toolkit.js.org/api/createAsyncThunk#promise-lifecycle-actions
  useEffect(() => {
    const loadEvents = async () => {
      const eventReponse = (await crudAPI.getEvents()).data;
      const events = extractJsonValues(eventReponse);
      dispatch(eventsActions.addEvents(events));
    };
    loadEvents();
  }, []);

  const addEvent = async () => {
    const newEvent: Event = {
      id: crypto.randomUUID(),
      name: "Dummy Event",
      timestamp: `${Date.now()}`,
      location: "Training Room",
    };
    // TODO: same as above
    await crudAPI.putEvent(newEvent);
    dispatch(eventsActions.addEvents([newEvent]));
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <h1 className="text-green-500 text-4xl font-bold">
          People Events Platform
        </h1>
        <button
          className="bg-green-500 p-2 rounded text-slate-800 font-bold"
          onClick={addEvent}
        >
          Add Event
        </button>
      </div>
      <ul>
        {upcomingEvents.map((event) => (
          <li className="my-3 bg-green-300 p-4 rounded-lg" key={event.id}>
            <h2 className="font-bold">{event.name}</h2>
            <p>Location: {event.location}</p>
            <p>Timestamp: {event.timestamp}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;

import React from "react";
import { Event } from "./store/events/types";
import "./App.css";
import { useAppDispatch } from "./store";
import { eventsActions } from "./store/events/slice";
import { useSelector } from "react-redux";
import { selectUpcomingEvents } from "./store/events/selectors";
import DynamicForm from "./components/DynamicForm";
import { createValidator } from "./utiles/createValidator";
import Button from "./components/Button";


//Fields for the form - adjust to the folder architecture later.
const fieldsEvent = [
  {
    name: "activityName",
    label: "Activity Name",
    type: "text",
    validate: createValidator({
      required: "Activity name is required",
      minLength: 3,
      maxLength: 50,
    }),
  },
  {
    name: "date",
    label: "Date",
    type: "date",
    validate: createValidator({
      required: "Date is required",
    }),
  },
  {
    name: "city",
    label: "City",
    type: "select",
    options: [
      { value: "cali", label: "Cali" },
      { value: "medellin", label: "Medellin" },
      { value: "bogota", label: "Bogota" },
    ],
    validate: createValidator({
      required: "City is required",
    }),
  },
  {
    name: "site",
    label: "Site",
    type: "select",
    options: [
      { value: "site_a", label: "Site A" },
      { value: "site_b", label: "Site B" },
      { value: "site_c", label: "Site C" },
    ],
    validate: createValidator({
      required: "Site is required",
    }),
  },
];


function App() {
  const dispatch = useAppDispatch();
  const upcomingEvents = useSelector(selectUpcomingEvents);

  const addEvent = () => {
    const newEvent: Event = {
      name: "Dummy Event",
      timestamp: `${Date.now()}`,
      location: "Training Room",
    };
    dispatch(eventsActions.addEvent(newEvent));
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="flex gap-4">
        <h1 className="text-green-500 text-4xl font-bold">
          People Events Platform
        </h1>
        <Button
          className={"bg-green-500 p-2 rounded text-slate-800 font-bold"}
          onClick={addEvent}
        >
          Add Event
        </Button>
      </div>
      <ul>
        {upcomingEvents.map((event) => (
          <li className="my-3 bg-green-300 p-4 rounded-lg">
            <h2 className="font-bold">{event.name}</h2>
            <p>Location: {event.location}</p>
            <p>Timestamp: {event.timestamp}</p>
          </li>
        ))}
      </ul>

      <DynamicForm
        title="Create new event"
        fields={fieldsEvent}
        onSubmit={(data) => console.log(data)}
      />
    </main>
  );
}

export default App;

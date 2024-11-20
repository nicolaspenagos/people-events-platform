import React from "react";
import { Event } from "./store/events/types";
import "./App.css";
import { useAppDispatch } from "./store";
import { eventsActions } from "./store/events/slice";
import { useSelector } from "react-redux";
import { selectUpcomingEvents } from "./store/events/selectors";
import DynamicForm from "./components/DynamicForm";


//Functions to validate - adjust to the folder architecture later.
const validateEmail = (value: string): string | undefined => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value) ? undefined : "Invalid email address";
};

const validatePassword = (value: string): string | undefined => {
  return value.length >= 6 ? undefined : "Password must be at least 6 characters";
};

//Fields for the form - adjust to the folder architecture later.
const fieldsEvent = [
  {
    name: "email",
    label: "Email Address",
    type: "email",
    validate: validateEmail,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validate: validatePassword,
  },
  {
    name: "username",
    label: "Username",
    type: "text",
  },
]

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
        <button
          className="bg-green-500 p-2 rounded text-slate-800 font-bold"
          onClick={addEvent}
        >
          Add Event
        </button>
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
        fields={fieldsEvent}
        onSubmit={(data) => console.log(data)}
      />
    </main>
  );
}

export default App;

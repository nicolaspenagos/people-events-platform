import React from "react";
import NewEventForm from  "./NewEventForm";

const NewEvent = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Create New Event</h2>
      <NewEventForm />
    </div>
  );
};

export default NewEvent;

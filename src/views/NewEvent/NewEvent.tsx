import React from "react";
import NewEventForm from  "./NewEventForm";
import { Link } from "react-router-dom";
import { Button } from "../../blocks";

const NewEvent = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Create New Event</h2>
      <NewEventForm />

      
        <Link to="/"><Button>Home</Button></Link>
      
    </div>
  );
};

export default NewEvent;

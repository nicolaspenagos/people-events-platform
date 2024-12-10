import React from "react";
import NewEventForm from "./NewEventForm";
import { Link } from "react-router-dom";
import { Button } from "../../blocks";
import Sidebar from "../../components/Sidebar/Sidebar"; // Asegúrate de ajustar la ruta si es necesario.

const NewEvent = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 p-4 flex-1">
        <h2 className="text-2xl font-bold mb-4">Create New Event</h2>
        <NewEventForm />
        <div className="mt-4">
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewEvent;

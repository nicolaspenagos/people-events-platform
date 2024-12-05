import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm";
import useAddEvent from "../../hooks/useAddEvent";
import { Event } from "../../store/events/types";
import fieldsEvent from "./fieldsEvent";

const sectionsEvent = [
  {
    title: "Event Details",
    columns: 2,
    fields: fieldsEvent.slice(0, 4), // Ajusta según los campos deseados.
  },
  {
    title: "Location & Status",
    columns: 1,
    fields: fieldsEvent.slice(4, 8),
  },
  {
    title: "Other Details",
    columns: 2,
    fields: fieldsEvent.slice(8), // Resto de los campos.
  },
];

const NewEventForm = () => {
  const navigate = useNavigate();
  const { addEvent } = useAddEvent();

  const handleFormSubmit = (formData: Record<string, any>) => {
    // Make sure to map and transform formData into the appropriate 'Event' format
    const newEvent: Event = {
      id: crypto.randomUUID(),
      activityName: formData.activityName,
      date: formData.date,
      city: formData.city,
      mode: formData.mode,
      site: formData.site,
      status: formData.status,
      type: formData.type,
      area: formData.area,
      ownerTCBP: formData.ownerTCBP || undefined,
      ownerPJ: formData.ownerPJ || undefined,
      ownerSST: formData.ownerSST || undefined,
      beKindAssociate: formData.beKindAssociate,
      globersInvited: Number(formData.globersInvited),
      globersAttended: formData.globersAttended ? Number(formData.globersAttended) : undefined,
      satisfaction: formData.satisfaction ? Number(formData.satisfaction) : undefined,
      costCOP: formData.costCOP ? Number(formData.costCOP) : undefined,
      costUSD: formData.costUSD ? Number(formData.costUSD) : undefined,
    };

    addEvent(newEvent);

    // Redirect to Home after submitting the form
    navigate("/"); 
  };

  return (
    <DynamicForm
      onSubmit={handleFormSubmit}
      sections={sectionsEvent}
    />
  );
};

export default NewEventForm;

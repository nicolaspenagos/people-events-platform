import React from "react";
import DynamicForm from "../../components/DynamicForm";
import useAddEvent from "../../hooks/useAddEvent";
import { Event } from "../../store/events/types"; 
import fieldsEvent from "./fieldsEvent"; 

const NewEventForm = () => {
  const { addEvent } = useAddEvent();

  const handleFormSubmit = (formData: Record<string, any>) => {
    // Asegúrate de mapear y transformar `formData` en el formato adecuado de `Event`
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
  };

  return (
    <DynamicForm
      title="Create new event"
      fields={fieldsEvent}
      onSubmit={handleFormSubmit}
    />
  );
};

export default NewEventForm;
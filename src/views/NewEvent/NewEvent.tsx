import React from "react";
import DynamicForm from "../../components/DynamicForm";
import fieldsEvent from "./fieldsEvent"; // Asegúrate de que la ruta sea correcta

export default function NewEvent() {
    return (
        <DynamicForm
            title="New Event"
            fields={fieldsEvent}
            onSubmit={(data) => console.log(data)}
        />
    );
}


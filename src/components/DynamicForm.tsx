import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DynamicFormProps } from "../store/events/types";

// Receives an array with the form fields and an onSubmit function for handling the form submission properly
const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const { control, handleSubmit, formState: { errors }  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label htmlFor={field.name} className="font-bold">{field.label}</label>

          {/* Input controlado con React Hook Form */}
          <Controller
            name={field.name}
            control={control}
            rules={{ validate: field.validate }}
            render={({ field: controllerField }) => (
              <input
                {...controllerField}
                type={field.type}
                id={field.name}
                className={'border p-2 rounded'}
              />
            )}
          />
            

        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;

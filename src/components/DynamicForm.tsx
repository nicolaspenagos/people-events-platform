import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DynamicFormProps } from "../store/events/types";

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1">
          <label htmlFor={field.name} className="font-bold">
            {field.label}
          </label>

          <Controller
            name={field.name}
            control={control}
            rules={{ validate: field.validate }}
            render={({ field: controllerField }) => (
              <input
                {...controllerField}
                type={field.type}
                id={field.name}
                className={`border p-2 rounded ${
                  errors[field.name] ? "border-red-500" : "border-gray-300"
                }`}
              />
            )}
          />

          {/* Mostrar error si existe */}
          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {errors[field.name]?.message?.toString()}
            </p>
          )}
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default DynamicForm;

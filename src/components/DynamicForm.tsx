import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DynamicFormProps } from "../store/events/types";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

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
          <Label htmlFor={field.name}>{field.label}</Label>

          <Controller
            name={field.name}
            control={control}
            rules={{ validate: field.validate }}
            render={({ field: controllerField }) => {
              if (field.type === "select") {
                return (
                  <select
                    id={field.name}
                    value={controllerField.value || ""}
                    onChange={controllerField.onChange}
                    className={`border p-2 rounded ${errors[field.name] ? "border-red-500" : "border-gray-300"
                      }`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                );
              } else if (field.type === "date") {
                return (
                  <Input
                    id={field.name}
                    type="date"
                    value={controllerField.value || ""}
                    onChange={controllerField.onChange}
                    error={!!errors[field.name]}
                  />
                );
              } else {
                return (
                  <Input
                    id={field.name}
                    type={field.type}
                    value={controllerField.value}
                    onChange={controllerField.onChange}
                    error={!!errors[field.name]}
                  />
                );
              }
            }}
          />

          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {errors[field.name]?.message?.toString()}
            </p>
          )}
        </div>
      ))}



      <Button type="submit">Submit</Button>
    </form>
  );
};

export default DynamicForm;

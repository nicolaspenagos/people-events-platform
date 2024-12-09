import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DynamicFormProps } from "../views/NewEvent/NewEventTypes";
import { Label, Input, Select, DateInput, Button, FormLayout } from "../blocks";

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormLayout>
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
                    <Select
                      id={field.name}
                      value={controllerField.value || ""}
                      onChange={controllerField.onChange}
                      options={field.options || []}
                      error={!!errors[field.name]}
                    />
                  );
                } else if (field.type === "date") {
                  return (
                    <DateInput
                      id={field.name}
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
      </FormLayout>

   
      <div className="flex justify-center mt-4">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default DynamicForm;

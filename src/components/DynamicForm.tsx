import React from "react";
import { useForm, Controller } from "react-hook-form";
import {  DynamicFormProps } from "../views/NewEvent/NewEventTypes"
import { Label, Input, Select, DateInput, Button, FormLayout } from "../blocks";

const DynamicForm: React.FC<DynamicFormProps> = ({ sections, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      {sections.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className={`flex flex-col gap-4 ${
            section.background ? "bg-black p-4 rounded-lg" : ""
          }`}
        >
          {section.title && (
            <h2
              className={`text-lg font-bold ${
                section.background ? "text-white" : "text-black"
              }`}
            >
              {section.title}
            </h2>
          )}

          <FormLayout columns={section.columns}>
            {section.fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <Label
                  htmlFor={field.name}
                  className={section.background ? "text-white" : "text-black"}
                >
                  {field.label}
                </Label>

                <Controller
                  name={field.name}
                  control={control}
                  rules={{ validate: field.validate }}
                  render={({ field: controllerField }) => {
                    switch (field.type) {
                      case "select":
                        return (
                          <Select
                            id={field.name}
                            value={controllerField.value || ""}
                            onChange={controllerField.onChange}
                            options={field.options || []}
                            error={!!errors[field.name]}
                          />
                        );
                      case "date":
                        return (
                          <DateInput
                            id={field.name}
                            value={controllerField.value || ""}
                            onChange={controllerField.onChange}
                            error={!!errors[field.name]}
                          />
                        );
                      default:
                        return (
                          <Input
                            id={field.name}
                            type={field.type}
                            value={controllerField.value || ""}
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
        </div>
      ))}

      <div className="flex justify-center mt-6">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default DynamicForm;

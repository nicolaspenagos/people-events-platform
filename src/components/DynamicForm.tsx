import React from "react";
import { useForm, Controller } from "react-hook-form";
import { DynamicFormProps } from "../store/events/types";
import StyledLabel from "./StyledLabel";
import StyledInput from "./StyledInput";
import StyledButton from "./StyledButton";

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
          <StyledLabel htmlFor={field.name}>{field.label}</StyledLabel>

          <Controller
            name={field.name}
            control={control}
            rules={{ validate: field.validate }}
            render={({ field: controllerField }) => (
              <StyledInput
                id={field.name}
                type={field.type}
                value={controllerField.value}
                onChange={controllerField.onChange}
                error={!!errors[field.name]}
              />
            )}
          />

          {errors[field.name] && (
            <p className="text-red-500 text-sm">
              {errors[field.name]?.message?.toString()}
            </p>
          )}
        </div>
      ))}

      <StyledButton type="submit">Submit</StyledButton>
    </form>
  );
};

export default DynamicForm;

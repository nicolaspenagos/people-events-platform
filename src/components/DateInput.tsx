import React from "react";

interface DateInputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const DateInput: React.FC<DateInputProps> = ({ id, value, onChange, error }) => {
  return (
    <input
      id={id}
      type="date"
      value={value}
      onChange={onChange}
      className={`border p-2 rounded ${error ? "border-red-500" : "border-gray-300"}`}
    />
  );
};

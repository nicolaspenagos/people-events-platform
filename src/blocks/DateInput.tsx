import React from "react";

interface DateInputProps {
  id: string;
  value: string | undefined;
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
      className={`p-2 border-2 ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-full focus:ring-2 focus:ring-[#96F887] focus:border-[#96F887]`}
    />
  );
};

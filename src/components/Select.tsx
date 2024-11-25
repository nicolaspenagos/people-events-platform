import React from "react";

interface SelectProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: boolean;
}

const Select: React.FC<SelectProps> = ({ id, value, onChange, options, error }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`border p-2 rounded ${error ? "border-red-500" : "border-gray-300"}`}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;

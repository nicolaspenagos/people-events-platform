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
      className={`p-2 border-2 ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-full focus:ring-2 focus:ring-[#96F887] focus:border-[#96F887]`}
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

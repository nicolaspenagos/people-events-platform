import React from "react";

interface InputProps {
  id: string;
  type: string;
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, value, onChange, error }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={`p-2 border-2 ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-full focus:ring-2 focus:ring-[#96F887] focus:border-[#96F887]`}
    />
  );
};

export default Input;

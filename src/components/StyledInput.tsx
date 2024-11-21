import React from "react";

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  error?: boolean;
}

const StyledInput: React.FC<InputProps> = ({
  id,
  type,
  value,
  onChange,
  className,
  error,
}) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      className={`p-2 rounded text-gray-800 bg-white border-2 ${
        error ? "border-red-500" : "border-gray-300"
      } focus:ring-2 focus:ring-[#96F887] focus:border-[#96F887] ${
        className || ""
      }`}
    />
  );
};

export default StyledInput;

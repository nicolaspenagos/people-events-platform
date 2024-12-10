import React from "react";

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}

const StyledLabel: React.FC<LabelProps> = ({ htmlFor = '', children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`font-bold text-black ${className || ""}`}
    >
      {children}
    </label>
  );
};

export default StyledLabel;

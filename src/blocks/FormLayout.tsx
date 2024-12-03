import React from "react";

interface FormLayoutProps {
  children: React.ReactNode; 
  className?: string; 
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-2 gap-4 bg-gray-200 p-6 rounded-lg shadow-md ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default FormLayout;

import React from "react";

interface FormLayoutProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
  rows?: number;
}

const FormLayout: React.FC<FormLayoutProps> = ({ children, className, columns = 2, rows }) => {
  const gridStyles = {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    ...(rows && { gridTemplateRows: `repeat(${rows}, auto)` }),
  };

  return (
    <div
      className={`grid gap-4 p-6 ${className || ""}`}
      style={gridStyles}
    >
      {children}
    </div>
  );
};

export default FormLayout;

import React from "react";

interface ButtonProps {
  onClick?: () => void; // onClick es opcional porque no siempre será necesario en botones tipo 'submit'
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset"; // Agregamos soporte para type
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = "button", // Valor predeterminado
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-[#96F887] text-gray-800 font-bold transition-all hover:bg-green-400 active:bg-green-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

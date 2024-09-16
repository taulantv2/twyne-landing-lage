// components/ui/button.tsx
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

export const Button = ({ variant = "solid", className, ...props }: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold transition-all";
  const variants = {
    solid: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "bg-gray-100 text-gray-500 hover:bg-gray-200",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {props.children}
    </button>
  );
};
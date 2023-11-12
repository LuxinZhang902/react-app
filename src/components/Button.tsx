import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success"; //Limit to only several strings
  onClick: () => void;
}
const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

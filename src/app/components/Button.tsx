"use client";

import { IconType } from "react-icons";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface ButtonProps {
  isClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  icon?: IconType;
  title: string;
  arrow?: boolean;
  primary?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  isClick,
  isActive,
  icon: Icon,
  title,
  arrow = false,
  primary,
}) => {
  return (
    <button
      onClick={isClick}
      className={
        "flex items-center transition-colors gap-2  cursor-pointer  p-2 rounded-md  " +
        (isActive
          ? "+ bg-gray-300 text-gray-400 hover:text-gray-400 shadow-md"
          : "") +
        (primary
          ? "bg-yellow-400 justify-center shadow-md text-white hover:bg-yellow-500"
          : "hover:text-yellow-400")
      }
    >
      <span>{Icon && <Icon height={24} width={24} />}</span>
      <h1>{title}</h1>
      <span>{arrow ? isActive ? <BsChevronUp /> : <BsChevronDown /> : ""}</span>
    </button>
  );
};

export default Button;

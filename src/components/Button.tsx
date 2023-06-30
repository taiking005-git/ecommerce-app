"use client";

import { IconType } from "react-icons";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: IconType;
  title: string;
  arrow?: boolean;
  primary?: boolean;
  secondary?: boolean;
  disable?: boolean;
  outline?: boolean;
  small?: boolean;
  light?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  onClick,
  icon: Icon,
  title,
  arrow = false,
  primary,
  disable,
  outline,
  small,
  secondary,
  light,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={` relative
        flex items-center transition cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed   rounded-md 
        ${
          secondary
            ? "+ bg-gray-300 text-gray-400 hover:text-gray-400 shadow-md"
            : ""
        }
        ${
          primary
            ? "bg-yellow-400 justify-center shadow-md text-white hover:bg-yellow-500"
            : "hover:text-yellow-400"
        }
        ${outline ? "w-full items-center justify-center " : ""}
        ${small ? "p-1 gap-1 font-light" : "gap-2 p-2"}
        ${
          light
            ? "bg-white border-black border-2 text-black justify-between"
            : ""
        }
        
      `}
    >
      <span>{Icon && <Icon size={18} />}</span>
      <h1>{title}</h1>
      <span>
        {arrow ? secondary ? <BsChevronUp /> : <BsChevronDown /> : ""}
      </span>
    </button>
  );
};

export default Button;

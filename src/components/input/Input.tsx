"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { FcLikePlaceholder } from "react-icons/fc";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  placeholder?: string;
}

const Input = ({
  id,
  label,
  type = "text",
  disabled,
  required,
  register,
  errors,
  placeholder,
}: InputProps) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register?.(id, { required })}
        placeholder={placeholder}
        type={type}
        className={`
        peer 
        w-full 
        font-light 
        rounded-md outline-none transition 
        disabled:opacity-70 disabled:cursor-not-allowed
        ${id === "search" ? "p-1" : "p-4 border-neutral-300 border-2"}
        ${errors?.[id] ? "border-red-400" : ""}
        ${errors?.[id] ? "focus:border-red-400" : "focus:border-black"}
        
        `}
      />
      {id !== "search" && (
        <label
          htmlFor=""
          className={`absolute transform 
      -translate-y-3
      origin-[0] z-10 top-7 left-4
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-7
      ${errors?.[id] ? "border-red-400" : "text-zinc-400"}
      `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Input;

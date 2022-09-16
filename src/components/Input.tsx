import React, { useState } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "tel";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  messageError?: string;
  pattern?: string;
  cardholderName?: string;
  invisible?: boolean;
  htmlFor?: string;
  inputClassName?: string;
}

export function Input({
  label,
  type,
  placeholder,
  value,
  onChange,
  messageError,
  pattern,
  htmlFor,
  inputClassName
}: InputProps) {
  return (
    <div className="">
      {/* <label
        className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600"
        htmlFor={htmlFor}
      >
        {label}
      </label> */}
      <input
        className={`peer w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400 ${inputClassName}`}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
      />
      <span
        className={`mt-1 hidden text-[9px] font-semibold text-red-500 peer-invalid:block `}
      >
        {messageError}
      </span>
    </div>
  );
}

import React from "react";

interface InputProps {
  label?: string | "";
  placeholder?: string;
  type?: "text" | "number" | "email" | "tel";
}

export function Input({ label, type, placeholder }: InputProps) {
  return (
    <div className="">
      <label
        className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600"
        htmlFor="name"
      >
        {label}
      </label>
      <input
        className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}

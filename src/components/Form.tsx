import React, { useState } from "react";
import { Completed } from "./Completed";
import { Input } from "./Input";

interface FormProps {
  handleSubmit: (e: { preventDefault: () => void; }) => void;
}

export function Form() {
  const [complete, setComplete] = useState(false);

  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setComplete(true);
  }
  
  return (
    <form action="" onSubmit={handleSubmit} className="flex w-full max-w-[350px] flex-col gap-4">
      {complete ? (
        <Completed/>
      ) : (
      <>
      <Input
            label={"Cardholder name"}
            placeholder={"e.g. Jane Appleseed"}
            type={"text"} /><Input
              label={"Card Number"}
              placeholder={"e.g. 1234 5678 9123 0000"}
              type={"text"} /><div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label
                  className="mb-2 w-full text-[10px] uppercase tracking-widest text-gray-600 font-bold"
                  htmlFor="name"
                >
                  Exp. date (mm/yy)
                </label>
                <div className="flex gap-2">
                  <input
                    className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold placeholder:tracking-wider"
                    type="text"
                    placeholder="MM" />
                  <input
                    className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:text-gray-400 placeholder:font-bold placeholder:tracking-wider"
                    type="text"
                    placeholder="YY" />
                </div>
              </div>
              <Input label={"CVC"} placeholder={"e.g. 123"} type={"text"} />
            </div></>)}
      <button type="submit" className="w-full bg-gray-900 text-gray-300 text-sm py-3 mt-4 rounded-md">Confirm</button>
    </form>
  );
}

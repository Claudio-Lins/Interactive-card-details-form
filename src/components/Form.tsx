import React, { useEffect, useState } from "react";
import { Completed } from "./Completed";

interface FormProps {
  cardNumber: string;
  setCardNumber: React.Dispatch<React.SetStateAction<string>>;
  cardholdeName: string;
  setCardholdeName: React.Dispatch<React.SetStateAction<string>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  cvv: string;
  setCvv: React.Dispatch<React.SetStateAction<string>>;
}

export function Form({
  cardNumber,
  setCardNumber,
  cardholdeName,
  setCardholdeName,
  month,
  setMonth,
  year,
  setYear,
  cvv,
  setCvv,
}: FormProps) {
  const [complete, setComplete] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // const [messageErrorName, setMessageErrorName] = useState("");
  // const [messageErrorNumber, setMessageErrorNumber] = useState("");
  // const [messageErrorDate, setMessageErrorDate] = useState("");
  // const [messageErrorCvv, setMessageErrorCvv] = useState("");

  useEffect(() => {
    if (
      cardNumber.length === 19 &&
      cardholdeName.length > 3 &&
      month.length === 2 &&
      year.length === 2 &&
      cvv.length >= 3
    ) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [cardNumber, cardholdeName, month, year, cvv]);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (
      cardholdeName !== "" &&
      cardNumber !== "" &&
      month !== "" &&
      year !== "" &&
      cvv !== ""
    ) {
      setComplete(true);
    }
  }

  const handleOnKeyDown = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 19
    let value = e.currentTarget.value
    if (value.length === 4 || value.length === 9 || value.length === 14) {
      e.currentTarget.value = value + ' '
    } 
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[350px] flex-col gap-4"
    >
      {complete ? (
        <Completed />
      ) : (
        <>
          <div className="">
            <label
              className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600"
              htmlFor="name"
            >
              Cardholder name
            </label>
            <input
              className="peer w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
              onChange={(e) => setCardholdeName(e.target.value)}
              type="text"
              placeholder={"e.g. Jane Appleseed"}
              pattern="^[a-zA-Z0-9\s-]{3,}$"
            />
            <span
              className={`
                mt-1 hidden text-[9px] font-semibold text-red-500 peer-invalid:block
            `}
            >
              Must be more than 3 characters long
            </span>
          </div>
          <div className="">
            <label
              className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600"
              htmlFor="name"
            >
              Card Number
            </label>
            <input
              className="peer w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
              onChange={(e) => setCardNumber(e.target.value)}
              type="text"
              placeholder={"e.g. 1234 5678 9123 0000"}
              onKeyDown={handleOnKeyDown}
              pattern="[0-9\s]{19}"
            />
            <span
              className={`
            mt-1 hidden text-[9px] font-semibold text-red-500 peer-invalid:block
            `}
            >
              Wrong format, must be 16 digits, only numbers
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex w-full justify-between gap-2">
              <div className="flex w-full flex-col">
                <p className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  Exp. date (MM/YY)
                </p>
                <div className="relative flex w-full gap-2">
                  <input
                    className="peer w-1/2 rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
                    onChange={(e) => setMonth(e.target.value)}
                    type="text"
                    placeholder="MM"
                    max={12}
                    maxLength={2}
                    pattern="[0-9]{2}"
                  />
                  <input
                    className="peer w-1/2 rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
                    onChange={(e) => setYear(e.target.value)}
                    type="text"
                    placeholder="YY"
                    max={22}
                    maxLength={2}
                    pattern="[0-9]{2}"
                  />
                  <span className="absolute top-10 mt-1 hidden text-[9px] font-semibold text-red-500 peer-invalid:block">
                    Cant be blank
                  </span>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <p className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600">
                  Cvv
                </p>
                <input
                  className="peer w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
                  onChange={(e) => setCvv(e.target.value)}
                  type="text"
                  placeholder={"123"}
                    maxLength={3}
                  pattern="[0-9]{3}"
                />
                <span className="mt-1 hidden text-[9px] font-semibold text-red-500 peer-invalid:block">
                  Cant be blank
                </span>
              </div>
            </div>
          </div>
        </>
      )}
      <button
        type="submit"
        className={`${isComplete ? "mt-4 w-full rounded-md py-3 text-sm text-gray-300 bg-gray-900 cursor-pointer" : "mt-4 w-full rounded-md py-3 text-sm text-gray-300 bg-gray-500 cursor-not-allowed"}
        `}
      >
        Confirm
      </button>
    </form>
  );
}

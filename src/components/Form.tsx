import React, { useState } from "react";
import { Completed } from "./Completed";
import { Input } from "./Input";

interface FormProps {
  handleSubmit: (e: { preventDefault: () => void }) => void;
}

export function Form() {
  const [complete, setComplete] = useState(false);
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [messageErrorName, setMessageErrorName] = useState("");
  const [messageErrorNumber, setMessageErrorNumber] = useState("");
  const [messageErrorDate, setMessageErrorDate] = useState("");
  const [messageErrorCvv, setMessageErrorCvv] = useState("");

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    cardholderName === ""
      ? setMessageErrorName("Cant be blank")
      : setMessageErrorName("");
    cardNumber === ""
      ? setMessageErrorNumber("Cant be blank")
      : setMessageErrorNumber("");
    month === ""
      ? setMessageErrorDate("Cant be blank")
      : year === ""
      ? setMessageErrorDate("Cant be blank")
      : setMessageErrorDate("");
    cvv === "" ? setMessageErrorCvv("Cant be blank") : setMessageErrorCvv("");
    if (
      cardholderName !== "" &&
      cardNumber !== "" &&
      month !== "" &&
      year !== "" &&
      cvv !== ""
    ) {
      setComplete(true);
    }
  }

  return (
    <form
      action=""
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
              className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
              onChange={(e) => setCardholderName(e.target.value)}
              type="text"
              placeholder={"e.g. Jane Appleseed"}
            />
            <span className="mt-1 block text-[9px] font-semibold text-red-500">
              {messageErrorName}
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
              className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
              onChange={(e) => setCardNumber(e.target.value)}
              type="text"
              placeholder={"e.g. 1234 5678 9123 0000"}
            />
            <span className="mt-1 block text-[9px] font-semibold text-red-500">
              {messageErrorNumber}
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-1/2">
              <label
                className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600"
                htmlFor="name"
              >
                Exp. date (mm/yy)
              </label>
              <div className="flex gap-2">
                <input
                  className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
                  onChange={(e) => setMonth(e.target.value)}
                  type="number"
                  placeholder="MM"
                />
                <div className="">
                  <input
                    className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
                    onChange={(e) => setYear(e.target.value)}
                    type="number"
                    placeholder="YY"
                  />
                </div>
              </div>
              <span className="mt-1 block text-[9px] font-semibold text-red-500">
                {messageErrorDate}
              </span>
            </div>
            <div className="">
              <label
                className="mb-2 w-full text-[10px] font-bold uppercase tracking-widest text-gray-600"
                htmlFor="name"
              >
                cvv
              </label>
              <input
                className="w-full rounded-md border-gray-300 placeholder:text-sm placeholder:font-bold placeholder:tracking-wider placeholder:text-gray-400"
                onChange={(e) => setCvv(e.target.value)}
                type="number"
                placeholder={"123"}
              />
              <span className="mt-1 block text-[9px] font-semibold text-red-500">
                {messageErrorCvv}
              </span>
            </div>
          </div>
        </>
      )}
      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-gray-900 py-3 text-sm text-gray-300"
      >
        Confirm
      </button>
    </form>
  );
}

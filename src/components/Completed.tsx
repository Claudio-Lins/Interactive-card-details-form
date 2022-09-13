import Image from "next/image";
import React from "react";

export function Completed() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[350px]">
      <div className="">
        <Image
          src="/images/icon-complete.svg"
          alt="Completed"
          width={100}
          height={100}
        />
      </div>
      <h2 className="mt-4 text-center text-4xl font-bold text-gray-900">
        Thank you
      </h2>
      <p className='text-gray-400 text-lg mt-6 font-semibold'>We&apos;ve added your card details</p>
    </div>
  );
}

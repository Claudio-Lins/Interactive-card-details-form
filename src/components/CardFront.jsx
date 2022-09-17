import Image from "next/image";

export function CardFront({ cardNumber, cardholdName, month, year }) {
  return (
    <div className="relative -mt-24 h-[160px] w-[290px] flex-shrink-0 place-self-start overflow-hidden bg-card-front bg-contain bg-no-repeat md:mt-4 md:h-[186px] md:w-[340px]">
      <div className="absolute flex flex-col p-6 w-full">
        <div className="relative h-[35px] w-[60px]">
          <Image
            src="/images/card-logo.svg"
            alt="card front"
            layout="fill"
            objectFit="contain"
            // width={84}
            // height={47}
          />
        </div>

        <div className="mt-7 flex flex-col gap-3 text-gray-300 md:mt-12 w-full">
          <p className=" text-base tracking-[0.2rem] md:text-xl text-justify">
            {cardNumber ? cardNumber : "0000 0000 0000 0000"}
          </p>
          <div className="flex justify-between">
            <span className="text-xs uppercase md:text-sm">{cardholdName ? cardholdName : 'Jane APPLE'}</span>
            <div className="">
            <span className="text-xs md:text-sm">{month ? month : '00'}</span>
            <span className="text-xs md:text-sm">/</span>
            <span className="text-xs md:text-sm">{year ? year : '00'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export function CardFront() {
  return (
    <div className="h-[160px] w-[290px] md:w-[340px] md:h-[186px] flex-shrink-0 place-self-start -mt-24 md:mt-4 relative bg-card-front bg-no-repeat overflow-hidden bg-contain">
      
      <div className="absolute flex flex-col p-6">
        <div className="w-[60px] h-[35px] relative">
          <Image
            src="/images/card-logo.svg"
            alt="card front"
            layout="fill"
            objectFit="contain"
            // width={84}
            // height={47}
          />
        </div>

        <div className="flex flex-col gap-3 text-gray-300 mt-7 md:mt-12">
          <p className="text-base text-center tracking-[0.2rem] md:text-xl">
            1234 0000 0000 0000
          </p>
          <div className="flex justify-between">
            <span className="text-xs uppercase md:text-sm">Jane APPLESEED</span>
            <span className="text-xs md:text-sm">00/00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

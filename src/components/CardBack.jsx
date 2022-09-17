import Image from 'next/image'
import React from 'react'

export function CardBack({cvv}) {
  return (
    <div className="h-[160px] w-[290px]  md:w-[340px] md:h-[186px] flex-shrink-0 place-self-end relative">
    <Image
      src="/images/bg-card-back.png"
      alt="card back"
      width={410}
      height={225}
    />
    <span className='absolute top-[66px] md:top-[80px] text-gray-300 right-10'>{cvv ? cvv : '000'}</span>
  </div>
  )
}

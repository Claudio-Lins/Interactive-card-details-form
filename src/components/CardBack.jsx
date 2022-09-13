import Image from 'next/image'
import React from 'react'

export function CardBack() {
  return (
    <div className="h-[160px] w-[290px] max-w-sm flex-shrink-0 place-self-end relative">
    <Image
      src="/images/bg-card-back.png"
      alt="card back"
      width={410}
      height={225}
    />
    <span className='absolute top-[66px] text-gray-300 right-10'>000</span>
  </div>
  )
}

import Image from 'next/image'
import React from 'react'
import picture from '../assets/background-purple-cake-image.jpg'
export default function CakeSegment() {
  return (
    <div className="flex flex-col items-center  pb-4">
      <Image
        src={picture}
        alt="Tks Cake"
        className=" max-w-[80%] rounded-md shadow-lg"
      />
    </div>
  )
}

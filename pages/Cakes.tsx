'use client'

import CakeBuilderCake from '@/components/CakeBuilderCake'
import CakeSegment from '@/components/CakeSegment'
// import React from 'react'

export default function Cakes() {
  return (
    <>
      <div className="bg-[#f7e0dd] min-w-full min-h-screen pb-10">
        <p className="p-14 font-black text-3xl text-[#4A1823]">OUR CAKES</p>
        <CakeSegment />
        <CakeBuilderCake />
      </div>
    </>
  )
}

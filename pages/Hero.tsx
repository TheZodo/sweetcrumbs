'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { TextLoop } from 'react-text-loop-next'
import bgImage from '../assets/cake_bg.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F3EE] min-h-screen p-6  grid grid-cols-1 md:grid-cols-2">
        <div className=" ">
          <div className="flex-col md:flex justify-center items-center ">
            <div className="min-w-full flex items-center flex-col pt-1 ">
              <span className="font-[700] text-5xl">For All Those</span> <br />
              <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                <span
                  key={1}
                  className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823]"
                >
                  SWEET
                </span>
                <span
                  key={2}
                  className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823]"
                >
                  YUMMY
                </span>
                <span
                  key={3}
                  className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823]"
                >
                  DELIGHTFUL
                </span>
                <span className="font-black text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823]">
                  DELICIOUS
                </span>
              </TextLoop>
              {''}
              <br />
              <span className="font-extrabold text-5xl">Moments</span>
            </div>
            <div>
              <p className=" pt-16 px-3 font-normal">
                Get your <span className=" text-[#4A1823]"> CAKE</span>{' '}
                delivered to your doorstep <br /> within lusaka. We have a wide
                range of <br /> cakes, from birthday cakes to wedding cakes.{' '}
                <br /> We also have a wide range of flavors to <br /> choose
                from.
              </p>
            </div>
          </div>

          {/* <section className="flex flex-col items-center pt-14">
          <button className=" bg-[#4A1823] px-4 py-2 rounded-lg w-fit font-bold text-[#EFB6AE]">
            Build Your Cake
          </button>
          <span className=" flex flex-col items-center p-4">or</span>
          <button className=" bg-[#4A1823] px-4 py-2 rounded-lg w-fit font-bold text-[#EFB6AE]">
            Choose a Popolar Cake
          </button>
        </section> */}
        </div>
        <div>
          <Image src={bgImage} alt="image altered" />
        </div>
      </div>
    </>
  )
}

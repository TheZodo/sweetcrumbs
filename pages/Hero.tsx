'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { TextLoop } from 'react-text-loop-next'
import bgImage from '../assets/cake_bg.png'
import Image from 'next/image'
import { BsWhatsapp } from 'react-icons/Bs'
import { motion } from 'framer-motion'

export default function Hero() {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  }
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F3EE] min-h-screen pb-6  grid grid-cols-1 md:grid-cols-2">
        <div className=" ">
          <div className="flex-col md:flex justify-center items-center lg:items-start ">
            <div className="min-w-full flex items-center flex-col pt-1 lg:items-start lg:pl-44">
              <span className="font-[700] text-5xl">For All Those</span> <br />
              <span
                key={1}
                className="font-black text-5xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#E35C6D] to-[#F8C9AB]"
              >
                SWEET
              </span>
              {''}
              <br />
              <span className="font-extrabold text-5xl lg:text-9xl">
                Moments
              </span>
            </div>
            <div className="md:pl-44 pl-10 ">
              <p className=" pt-16 px-3 font-semibold lg:text-lg">
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
        <span className="absolute font-black hidden md:flex text-[#EBECE7] text-8xl top-[29rem] -left-72 transform rotate-90">
          {' '}
          SWEET CRUMBS
        </span>
        <span className="absolute font-black hidden md:flex text-[#EBECE7] text-9xl bottom-2 right-28">
          {' '}
          SWEET CRUMBS
        </span>
        <motion.button
          className="fixed bottom-8 right-8 z-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          animate={{ y: [0, -10, 0] }}
          transition={bounceTransition}
        >
          <BsWhatsapp className=" text-[#4A1823] text-4xl md:text-5xl " />
        </motion.button>
      </div>
    </>
  )
}

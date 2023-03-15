import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo-final.jpg'

export default function Navbar() {
  return (
    <div>
      <nav className="flex content-between justify-between">
        {/* <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823] w-fit">
          SWEET
        </h1> */}
        <Image
          src={logo}
          alt={'SweetCrumbs Logo'}
          width={60}
          className=" rounded-full"
        />
        <div></div>
      </nav>
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import logo from '../assets/sweet_logo.png'

export default function Navbar() {
  return (
    <div>
      <nav className="flex content-between justify-between bg-white min-w-[90%] rounded-lg  p-2">
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

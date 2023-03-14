import CakeSegment from '@/components/CakeSegment'
import Hero from '@/pages/Hero'
import Image from 'next/image'
import logo from '../assets/logo-final.jpg'
export default function Home() {
  return (
    <main>
      <Hero />
      <CakeSegment />
    </main>
  )
}

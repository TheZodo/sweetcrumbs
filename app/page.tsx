import Cakelist from '@/components/Cakelist'
import { previewData } from 'next/headers'
import Cakes from '@/pages/Cakes'
import Hero from '@/pages/Hero'
export default function Home() {
  return (
    <main className="scrollbar-hide">
      <Hero />
      {/* <Cakelist /> */}
      <Cakes />
    </main>
  )
}

import Cakelist from '@/components/Cakelist'
import { previewData } from 'next/headers'
import Cakes from '@/pages/Cakes'
import Hero from '@/pages/Hero'
import { groq } from 'next-sanity'

const query = groq`
*[_type == "post"]{
  ...,
author->,
categories[]->
} | order(_createdAt desc)`

export default function Home() {
  if (previewData()) {
    return <>previewData</>
  }

  return (
    <main className="scrollbar-hide">
      {/* <Cakelist /> */}
      <Cakes />
    </main>
  )
}

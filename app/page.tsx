import Cakelist from '@/components/Cakelist'
import { previewData } from 'next/headers'
import Cakes from '@/pages/Cakes'
import Hero from '@/pages/Hero'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'

const query = groq`
*[_type == "post"]{
  ...,
author->,
categories[]->
} | order(_createdAt desc)`

export default async function Home() {
  if (previewData()) {
    return <>previewData</>
  }

  const posts = await client.fetch(query)
  return (
    <main className="scrollbar-hide">
      {/* <Cakelist /> */}
      <Cakes />
    </main>
  )
}

import Cakelist from '@/components/Cakelist'
import { previewData } from 'next/headers'
import Cakes from '@/pages/Cakes'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
const query = groq`
*[_type == "post"]{
  ...,
author->,
categories[]->
} | order(_createdAt desc)`

export default async function Home() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <div>Loading...</div>
          </div>
        }
      >
        <h1>lessonz</h1>
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  return (
    <main className="scrollbar-hide">
      {/* <Cakelist /> */}
      <Cakes />
    </main>
  )
}

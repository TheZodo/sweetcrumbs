import Cakelist from '@/components/CakeList'
import { previewData } from 'next/headers'
import Cakes from '@/pages/Cakes'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
import PreviewCakeList from '@/components/PreviewCakeList'
import { store } from '@/store'
const query = groq`
*[_type == "post"]{
  ...,
author->,
categories[]->
} | order(_createdAt asc)`

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
        <PreviewCakeList query={query} />
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  return (
    <main className="scrollbar-hide">
      <Cakelist posts={posts} />
      {/* <Cakes /> */}
    </main>
  )
}

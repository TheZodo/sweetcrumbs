'use client'

import { usePreview } from '@/lib/sanity.preview'
import BlogList from './Bloglist'
type Props = {
  query: string
}

export default function PreviewCakeList({ query }: Props) {
  const posts = usePreview(null, query)
  console.log('loading posys...')
  return <BlogList posts={posts} />
}

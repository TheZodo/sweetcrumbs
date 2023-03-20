'use client'

import { usePreview } from '@/lib/sanity.preview'
import CakeList from './CakeList'
type Props = {
  query: string
}

export default function PreviewCakeList({ query }: Props) {
  const posts = usePreview(null, query)

  return <CakeList posts={posts} />
}

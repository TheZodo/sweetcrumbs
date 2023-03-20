type Base = {
  _createdAt: string
  _updatedAt: string
  _id: string
  _rev: string
  _type: string
}

interface Post extends Base {
  title: string
  slug: Slug
  body: string
  mainImage: Image
  description: string
  author: Author
  categories: Category[]
}

interface Image {
  _type: 'image'
  asset: Reference
}

interface Reference {
  _ref: string
  _type: 'reference'
}

interface Slug {
  _type: 'slug'
  current: string
}

interface Block {
  _type: 'block'
  children: Span[]
  markDefs: any[]
  _key: string
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Span {
  _type: 'span'
  text: string
  marks: string[]
  _key: string
}

interface Category extends Base {
  title: string
  description: string
}

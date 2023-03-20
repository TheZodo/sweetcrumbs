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
  body: Block[]
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

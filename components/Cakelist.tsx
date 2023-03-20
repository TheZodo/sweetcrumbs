type Props = {
  posts: Post[]
}

export default function CakeList({ posts }: Props) {
  console.log(posts.length)
  return <div>Cakelist</div>
}

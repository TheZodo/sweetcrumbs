import urlFor from '@/lib/urlFor'
import Image from 'next/image'

type Props = {
  posts: Post[]
}

export default function CakeList({ posts }: Props) {
  console.log(posts.length)
  return (
    <div>
      <div className="bg-[#f7e0dd] min-w-full min-h-screen pb-10">
        <p className="p-14 font-black text-3xl text-[#4A1823]">
          Our recent cakes
        </p>
        {posts.map((post) => (
          <div className="flex flex-col items-center  pb-4">
            <Image
              //how to add width to this request?

              src={urlFor(post.mainImage).url()}
              alt="Tks Cakes"
              className=" max-w-[80%] rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

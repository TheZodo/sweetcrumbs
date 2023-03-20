import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

type Props = {
  posts: Post[]
}

export default function CakeList({ posts }: Props) {
  console.log(posts.length)
  return (
    <div>
      <div className="bg-[#f7e0dd] min-w-full min-h-screen pb-10 scrollbar-none overflow-hidden">
        <p className="p-14 font-bold text-3xl text-[#4A1823] absolute">
          OUR{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823]">
            CAKES
          </span>
        </p>
        <div className=" flex overflow-x-scroll scrollbar-none overflow-hidden pt-36 pr-10">
          {posts.map((post) => (
            <div className="flex flex-col  items-center pb-4 pl-10">
              <Image
                //how to add width to this request?

                src={urlFor(post.mainImage).url()}
                alt="Tks Cakes"
                className=" max-w-[80%] rounded-t-md drop-shadow-xl min-w-[300px]"
                width={500}
                height={500}
              />
              <div className=" max-w-[80%] flex-grow drop-shadow-xl min-w-[300px] bg-[#4A1823] z-0 text-white text-center font-normal text-sm p-2 rounded-b-md">
                <p className=" max-w-[80%] min-w-full bg-[#4A1823] text-white text-center font-black text-xl pb-1">
                  {post.title}
                </p>
                <p className="pb-7">{post.body}</p>
                <p className="absolute bottom-3 left-1/3">
                  {format(parseISO(post._createdAt), 'dd/MMMM/yyyy')}
                </p>
              </div>
              {/* <div className="p-4 rounded-b-md z-100 bg-[#000000]"></div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

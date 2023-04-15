// import Cakelist from '@/components/CakeList'
import { previewData } from 'next/headers'
// import Cakes from '@/pages/Cakes'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import PreviewSuspense from '@/components/PreviewSuspense'
// import PreviewCakeList from '@/components/PreviewCakeList'
import urlFor from '@/lib/urlFor'
import Image from 'next/image'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import Link from 'next/link'
// import { BsWhatsapp } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { motion } from 'framer-motion'
import { useIsomorphicLayoutEffect } from 'framer-motion'
const query = groq`
*[_type == "post"]{
  ...,
author->,
categories[]->
} | order(_createdAt asc)`

type Props = {
  posts: Post[]
}

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
        {/* <PreviewCakeList query={query} /> */}
      </PreviewSuspense>
    )
  }

  const posts = await client.fetch(query)
  return (
    <main className="scrollbar-hide">
      <CakeList posts={posts} />
      {/* <Cakes /> */}
    </main>
  )
}

function CakeList({ posts }: Props) {
  const [isMounted, setIsMounted] = useState(false)
  useIsomorphicLayoutEffect(() => {
    setIsMounted(true)
  }, [])
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  }
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
          {posts.map((post, index) => (
            <div key={index} className="flex flex-col  items-center pb-4 pl-10">
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
                <p className="absolute bottom-3 left-1/3 font-semibold">
                  {format(parseISO(post.publishedAt), 'dd/MMMM/yyyy')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <motion.div
        animate={{ opacity: isMounted ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-8 right-8 z-100"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          animate={{ y: [0, -10, 0] }}
          transition={bounceTransition}
        > */}
      <Link href="https://wa.me/260971080406">
        <ImWhatsapp className="fixed bottom-8 right-8 z-100 text-[#4A1823] text-4xl md:text-5xl " />
      </Link>
      {/* </motion.button>
      </motion.div> */}
    </div>
  )
}
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.')
}

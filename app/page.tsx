import Image from 'next/image'
import logo from '../assets/logo.jpg'
export default function Home() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen p-6">
      <nav className="flex content-between justify-between">
        {/* <h1 className="font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823] w-fit">
          SWEET
        </h1> */}
        <Image
          src={logo}
          alt={'SweetCrumbs Logo'}
          width={80}
          className=" rounded-full"
        />
        <div></div>
      </nav>
      <div className="min-w-full flex items-center flex-col pt-20">
        <span className="font-extrabold text-6xl">For All Those</span> <br />
        <span className="font-extrabold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6AE] to-[#4A1823]">
          SWEET
        </span>
        <br />
        <span className="font-extrabold text-6xl">Moments</span>
      </div>
      <div>
        <p className=" pt-16 px-3 font-bold">
          Get your <span className=" text-[#4A1823]"> CAKE</span> delivered to
          your doorstep within lusaka. We have a wide range of cakes, from
          birthday cakes to wedding cakes. We also have a wide range of flavors
          to choose from.
        </p>
      </div>
      <section className="flex flex-col items-center pt-14">
        <button className=" bg-[#4A1823] px-4 py-2 rounded-lg w-fit font-bold text-[#EFB6AE]">
          Build Your Cake
        </button>
        <span className=" flex flex-col items-center p-4">or</span>
        <button className=" bg-[#4A1823] px-4 py-2 rounded-lg w-fit font-bold text-[#EFB6AE]">
          Choose a Popolar Cake
        </button>
      </section>
    </main>
  )
}

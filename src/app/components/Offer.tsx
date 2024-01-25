import Image from "next/image"
import CountDown from "./CountDown"

const Offer = () => {
  return (
    <div className="h-screen lg:h-[550px] flex flex-col lg:flex-row items-center justify-center gap-6 text-white bg-black lg:bg-[url('/offerBg.png')] lg:bg-cover">
      {/* -------------- Text Container -------------- */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6 text-center">
        <h2 className="text-2xl sm:text-4xl">Delicious Burger & French Fry</h2>
        <p className="md:text-lg text-gray-300 !leading-normal">Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
        <CountDown />
        <button className="py-3 px-8 font-semibold text-white bg-primary-color hover:bg-second-color transition-all duration-200 rounded-lg capitalize">Order Now</button>
      </div>
      {/* -------------- Image Container -------------- */}
      <div className="relative flex-1 w-full h-1/2 lg:h-full">
        <Image src="/offerProduct.png" alt="offerProduct" fill sizes="100%" className="object-contain"/>
      </div>
    </div>
  )
}

export default Offer
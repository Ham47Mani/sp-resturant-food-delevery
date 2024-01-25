import { featuredProducts } from "@/utility/constants"
import Image from "next/image"

const Featured = () => {
  return (
    <div className="features w-screen overflow-x-scroll text-primary-color py-6">
      {/* ------------ Wrapper ------------ */}
      <div className="w-max flex gap-4">
        {
          featuredProducts.map(item => (
            // ------------ Single Item ------------
            <div className="w-screen md:w-96 h-[60vh] flex flex-col items-center gap-6 py-6 border shadow-md hover:bg-fuchsia-50" key={item.id}>
              {/* ------- Image Container ------- */}
              <div className="relative flex-1 w-full">
                <Image src={item.img ? item.img : "/temporary/p1.png"} alt={item.title} fill sizes="100%" className="object-contain hover:scale-110 transition-scale duration-200"/>
              </div>
              {/* ------- Text Container ------- */}
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <h2 className="text-2xl font-bold uppercase tracking-wide">{item.title}</h2>
                {item.desc && <p className="!leading-snug">{item.desc}</p>}
                <span className="text-2xl font-bold">{item.price}</span>
                <button className="py-3 px-5 font-semibold text-white bg-primary-color hover:bg-second-color transition-all duration-200 rounded-lg">Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Featured
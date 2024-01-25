import { pizzas } from "@/utility/constants";
import Image from "next/image";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center text-primary-color px-4 py-8 gap-4">
      {
        pizzas.map(pizza => (
          <Link href={`/product/${pizza.id}`} key={pizza.id} className="w-full md:w-[400px] h-80 border rounded-lg px-4 py-6 flex flex-col gap-4 hover:border-primary-color hover:bg-fuchsia-50 hover:shadow-md transition-all duration-200 group">
            {/* ---------- Image ---------- */}
            {
              pizza.img && (
                <div className="relative w-full h-full">
                  <Image src={pizza.img} alt={pizza.title} fill sizes="100%" className="object-contain hover:scale-110 transition-all duration-300"/>
                </div>
              )
            }
            {/* ---------- Info ---------- */}
            <div className="flex items-center justify-between font-bold h-16">
              <h2 className="text-lg uppercase">{pizza.title}</h2>
              <p className="text-lg group-hover:hidden">$ {pizza.price.toFixed(2)}</p>
              <button className="uppercase hidden group-hover:block p-2 text-white bg-primary-color hover:bg-second-color transition-all duration-200 rounded-lg">Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryPage;
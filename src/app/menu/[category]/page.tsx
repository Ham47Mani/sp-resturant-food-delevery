import { pizzas } from "@/utility/constants";
import { DATARESPONSE, PRODUCT } from "@/utility/types";
import Image from "next/image";
import Link from "next/link";

// Props type
type CategoryPageProps = {
  params: {category: string}
}

// Get All products with conditions
const getProducts = async(categorySlug: string) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${categorySlug}`, {cache: "no-store"});
  if(!res.ok) throw new Error("Failed!!, can not get all products");
  return res.json();
}


const CategoryPage = async ({params}: CategoryPageProps) => {
  const resData: DATARESPONSE = await getProducts(params.category);// Fetch the Products
  const catProducts: PRODUCT[] = resData.data;
  
  return (
    <div className="flex flex-col md:flex-row flex-wrap items-center justify-center text-primary-color px-4 py-8 gap-4">
      {
        catProducts.map(product => (
          <Link href={`/product/${product.id}`} key={product.id} className="w-full md:w-[400px] h-80 border rounded-lg px-4 py-6 flex flex-col gap-4 hover:border-primary-color hover:bg-fuchsia-50 hover:shadow-md transition-all duration-200 group">
            {/* ---------- Image ---------- */}
            {
              product.img && (
                <div className="relative w-full h-full">
                  <Image src={product.img} alt={product.title} fill sizes="100%" className="object-contain hover:scale-110 transition-all duration-300"/>
                </div>
              )
            }
            {/* ---------- Info ---------- */}
            <div className="flex items-center justify-between font-bold h-16">
              <h2 className="text-lg uppercase">{product.title}</h2>
              <p className="text-lg group-hover:hidden">$ {product.price}</p>
              <button className="uppercase hidden group-hover:block p-2 text-white bg-primary-color hover:bg-second-color transition-all duration-200 rounded-lg">Add to Cart</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryPage;
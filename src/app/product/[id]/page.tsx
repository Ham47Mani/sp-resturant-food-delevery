import Price from "@/app/components/Price";
import { singleProduct } from "@/utility/constants";
import Image from "next/image";

const ProductDetailPage = () => {
  return (
    <div className="container p-4 h-screen flex flex-col md:flex-row items-center justify-center gap-8 text-primary-color">
      {/* ----------- Product Image ----------- */}
      {
        singleProduct.img && (
          <div className="relative w-full h-full flex-1">
            <Image src={singleProduct.img} alt={singleProduct.title} sizes="100%" fill className="object-contain"/>
          </div>
        )
      }
      {/* ----------- Product Details ----------- */}
      <div className="flex-1 flex flex-col text-center md:text-start justify-start gap-4">
        <h1 className="text-3xl font-bold md:text-5xl">{singleProduct.title}</h1>
        <p className="text-lg !leading-normal">{singleProduct.desc}</p>
        {/* ----------- Price Details ----------- */}
        <Price price={singleProduct.price} productID={singleProduct.id} options={singleProduct.options}/>
      </div>
    </div>
  )
}

export default ProductDetailPage;
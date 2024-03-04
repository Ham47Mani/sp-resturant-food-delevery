import DeleteButton from "@/app/components/DeleteButton";
import Price from "@/app/components/Price";
import { DATARESPONSE, PRODUCT } from "@/utility/types";
import Image from "next/image";

// ProductDetailPage props type
type ProductDetailPageProps = {
  params: {
    productID: string
  }
}

// Get All categories
const getProduct = async(productID: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${productID}`, {cache: "no-store"});
  if(!res.ok) throw new Error(`Failed!!, can not get the single product (productID: ${productID}`);
  return res.json();
}

const ProductDetailPage = async ({params}: ProductDetailPageProps) => {
  const {productID} = params;
  const resData: DATARESPONSE = await getProduct(productID);
  const product: PRODUCT[] = resData.data;

  return (
    <div className="container p-4 h-screen flex flex-col md:flex-row items-center justify-center gap-8 text-primary-color relative">
      {/* ----------- Product Image ----------- */}
      {
        product[0].img && (
          <div className="relative w-full h-full flex-1">
            <Image src={product[0].img!} alt={product[0].title} sizes="100%" fill className="object-contain"/>
          </div>
        )
      }
      {/* ----------- Product Details ----------- */}
      <div className="flex-1 flex flex-col text-center md:text-start justify-start gap-4">
        <h1 className="text-3xl font-bold md:text-5xl">{product[0].title}</h1>
        <p className="text-lg !leading-normal">{product[0].desc}</p>
        {/* ----------- Price Details ----------- */}
        <Price product={product[0]} />
      </div>
      <DeleteButton productID={product[0].id}/>
    </div>
  )
}

export default ProductDetailPage;
"use client";
import { useCartStore } from "@/utility/store";
import { useEffect } from "react";
import Image from "next/image";

const CartPage = () => {
  // Get information from state
  const {products, totalItems, totalPrice, removeFromCart} = useCartStore();

  // SkepHaydration
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col text-primary-color md:flex-row container px-4 py-7">
      {/* ------------- Products Container ------------- */}
      <div className="h-1/2 md:h-auto flex-1 p-4 flex flex-col gap-6 justify-start">
        {
          /* ------ Single Product ------ */
          products.map(product => (
            <div className="flex items-center justify-between p-4 border rounded-lg shadow-md" key={product.id}>
              {/* --- Photo --- */}
              {product.img && (
                <div className="relative w-12 h-12 sm:w-28 sm:h-28">
                  <Image src={product.img || "/temporary/p1.png"} alt={product.title} fill sizes="100%" />
                </div>
              )}
              {/* --- Text --- */}
              <div className="flex flex-col justify-center items-start">
                <h2 className="text-lg md:text-2xl uppercase font-semibold tracking-wider">{product.title} X{product.quantity}</h2>
                {product.optionTitle && <p>{product.optionTitle}</p>}
              </div>
              <p className="text-xl uppercase font-semibold text-second-color">${Math.round(product.price * 100) / 100}</p>
              <span className="text-2xl w-10 h-10 flex items-center justify-center rounded-full text-white bg-primary-color hover:bg-second-color transition-all duration-200 cursor-pointer" onClick={() => removeFromCart(product)}>X</span>
            </div>
          ))
        }
      </div>
      {/* ------------- Payment Container ------------- */}
      <div className="h-1/2 md:h-auto p-7 bg-fuchsia-50 lg:w-1/3 flex flex-col gap-4">
        {/* --- Total Price without calc --- */}
        <div className="flex items-center justify-between font-semibold gap-2">
          <span className="capitalize">{`Subtotal (${totalItems} items):`}</span>
          <span className="text-lg">${Math.round(totalPrice * 100) / 100}</span>
        </div>
        {/* --- Cost --- */}
        <div className="flex items-center justify-between font-semibold gap-2">
          <span className="capitalize">Service Cost:</span>
          <span className="text-lg font-normal">$0.00</span>
        </div>
        {/* --- Delivery --- */}
        <div className="flex items-center justify-between font-semibold gap-2">
          <span className="capitalize">Delivery Cost:</span>
          <span className="text-lg uppercase font-normal text-green-500">Free!</span>
        </div>
        <hr className="border-second-color my-2"/>
        {/* --- Total Price After calc --- */}
        <div className="flex items-center justify-between font-semibold gap-2">
          <span className="capitalize">Total (INCL. VAT):</span>
          <span className="text-lg font-bold">${Math.round(totalPrice * 100) / 100}</span>
        </div>
        <button className="py-3 px-10 w-fit self-end bg-primary-color text-white rounded-lg hover:bg-second-color transition-all duration-200">Checkout</button>
      </div>
      <div className=""></div>
    </div>
  )
}

export default CartPage;
"use client";
import { PRODUCT } from "@/utility/types"
import { useEffect, useState } from "react";

interface priceProps {
  price: number,
  productID: number,
  options?: { title: string; additionalPrice: number }[];
}

const Price = ({price, productID, options}: priceProps) => {
  const [total, setTotal] = useState<number>(price);// Total price
  const [quantity, setQuantity] = useState<number>(1);// quantity
  const [selected, setSelected] = useState<number>(0);// Index of option selected
  // Check if any change in quantity & option than calculate the new total price
  useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price));
  }, [selected, quantity, price, options]);

  return (
    <div className="flex flex-col justify-center gap-6">
      {/* ------ Price ------ */}
      <p className="text-3xl font-bold">${total.toFixed(2)}</p>
      {/* ------ Options ------ */}
      <div className="flex items-center justify-center md:justify-start gap-4">
        {
          options && options.map((option, index) => (
            <button className={`p-3 min-w-[6rem] rounded-lg border font-semibold border-primary-color hover:bg-primary-color hover:text-white duration-200 transition-all ${selected === index ? "bg-primary-color text-white" : ""}`} key={index} onClick={() => setSelected(index)}>
              {option.title}
            </button>
          ))
        }
      </div>
      {/* ------ Quantity & Add Buton ------ */}
      <div className="flex justify-between items-center border border-primary-color rounded-lg">
        {/* ------ Quantity ------ */}
        <div className="flex items-center justify-between flex-1 py-1 px-3 font-semibold">
          <span className="flex-1">Quantity</span>
          <div className="flex items-center justify-end gap-4 flex-1">
            <button className="h-8 w-8 rounded-full flex items-center justify-center bg-primary-color text-white transition-all duration-0 hover:bg-second-color" onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{`<`}</button>
            <span className='text-lg font-semibold'>{quantity < 10 ? `0${quantity}` : quantity}</span>
            <button className="h-8 w-8 rounded-full flex items-center justify-center bg-primary-color text-white transition-all duration-0 hover:bg-second-color" onClick={() => setQuantity(prev => (prev < 10 ? prev + 1 : 10))}>{`>`}</button>
          </div>
        </div>
        {/* ------ Add to Cart button ------ */}
        <button className="py-3 px-3 bg-primary-color hover:bg-second-color text-white font-semibold transition-all duration-200">Add to Cart</button>
      </div>
    </div>
  )
}

export default Price
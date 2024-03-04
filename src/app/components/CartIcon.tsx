"use client";
import { useCartStore } from "@/utility/store";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const CartIcon = () => {
  // Get information from state
  const {totalItems} = useCartStore();

  // SkepHaydration
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  
  return (
    <Link href="/cart" className="flex items-center gap-2 md:gap-1 min-w-fit">
      <div className="relative w-8 h-8 md:w-6 md:h-6">
        <Image src="/cart.png" alt="Cart icon" fill sizes="32"/>
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  )
}

export default CartIcon
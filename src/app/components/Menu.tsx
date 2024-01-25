"use client";
import { homeNavLink } from "@/utility/constants";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const user = false;
  return (
    <div className="">
      <Image src={open ? "/close.png" : "/open.png"} alt={open ? "close image" : "open image"} width={25} height={25} onClick={_ => setOpen(!open)} className="w-auto h-auto cursor-pointer"/>
      {
        open &&
        <div className="bg-primary-color text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex items-center justify-center flex-col gap-3 z-10">
          {
            homeNavLink.map(item => (
              <Link href={item.link} key={item.id} className="capitalize text-center p-3 w-full transition-all duration-300 hover:ps-12 hover:bg-white hover:text-primary-color hover:font-semibold" onClick={_ => setOpen(!open)}>{item.name}</Link>
            ))
          }
          {
            !user ?
              <Link href="/login" className="capitalize text-center p-3 w-full transition-all duration-300 hover:ps-12 hover:bg-white hover:text-primary-color hover:font-semibold" onClick={_ => setOpen(!open)}>Login</Link>
            :
              <Link href="/orders" className="capitalize text-center p-3 w-full transition-all duration-300 hover:ps-12 hover:bg-white hover:text-primary-color hover:font-semibold" onClick={_ => setOpen(!open)}>Orders</Link>
          }
          <div className="capitalize flex items-center justify-center p-3 w-full transition-all duration-300 hover:ps-12 hover:bg-white hover:text-primary-color hover:font-semibold" onClick={_ => setOpen(!open)}>
            <CartIcon />
          </div>
        </div>
      }
    </div>
  )
}

export default Menu
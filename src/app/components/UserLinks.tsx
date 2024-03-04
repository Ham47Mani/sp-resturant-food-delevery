"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const {status} = useSession();

  return (
    <>
      {
        status === "authenticated" ?
          <div>
            <Link href="/orders" className="transition-all hover:text-second-color duration-100">Orders</Link> 
            <span className="ms-4 cursor-pointer" onClick={()=> signOut()}>Logout</span>
          </div>
        :
          <Link href="/login" className="transition-all hover:text-second-color duration-100">Login</Link>
      }
    </>
  )
}

export default UserLinks
"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type DeleteButtonProps = {
  productID: string
}

const DeleteButton = ({productID}: DeleteButtonProps) => {
  const {data: session, status} = useSession();// Get auth information
  const router = useRouter();// Get userouter hook for redirect

  // Handle delete item
  const handleDelete = async() => {
    try {
      const res = await fetch(`http://localhost:3000/api/products/${productID}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      });
      if(res.status === 200) {
        toast.success("The product has been deleted!!");
        router.push("/menu");
      } else {
        const data = await res.json();
        toast.error(data.message);
      }
    } catch (error) {
      console.log("Delete method error (Button Delete Component)");
      
    }
    
  }

  if (status === "loading") return <p>Loading...</p>
  if (status === "unauthenticated" || !session?.user.isAdmin) return;
  return (
    <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4" onClick={handleDelete}>
      <Image src="/delete.png" alt="delete icon" width={20} height={20} />
    </button>
  )
}

export default DeleteButton
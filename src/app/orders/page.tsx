"use client";
import { ORDER } from "@/utility/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo } from "react";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from "react-toastify";

const OrdersPage = () => {
  // Check if user is authenticate, if not redirect it to the home page
  const router = useRouter();
  const {data: session, status} = useSession();
  if (status === "unauthenticated") {
    router.push('/');
  }

  // Get (isLoading, data and error) using react query
  const {isLoading, data, error} = useQuery({
    queryKey: ['orders'],
    queryFn: () => fetch('http://localhost:3000/api/orders').then(
      (res) => res.json()
    )
  });
  // Get orders from response
  const orders = useMemo(() => {
    if(!isLoading) {
      return data.data
    }
  }, [data, isLoading]);

  // Create an query client
  const queryClient = useQueryClient();

  // UseMutation for update order status and update data without refresh the page
  const mutation = useMutation({
    mutationFn: async({orderID, status}:{orderID: String, status: String}) => {
      return fetch(`http://localhost:3000/api/orders/${orderID}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status)
      }).then((res) => res.json());
    },
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['orders']});
    }
  });

  // Handle status order update
  const handleUpdate = async (e: FormEvent<HTMLFormElement>, orderID: String) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;
    mutation.mutate({orderID, status});
    toast.success('The order status has been changed!!')
  };

  // Check if data is loading showing "Loading..."
  if (isLoading || status == "loading") return 'Loading...';

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-1">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            orders && orders.map((order: ORDER) =>(
              <tr className={`text-sm md:text-base ${order.status !== "delivered" && "bg-primary-color bg-opacity-20"}`} key={order.id}>
                <td className="hidden md:block py-3 px-2 my-2">{order.id}</td>
                <td className="py-3 px-2">{order.createAt.toString().slice(0,10)}</td>
                <td className="py-3 px-2">{order.price}</td>
                <td className="hidden md:block py-3 px-2">
                  {order.products[0].title}
                </td>
                <td className="py-3 px-2">
                  {session?.user.isAdmin ? (
                    <form className="flex gap-2 items-center" onSubmit={(e) => handleUpdate(e, order.id)}>
                      <input type="text" placeholder={order.status} className="p-2 ring-1 ring-red-100 rounded-md"/>
                      <button className="bg-red-400 p-2 rounded-full">
                        <Image src="/edit.png" alt="edit icon" width={20} height={20} />
                      </button>
                    </form>
                  ) : 
                    order.status
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage;
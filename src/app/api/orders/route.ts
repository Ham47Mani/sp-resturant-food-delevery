import { getAuthSession } from "@/utility/auth";
import { prisma } from "@/utility/connect";
import { responseData } from "@/utility/response";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";


// ========================== Get all orders ==========================
export const GET = async () => {
  const session = await getAuthSession();// Get the session

  if (session) {
    try {
      if (session.user.isAdmin) {
        // Get all orders because user authenticat is admin
        const orders = await prisma.order.findMany({});
        if(!orders) return new NextResponse(responseData(`There's no orders`), {status: 200});
        return new NextResponse(responseData("All orders", orders),{status: 200});
      }
      // Get user orders
      const orders = await prisma.order.findMany({
        where: {
          userEmail: session.user.email!
        }
      })
      if(!orders) return new NextResponse(responseData(`There's no orders`), {status: 200});
      return new NextResponse(responseData("All orders", orders),{status: 200});
    } catch (err: any) {
      console.log("Get order error, ", err);
      return new NextResponse(responseData("Get Order Error"),{status: 500});
    }
  } else {
    console.log("There's no session");
    return new NextResponse(responseData("You are not authenticated!!"),{status: 401});
  }
}
import { prisma } from "@/utility/connect";
import { responseData } from "@/utility/response";
import { NextRequest, NextResponse } from "next/server";

// ========================== Get status order ==========================
export const PUT = async (req: NextRequest , {params}: {params: {id: string}}) => {
  const {id} = params;
  
  try {
    const body = await req.json();// Get request body in json
    const updateOrder = await prisma.order.update({// Update order
      where: { id: id }, data: { status: body }
    })
    return new NextResponse(responseData("Order status has been updated", [updateOrder]),{status: 200});
  } catch (err: any) {
    console.log("Update order status error, ", err);
    return new NextResponse(responseData("Update order status error"),{status: 500});
  }
}
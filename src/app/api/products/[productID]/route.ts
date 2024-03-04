import { getAuthSession } from "@/utility/auth";
import { prisma } from "@/utility/connect";
import { responseData } from "@/utility/response";
import { NextRequest, NextResponse } from "next/server";

// ========================== Get a single product ==========================
export const GET = async (req: NextRequest , {params}: {params: {productID: string}}) => {
  const {productID} = params;
  
  try {
    const product = await prisma.product.findUnique({// Get Product
      where: { id: productID }
    })
    if (!product) return new NextResponse(responseData("This product not exists"),{status: 404});
    return new NextResponse(responseData(`Product (${product!.title})`, [product]),{status: 200});
  } catch (err: any) {
    console.log("Update order status error, ", err);
    return new NextResponse(responseData("Update order status error"),{status: 500});
  }
}

// ========================== Delete a single product ==========================
export const DELETE = async (req: NextRequest , {params}: {params: {productID: string}}) => {
  const {productID} = params;
  
  try {
    const session = await getAuthSession();
    if(session?.user.isAdmin) {

    }
    if (!session?.user.isAdmin) return new NextResponse(responseData("Anouthorized!! - You can't delete product"),{status: 403});
    await prisma.product.delete({// Get Product
      where: { id: productID }
    });
    return new NextResponse(responseData(`Product has been deleted!!`,),{status: 200});
  } catch (err: any) {
    console.log("Update order status error, ", err);
    return new NextResponse(responseData("Update order status error"),{status: 500});
  }
}
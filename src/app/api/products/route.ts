import { prisma } from "@/utility/connect";
import { responseData } from "@/utility/response";
import { NextRequest, NextResponse } from "next/server";

// ========================== Get all products ==========================
export const GET = async (req: NextRequest) => {
  const {searchParams} = new URL(req.url);// Get search params
  const cat = searchParams.get("cat");// Get category param

  try {
    // Get all categories from category model
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? {catSlug: cat} : {isFeatured: true})
      }
    });
    if(!products) return new NextResponse(responseData(`There's no products`), {status: 200});
    return new NextResponse(responseData("All products", products), {status: 200});
  } catch (err: any) {
    console.log("Faild!! Get Products Error: ", err);
    return new NextResponse(responseData(`Get products error: ${err}`), {status: 500});
  }
}

// ========================== Add a products ==========================
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();// Get the request body    
    const product = await prisma.product.create({// Create a product
      data: body
    })
    return new NextResponse(responseData("All products", [product]), {status: 201});
  } catch (err: any) {
    console.log("Faild!! Get Products Error: ", err);
    return new NextResponse(responseData(`Create a product error: ${err}`), {status: 500});
  }
}
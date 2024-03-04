import { prisma } from "@/utility/connect";
import { responseData } from "@/utility/response";
import { NextResponse } from "next/server";


// ========================== Get all categories ==========================
export const GET = async () => {

  try {
    const categories = await prisma.category.findMany();// Get all categories from category model
    if(!categories) return new NextResponse(responseData(`There's no products`), {status: 200});
    return new NextResponse(responseData("All categories", categories),{status: 200});
  } catch (err: any) {
    console.log("Get categories error, ", err);
    return new NextResponse(responseData(`Error : ${err}`),{status: 500});
  }
}
import { DATARESPONSE, MENUCATEGORY } from "@/utility/types";
import Link from "next/link";

// Get All categories
const getCategories = async() => {
  const res = await fetch("http://localhost:3000/api/categories", {cache: "no-store"});
  if(!res.ok) throw new Error("Failed!!, can not get all categories");
  return res.json();
}

const MenuPage = async () => {
  const resData: DATARESPONSE = await getCategories();
  const menuCategory: MENUCATEGORY = resData.data;
  
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:h-[calc(100vh-6rem)] p-4 xl:px-32 gap-6">
      {
        menuCategory.map(category => (
          <Link href={`/menu/${category.slug}`} key={category.id} className="w-full lg:min-h-1/3 bg-cover p-8 border rounded-lg hover:shadow-md" style={{backgroundImage: `url(${category.img})`}}>
            <div className={`text-${category.color}`}>
              {/* -------- Title -------- */}
              <h2 className="uppercase text-3xl font-semibold tracking-wide">{category.title}</h2>
              <p className="py-8 text-lg">{category.desc}</p>
              <button className={`hidden lg:block p-3 px-5 rounded-lg font-semibold hover:tracking-widest transition-all duration-300 ${category.color === "black" ? "text-white bg-black" : "text-primary-color bg-white"}`}>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuPage;
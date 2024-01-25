import { menuCategory } from "@/utility/constants";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen lg:h-[calc(100vh-6rem)] p-4 xl:px-32 gap-6">
      {
        menuCategory.map(category => (
          <Link href={`/menu/${category.slug}`} key={category.id} className="w-full lg:h-1/3 bg-cover p-8 border rounded-lg hover:shadow-md" style={{backgroundImage: `url(${category.img})`}}>
            <div className={`text-${category.color}`}>
              {/* -------- Title -------- */}
              <h2 className="uppercase text-3xl font-semibold tracking-wide">{category.title}</h2>
              <p className="py-8 text-lg">{category.desc}</p>
              <button className={`hidden lg:block bg-${category.color} p-3 px-5 rounded-lg text-${category.color === "black" ? "white" : "primary-color"} font-semibold hover:tracking-widest transition-all duration-300`}>Explore</button>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default MenuPage;
import Link from "next/link"
import Menu from "./Menu"
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

const Header = () => {
  
  return (
    <div className="border-b-2 border-primary-color">
      <div className="container flex justify-between items-center h-12 md:h-16 p-4 text-primary-color">
        {/* ------- Large Screen Left Menu ------- */}
        <div className="hidden md:flex gap-6 font-semibold items-center flex-1">
          <Link href="/" className="transition-all hover:text-second-color duration-100">Home</Link>
          <Link href="/menu" className="transition-all hover:text-second-color duration-100">Menu</Link>
          <Link href="/contact" className="transition-all hover:text-second-color duration-100">Contact</Link>
        </div>
        {/* ------- Logo ------- */}
        <div className="flex-1 md:text-center">
          <Link href="/" className="text-lg md:text-2xl uppercase font-bold hover:text-second-color tracking-widest">SP-Food</Link>
        </div>
        {/* ------- Mobile Menu ------- */}
        <div className="md:hidden flex-1 flex justify-end">
          <Menu />
        </div>
        {/* ------- Large Screen Right Menu ------- */}
        <div className="hidden md:flex gap-6 font-semibold items-center justify-end flex-1">
          <div className="absolute top-1 right-1 text-xs lg:static flex items-center gap-1 bg-primary-color p-2 rounded-lg text-white cursor-pointer min-w-fit">
            <Image src="/phone.png" alt="phone icon" width={24} height={24}/>
            <span className="tracking-wider">(+213) 777-586-919</span>
          </div>
          <UserLinks />
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
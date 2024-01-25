import Link from "next/link"

const Footer = () => {
  return (
    <div className="h-12 md:h-16 p-4 border-t border-primary-color">
      <div className="container flex justify-between items-center text-primary-color">
        <Link href="/" className="text-sm sm:text-2xl uppercase font-bold hover:text-second-color tracking-widest">SP-Food</Link>
        <p className="text-xs sm:text-base font-semibold">&#169; All right reserver Spainder Tech(Ham47Mani)</p>
      </div>
    </div>
  )
}

export default Footer
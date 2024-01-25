"use client";
import { homeSlideData } from "@/utility/constants"
import Image from "next/image"
import { useEffect, useState } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  // Change slide item every 3 seconds
  useEffect(() => {
    const interval = setInterval(_ => setCurrentSlide(prev => (prev === homeSlideData.length - 1) ? 0 : prev + 1), 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)]">
      {/* ----------- Text Container ----------- */}
      <div className="flex items-center justify-center flex-col gap-8 flex-1 text-primary-color font-bold bg-fuchsia-50">
        {/* ----- Title ----- */}
        <h1 className="text-2xl lg:text-4xl text-center uppercase p-4 !leading-normal">{homeSlideData[currentSlide].title}</h1>
        {/* ----- Button ----- */}
        <button className="capitalize bg-primary-color text-white hover:bg-second-color transition-colors duration-200 py-4 px-8 rounded-lg">Order Now</button>
      </div>
      {/* ----------- Image Container ----------- */}
      <div className="flex-1 relative">
        <Image src={homeSlideData[currentSlide].image} alt="slide image" fill sizes="100%" className="object-cover"/>
      </div>
    </div>
  )
}

export default Slider
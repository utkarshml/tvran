"use client";
import Image from "next/image";
import sponsorBanner from "../img/sponsors_banner.webp"
import SponsorsImg from "../img/Group 13.png";



function Sponsors() {
  return (
    <div className="relative h-full p-8 flex items-center justify-center overflow-hidden">
    {/* Background Image */}
    <Image
      src={sponsorBanner}
      alt="Hero background"
      fill
      priority
      className="object-cover"
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-65"> </div>
    
    {/* Content */}
    <div  className="  relative z-10 flex flex-col p-4 min-h-[90vh] bg-black bg-opacity-65  rounded-lg   m-auto    w-full  px-4 sm:px-6 lg:px-8">
     <h1 className="lg:text-4xl md:text-2xl  uppercase font-bold text-white text-start">
      <span className="text-[#00EF38]">Our</span> Past <br/> <span className="text-[#00EF38]">Sponsors</span>
     </h1>
       <div className="w-full h-full flex items-center justify-center p-4">
        <Image   src={SponsorsImg} alt="sponsors" />
       </div>
      

    </div>
  </div>
  )
}

export default Sponsors;
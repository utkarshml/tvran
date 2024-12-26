import Image from "next/image";
import sponsorBanner from "../img/sponsors_banner.webp"



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
     <h1 className="text-4xl uppercase font-bold text-white text-start">
      <span className="text-[#00EF38]">Our</span> Past <br/> <span className="text-[#00EF38]">Sponsors</span>
     </h1>
     <div className="absolute flex justify-center items-center bg-white rounded-full bottom-[14.5rem] w-[15rem] h-[15rem]  right-3">

      </div>
      <div className="absolute flex justify-center items-center rounded-full bottom-4 w-[12rem] h-[12rem] bg-gradient-to-r from-[#00EF38] to-[#00B785] right-4">
      <div className="w-[150px] h-[150px] bg-white rounded-full flex justify-center items-center">

      </div>
      </div>
      <div className="absolute flex justify-center items-center rounded-full bottom-[7rem] w-[11rem] h-[11rem] bg-white right-[14rem]">
      </div>

      

    </div>
  </div>
  )
}

export default Sponsors;
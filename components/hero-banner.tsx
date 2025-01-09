"use client";
import Image from 'next/image'
import Link from 'next/link'
import bannerImg from "../app/img/banner.jpeg"
import tvranLogo from "../app/img/tvranLogo.png"
import bannerSportImg from "../app/img/svgviewer-png-output.png"
export default function HeroBanner() {
  return (
    <div className="relative h-full p-8 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bannerImg}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-85">
        
      </div>
      
      {/* Content */}
      <div className=" z-10 text-center  text-white px-4 sm:px-6 lg:px-8">
      <div className="imgs">
      <Image
          src={tvranLogo}
        
          alt="Hero background"
          
          style={{
            position : "relative"
          }}
         
          className="object-cover  m-auto lg:h-[250px] lg:w-[450px] "
        />
      </div>
  
        <div className="text-xl sm:text-2xl md:text-3xl mb-8">
        <Image
          src={bannerSportImg}
        
          alt="Hero background"
          
          style={{
            position : "relative"
          }}
         
          className="object-cover m-auto lg:h-[250px] lg:w-fit"
        />
        </div>
        <div className='text-xl sm:text-2xl font-bold md:text-3xl mb-8'>
            <p className="font-racing" >ULTIMATE BATTLE OF <span className='text-[#00EF38]'>SPORTSMANSHIP.</span> </p>
        </div>
        <Link 
          target='_blank'
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJf9lO6l1GeCDVwAN2aAKiM8r18incsXzfAm111M0T1dPRZQ/viewform?usp=dialog" 
          className="inline-block bg-transparent border-2 uppercase border-[#c4691f] hover:bg-[#c4691f] hover:bg-opacity-75 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Register Now
        </Link>
      </div>
    </div>
  )
}


"use client"
import Image from "next/image"
import eventBanner from "../img/event_banner-min.jpeg"
import { MatchCard } from "@/components/match-cards"
import { EventsData } from "../event"

import Link from "next/link"
// const matches  : MatchInfo[] = [
//     {
//       id:"1",
//       icon : <Trophy />,
//       eventName:"Badminton Tournament",
//       captainName:"John Doe",
//       captainEmail:"lHtYX@example.com",
//       captainNumber:"1234567890",
//       captianGender:"M",
//       sustituteName:"Jane Doe",
//       sustituteEmail:"5Cg9z@example.com",
//       sustituteNumber:"0987654321",
//       sustituteGender:"F",
//     }

//     // Add more matches as needed
//   ]
  

function Events() {
  return (
    <div className="relative h-full  lg:px-12 p-8 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={eventBanner}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"> </div>
      
      {/* Content */}
      <div className=" z-10 flex flex-col   w-full   lg:px-8">
     <div className="w-full flex justify-between items-center">
     <h2 className="text-[#00EF38] uppercase font-bold text-start text-3xl">Events</h2>
     <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdJf9lO6l1GeCDVwAN2aAKiM8r18incsXzfAm111M0T1dPRZQ/viewform?usp=dialog"  className="inline-block bg-transparent border-2 uppercase border-[#c4691f] hover:bg-[#c4691f] hover:bg-opacity-75 text-white font-bold py-3 px-8 rounded-xl transition duration-300">Register</Link>
     </div>
     <div className="flex flex-row flex-wrap rounded-md mt-7 p-7 gap-6 bg-gray-900 bg-opacity-65 items-center justify-center">
{EventsData.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
</div>
        

      </div>
    </div>
  )
}

export default Events
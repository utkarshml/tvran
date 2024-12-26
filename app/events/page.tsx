import Image from "next/image"
import eventBanner from "../img/event_banner-min.jpeg"
import { MatchCard } from "@/components/match-cards"

const matches = [
    {
      id: '1',
      team1: 'Team A',
      team2: 'Team B',
      score1: 2,
      score2: 1,
      date: '2023-06-15',
      time: '15:00',
      venue: 'Stadium X'
    },
    {
      id: '2',
      team1: 'Team C',
      team2: 'Team D',
      score1: 0,
      score2: 0,
      date: '2023-06-16',
      time: '18:30',
      venue: 'Stadium Y'
    },
    // Add more matches as needed
  ]
  

function Events() {
  return (
    <div className="relative h-full p-8 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={eventBanner}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-65"> </div>
      
      {/* Content */}
      <div className=" z-10 flex flex-col   w-full  px-4 sm:px-6 lg:px-8">
     <div className="w-full">
     <h2 className="text-[#00EF38] uppercase font-bold text-start text-3xl">Events</h2>
     </div>
     <div className="flex flex-row flex-wrap rounded-md mt-7 p-7 gap-6 bg-black items-center justify-center">
{matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
</div>
        

      </div>
    </div>
  )
}

export default Events
'use client'

import React, { ReactElement, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Separator } from './ui/separator'

export interface MatchInfo {
  id : string,
   icon : ReactElement<SVGAElement>,
   eventName : string,
   captainName : string,
   captainNumber : string,
   captainEmail : string,
   captianGender : string,
   sustituteName : string,
   sustituteNumber : string,
   sustituteEmail : string,
   sustituteGender : string,
   
}

interface MatchCardProps {
  match: MatchInfo
}

export function   MatchCard({ match }: MatchCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="bg-white w-[18rem] rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        {React.cloneElement(match.icon, { className: "w-24 h-24 mx-auto text-[#00EF38]" })}
        <h2 className="text-2xl font-bold text-center mt-4 text-[#00EF38]">{match.eventName}</h2>
      </div>

      <Dialog  open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className='bg-gray-900'>
          <DialogHeader>
            <DialogTitle className='text-white'><div className='flex items-center w-fit gap-5 my-5'>
            {React.cloneElement(match.icon, { className: "w-7 h-7 mx-auto text-[#00EF38]" })}
              <span className='ml-2 text-[#00EF38]'>{match.eventName}</span>
              </div></DialogTitle>
            
            <DialogDescription>  <Separator/></DialogDescription>
          </DialogHeader>
        <div>
          <h2 className='text-xl font-bold'>CAPTAIN</h2>
          <div className='mt-5'>
            <div className='' >Captain Name </div>
            <div className='text-[#00EF38]'>{match.captainName}</div>
            <div>{match.captainNumber}</div>
            <div>{match.captainEmail}</div>
          </div>
          <div className='mt-5'>
        
            <div>Substitute Name</div>
            <div className='text-[#00EF38]'>{match.sustituteName}</div>
            <div>{match.sustituteNumber}</div>
            <div>{match.sustituteEmail}</div>
          </div>
        </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


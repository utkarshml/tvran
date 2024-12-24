'use client'

import { useState } from 'react'
import { Trophy } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

interface MatchInfo {
  id: string
  team1: string
  team2: string
  score1: number
  score2: number
  date: string
  time: string
  venue: string
}

interface MatchCardProps {
  match: MatchInfo
}

export function MatchCard({ match }: MatchCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        <Trophy className="w-24 h-24 mx-auto text-[#800080]" />
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{match.team1} vs {match.team2}</DialogTitle>
            <DialogDescription>Match Details</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-2">
            <p><strong>Score:</strong> {match.score1} - {match.score2}</p>
            <p><strong>Date:</strong> {match.date}</p>
            <p><strong>Time:</strong> {match.time}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


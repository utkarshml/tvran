import Image, { StaticImageData } from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

interface SocialLink {
  type: string
  url: string
}

interface TeacherCardProps {
  name: string
  role: string
  imageUrl: string | StaticImageData
  socialLinks: SocialLink[]
}

const SocialIcon = ({ type }: { type: SocialLink['type'] }) => {
  switch (type) {
    case 'twitter':
      return <Twitter className="w-4 h-4" />
    case 'linkedin':
      return <Linkedin className="w-4 h-4" />
    case 'email':
      return <Mail className="w-4 h-4" />
  }
}

export function TeacherCard({ name, role, imageUrl, socialLinks }: TeacherCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{role}</p>
        <div className="flex space-x-2">
          {socialLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.url}
              className="text-muted-foreground hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon type={link.type} />
              <span className="sr-only">
                {link.type === 'email' ? 'Email' : `${link.type.charAt(0).toUpperCase() + link.type.slice(1)} profile`} for {name}
              </span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}


"use client";
import Link from 'next/link'
import TvranLogo from "../app/img/tvranLogo.png"
import { Instagram,  Youtube } from 'lucide-react'
import knitLogo from "../app/img/dd2fd02f515ce28eae182b93cf9602cc.png"
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'About', href: '/about' },
  { name: 'Contact us', href: '/contact' },
]



export function Footer() {
  return (
    <footer className="bg-black   ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center">
              <Image src={TvranLogo} alt="Tvaran" width={150} height={100} />
            </Link>
         
            <div className="mt-8  md:mt-0">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Connect with us</h3>
            <div className="flex mt-4 space-x-6">
              <Link href="" className="text-white hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Tvaran, KNIT Sultanpur</span>
                <Youtube className="h-6 w-6" />
              </Link>
     
              <Link href="https://www.instagram.com/tvaran.knit/" className="text-white hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>

            </div>
          </div>
          </div>
          
          <div className="mt-4 w-full md:mt-0">
            <h3 className="text-sm font-semibold text-[#FBCA40] uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-white hover:text-gray-500">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-[#FBCA40]  uppercase tracking-wider">Queries and Feedback</h3>
            <ul className="mt-4 space-y-4">
              
                {/* <li >
                  <span  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Converers&apos;name
                  </span>
                </li> */}
                <li >
                  <span  className="text-base text-white hover:text-gray-600">
                  MOB. 8755336299
                  </span><br/>
                  <span  className="text-base text-white hover:text-gray-600">
                  MOB. 9555793012
                  </span>
                </li>
                <li >
                  <span  className="text-base text-white hover:text-gray-600">
                  tvaran@knit.ac.in
                  </span>
                </li>
                <li >
                  <Image src={knitLogo} alt="knit" width={100} height={100} />

                </li>
        
            </ul>
          </div>
          
      
        </div>
      </div>
      <Separator className='bg-gray-600 mx-3  h-[1px]' />
      <div className='w-full text-center pt-4 pb-8'>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              © 2025 TvRan. All rights reserved.
     </p>
      </div>
 
    </footer>
  )
}


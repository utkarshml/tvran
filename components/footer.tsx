import Link from 'next/link'
import TvranLogo from "../app/img/tvranLogo.png"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import knitLogo from "../app/img/dd2fd02f515ce28eae182b93cf9602cc.png"
import Image from 'next/image'
import { Separator } from '@radix-ui/react-separator'

const companyLinks = [
  { name: 'About', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Press', href: '/press' },
]



export function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center">
              <Image src={TvranLogo} alt="Your Company" width={150} height={100} />
            </Link>
         
            <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Connect with us</h3>
            <div className="flex mt-4 space-x-6">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          </div>
          
          <div className="mt-4 w-full md:mt-0">
            <h3 className="text-sm font-semibold text-[#FBCA40] uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-[#FBCA40]  uppercase tracking-wider">Convener</h3>
            <ul className="mt-4 space-y-4">
              
                {/* <li >
                  <span  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                    Converers&apos;name
                  </span>
                </li> */}
                <li >
                  <span  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  +91 93838399383
                  </span>
                </li>
                <li >
                  <span  className="text-base text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  tvran@knit.ac.in
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


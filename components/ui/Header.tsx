'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import TvranLogo from "../../app/img/tvranLogo.png"
import { Menu, X } from 'lucide-react'
import { DarkModeToggle } from '../dark-mode'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Events', href: '/events' },
  { name: 'About', href: '/about' },
  { name: 'Matches', href: '/matches' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-black dark:bg-opacity-50 shadow-md">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex justify-between w-full items-center">
            <Link href="/">
              {/* <svg className="h-10 w-auto text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              <Image src={TvranLogo} alt="Your Company" width={120} height={100} />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-bold uppercase  ${
                    pathname === link.href
                      ? 'text-[#00EF38]'
                      : 'text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  } relative group`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#00EF38]  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : ''
                  }`} />
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
            <div className="lg">
              <DarkModeToggle/>
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black dark:bg-opacity-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
              <Link href="/">
              {/* <svg className="h-10 w-auto text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg> */}
              <Image src={TvranLogo} alt="Tvran" width={120} height={100} />
            </Link>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        pathname === link.href
                          ? 'text-[#00EF38]'
                          : 'text-gray-900 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-700'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
        
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


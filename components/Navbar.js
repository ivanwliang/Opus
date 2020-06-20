import React from 'react'
import Link from 'next/link'

import { useAuth } from '../hooks/use-auth'

import Logo from './Logo'

const Navbar = () => {
  const auth = useAuth()

  return (
    <nav className="bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="flex items-center justify-start sm:items-stretch">
            <Logo />
          </div>

          {/* Navbar right side */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="/signin">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                >
                  Sign In
                </button>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

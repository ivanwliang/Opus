import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from './Logo'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between h-16">
          <div className="flex items-center justify-start sm:items-stretch">
            <Logo />
          </div>

          {/* Navbar right side */}
          {router.pathname !== '/signup' && router.pathname !== '/signin' && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/signin">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                  >
                    Sign In
                  </button>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

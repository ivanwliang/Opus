import React from 'react'
import Link from 'next/link'

const Logo = () => {
  return (
    // Opus Logo
    <div className="flex-shrink-0 flex items-center">
      <svg
        className="block h-10 w-10 text-indigo-600"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
      <Link href="/">
        <a className="ml-2 text-3xl font-bold">Opus</a>
        {/* <img
      className="block lg:hidden h-8 w-auto"
      src="/img/logos/workflow-mark-on-white.svg"
      alt="Workflow logo"
    />
    <img
      className="hidden lg:block h-8 w-auto"
      src="/img/logos/workflow-logo-on-white.svg"
      alt="Workflow logo"
    /> */}
      </Link>
    </div>
  )
}

export default Logo

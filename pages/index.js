import React, { useEffect } from 'react'

import PublicLayout from '../layouts/PublicLayout'
import { useAuth } from '../hooks/use-auth'
import { db } from '../lib/firebase'

const Home = () => {
  const auth = useAuth()

  useEffect(() => {
    const fetch = async () => {
      const posts = await db.collection('posts').get()

      console.log({ posts })
    }

    fetch()
  }, [])

  return (
    <PublicLayout>
      <div className="bg-gray-50">
        <pre>{Boolean(auth.user) && JSON.stringify(auth.user, null, 2)}</pre>
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            What will your Opus be?
            <br />
            <span className="text-indigo-600">Start achieving your goals.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}

export default Home

import React from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

const Dashboard = () => {
  const auth = useAuth()
  const router = useRouter()

  return (
    <AppLayout>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9">
        Opus Dashboard
      </h2>
      <button
        type="button"
        className="border border-cool-gray-900"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>
    </AppLayout>
  )
}

export default Dashboard

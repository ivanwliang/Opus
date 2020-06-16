import React from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../hooks/use-auth'
import AppLayout from '../layouts/AppLayout'

const Dashboard = () => {
  const auth = useAuth()
  const router = useRouter()

  return (
    <AppLayout>
      <p>Opus App Dashboard</p>
      <button
        type="button"
        onClick={() => auth.signOut().then(() => router.push('/'))}
      >
        Sign Out
      </button>
    </AppLayout>
  )
}

export default Dashboard

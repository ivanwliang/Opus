import React from 'react'
import { useRouter } from 'next/router'

import { useAuth } from '../hooks/use-auth'
import PublicLayout from '../layouts/PublicLayout'
import FullScreenAuth from '../components/Auth'

export default () => {
  const auth = useAuth()
  const router = useRouter()

  const signIn = ({ email, password }) => {
    auth
      .signIn(email, password)
      .then(() => router.push('/dashboard'))
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <PublicLayout>
      <FullScreenAuth
        type="Sign In"
        onSubmit={signIn}
        header="Sign in to your account"
      />
    </PublicLayout>
  )
}

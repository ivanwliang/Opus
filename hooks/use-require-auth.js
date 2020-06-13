import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuth } from './use-auth'

// eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
export function useRequireAuth(redirectUrl = '/signup') {
  const auth = useAuth()
  const router = useRouter()

  /*
   * If auth.user is false that means we're not
   * logged in and should redirect.
   */
  useEffect(() => {
    if (auth.user === false) {
      router.push(redirectUrl)
    }
  }, [auth, redirectUrl, router])

  return auth
}

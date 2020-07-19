import React from 'react'

import AppLayout from '../layouts/AppLayout'
import ThemeForm from '../components/ThemeForm'
import { useAuth } from '../hooks/use-auth'

export default () => {
  const auth = useAuth()

  return (
    <AppLayout>
      <ThemeForm user={auth.user} />
    </AppLayout>
  )
}

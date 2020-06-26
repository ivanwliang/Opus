import React from 'react'
import { useRouter } from 'next/router'

import { ProvideAuth, useAuth } from '../hooks/use-auth'

import Dashboard from './dashboard'

import Home from '.'

import '../styles/index.css'

// temporary styles for the dashboard to see the structure. to be removed
import '../styles/dashboard.css'

// eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  // const auth = useAuth()

  // let ComponentToRender = Component

  // if (auth) {
  //   if (
  //     router.pathname === '/' ||
  //     router.pathname === '/signin' ||
  //     router.pathname === '/signup'
  //   ) {
  //     ComponentToRender = Dashboard
  //   }
  // }

  // if (!auth && router.pathname === '/dashboard') {
  //   ComponentToRender = Home
  // }

  return (
    <ProvideAuth>
      <Component {...pageProps} />
    </ProvideAuth>
  )
}

/*
 * Only uncomment this method if you have blocking data requirements for
 * every single page in your application. This disables the ability to
 * perform automatic static optimization, causing every page in your app to
 * be server-side rendered.
 *
 * MyApp.getInitialProps = async (appContext) => {
 *   // calls page's `getInitialProps` and fills `appProps.pageProps`
 *   const appProps = await App.getInitialProps(appContext);
 *
 *   return { ...appProps }
 * }
 */

export default MyApp

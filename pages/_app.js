import React from 'react'

import { ProvideAuth } from '../hooks/use-auth'
import '../styles/index.css'

// temporary styles for the dashboard to see the structure. to be removed
import '../styles/dashboard.css'

// eslint-disable-next-line get-off-my-lawn/prefer-arrow-functions
function MyApp({ Component, pageProps }) {
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

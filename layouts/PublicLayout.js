import React from 'react'
import Head from 'next/head'

import Navbar from '../components/Navbar'

const PublicLayout = ({ children }) => {
  return (
    <>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `if (document.cookie && document.cookie.includes('nextjs-serverless-auth')) { window.location.href="/dashboard"}`
          }}
        />
        <title>Opus App</title>
        <link rel="icon" href="public/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <Navbar />
      <main className="max-w-7xl mx-auto">{children}</main>
    </>
  )
}

export default PublicLayout

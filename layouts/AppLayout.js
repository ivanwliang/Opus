import React from 'react'
import Head from 'next/head'

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Opus App</title>
        <link rel="icon" href="public/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main className="max-w-6xl mx-auto mt-6 mb-12">{children}</main>
    </>
  )
}

export default AppLayout

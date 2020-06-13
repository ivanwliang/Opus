import React from 'react'

import Navbar from '../components/Navbar'

const MarketingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default MarketingLayout

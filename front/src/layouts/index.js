
import React from 'react'
import Navbar from '../components/Navbar'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </>
  )
}

export default DefaultLayout

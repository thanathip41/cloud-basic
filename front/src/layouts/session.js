import React from 'react'
import NavbarLogin from '../components/Navbar/login'

const SessionLayout = ({ children }) => {
  return (
      <>
      <NavbarLogin />
      <div className="container">
        {children}
      </div>
      </>
  )
}
export default SessionLayout

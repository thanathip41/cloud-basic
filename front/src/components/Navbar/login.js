import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const NavbarLogin = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navbar navbar-login">
        <div className="container-navbar">
            <Link className="nav-link" aria-current="page" to="/">
                <i className="fa fa-home" />
            </Link>
        </div>
    </nav>
  )
}

export default NavbarLogin

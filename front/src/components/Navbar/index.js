import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { signOut } from '../../action/auth'
import { openLoading, closeLoading } from '../../action/loading'
import './style.css'

const Navbar = () => {
  const { user } = useSelector(store => store.auth)
  const history = useHistory()
  const dispatch = useDispatch()
  const Logout = () => {
    dispatch(openLoading())
    dispatch(signOut(history))
    dispatch(closeLoading())
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-navbar">
        <div className="container">
            <Link className="nav-link" aria-current="page" to="/">
                <i className="fa fa-home" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon" />
            </button>
            <div id="navbarSupportedContent" className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { user &&
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/about">
                        <i className="fa fa-check" /> about
                        </Link>
                    </li>
                    }
                </ul>

                { !user &&
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                         Sign In
                        </Link>
                    </li>
                    <li className="nav-item sign-up">
                        <Link className="nav-link" to="/register">
                         Sign Up
                        </Link>
                    </li>
                </ul>
                }

                { user &&
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <a
                        id="navbarDropdown"
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        >
                            <i className="fa fa-user" >  { user?.name } </i>

                        </a>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="text-center cursor-pointer" onClick={Logout}>
                                <i className="fa fa-sign-out" > Sign out </i>
                            </li>
                        </ul>

                    </li>
                </ul>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar

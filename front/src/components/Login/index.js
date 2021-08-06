import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signIn } from '../../action/auth'
import './style.css'
import Validate from '../../share/validate'
import { openLoading, closeLoading, toggleLoading } from '../../action/loading'

const Login = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(toggleLoading())
  }, [dispatch])

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      const formElem = e.target
      const $v = new Validate(formElem)
      $v.validateRequired({
        email: document.querySelector('#email'),
        password: document.querySelector('#password')
      })
      const formValidate = $v.formValidate()
      if (formValidate) {
        dispatch(openLoading())
        dispatch(signIn(formData))
        dispatch(closeLoading())
      }
      document.querySelector('#email').classList.add('is-invalid')
      document.querySelector('#password').classList.add('is-invalid')
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="container-login">
        <div className="card">
            <div className="card-body">
                <form onSubmit={ handleSubmit } className="container">
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input id="email" type="text" className="form-control" name="email" onChange={ handleChange }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input id="password" type="password" className="form-control" name="password" onChange ={ handleChange } />
                    </div>
                    <button className="btn btn-primary btn-block"> Sign In</button>
                </form>
            </div>
            <div className="text-center pt-2 pb-3">
                New to account?
                <Link className ="m-2" to="/register">
                    Create an account.
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login

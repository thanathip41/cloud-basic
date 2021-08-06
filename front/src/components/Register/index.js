import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { signUp } from '../../action/auth'
import Validate from '../../share/validate'
import { openLoading, closeLoading, toggleLoading } from '../../action/loading'
import './style.css'

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    dispatch(toggleLoading())
  }, [dispatch])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      dispatch(openLoading())
      const formElem = e.target
      const $v = new Validate(formElem)
      $v.validateRequired({
        name: document.querySelector('#name'),
        password: document.querySelector('#password'),
        email: document.querySelector('#email'),
        confirmPassword: document.querySelector('#confirmPassword')
      })
      const formValidate = $v.formValidate()
      const checkPassword = formData.password === formData.confirmPassword

      if (!checkPassword) {
        const passwordElem = document.querySelector('#password')
        const confirmPasswordElem = document.querySelector('#confirmPassword')
        passwordElem.classList.add('is-invalid')
        confirmPasswordElem.classList.add('is-invalid')
        return
      }

      if (formValidate && checkPassword) {
        dispatch(signUp(formData, history))
      }
      dispatch(closeLoading())
    } catch (err) {

    }
  }

  return (
    <div className="container-login">
        <div className="card">
            <div className="card-body">
                <form onSubmit={ handleSubmit } className="container">
                    <div className="mb-3">
                        <label className="form-label"> Name</label>
                        <input type="text" className="form-control" id="name" name="name" onChange={ handleChange }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="text" className="form-control" id="email" name="email" onChange={ handleChange }/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange ={ handleChange } />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" onChange ={ handleChange } />
                    </div>
                    <button className="btn btn-primary btn-block"> Sign Up</button>
                </form>
            </div>
            <div className="text-center pt-2 pb-3">
                Account?
                <Link className ="m-2" to="/login">
                    Sign in.
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register

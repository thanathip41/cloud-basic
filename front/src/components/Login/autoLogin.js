import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { profile } from '../../action/auth'

const AutoLogin = () => {
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  if (localStorage.getItem('accessToken') && !user) {
    dispatch(profile(history))
  }
  return (<Fragment/>)
}

export default AutoLogin

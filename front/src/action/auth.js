import { useLocation } from 'react-router-dom'
import { LOGIN, LOGOUT, PROFILE } from '../redux/actions/authAction'
import { authLogin, authRegister, authLogout, getProfile } from '../api'

export const signIn = (formData) => async (dispatch) => {
  try {
    const res = await authLogin(formData)
    if (res.success) {
      dispatch({ type: LOGIN, data: res.access_token })

      const { user } = await getProfile(formData)

      dispatch({ type: PROFILE, data: user })
    }
  } catch (err) {
    console.log(err.message)
  }
}

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const res = await authRegister(formData)

    if (res.success) {
      dispatch({ type: LOGIN, data: res.access_token })

      const user = await getProfile(formData)

      dispatch({ type: PROFILE, data: user.data })
    }
    history.push('/')
  } catch (error) {
    console.log(error.message)
  }
}

export const signOut = (history) => async (dispatch) => {
  try {
    await authLogout()
    dispatch({ type: LOGOUT })

    history.push('/')
  } catch (error) {
    console.log(error.message)
  }
}

export const profile = (history) => async (dispatch) => {
  try {
    const { user } = await getProfile()
    dispatch({ type: PROFILE, data: user })
    const location = useLocation()
    history.push(`/${location.pathname}`)
  } catch (error) {
    console.log(error.message)
  }
}

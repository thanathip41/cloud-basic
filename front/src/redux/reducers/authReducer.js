import { LOGIN, PROFILE, LOGOUT } from '../actions/authAction'

export const authReducer = (state = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('accessToken', action?.data)
      return state
    case PROFILE:
      return { ...state, user: action?.data }
    case LOGOUT:
      localStorage.clear()
      return { ...state, user: null }
    default:
      return state
  }
}

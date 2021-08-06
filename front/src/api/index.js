import { API } from '../share/axios'

export const authLogin = async (data) => await API.post('login', { data })
export const getProfile = async () => await API.get('users/profile')
export const authRegister = async (data) => await API.post('register', { data })
export const authLogout = async () => await API.delete('logout')

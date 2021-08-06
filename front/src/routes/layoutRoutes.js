import SessionLayout from '../layouts/session'
import AppLayout from '../layouts'
import { middlewareRoute } from './middleware'
import { useSelector } from 'react-redux'

export const AUTH = 'AUTH'
export const GUEST = 'GUEST'

export const DefaultLayoutRoute = ({ component: Component, dispatch, ...rest }) => {
  const store = useSelector(store => store)
  return middlewareRoute({
    Layout: AppLayout,
    Component,
    rest,
    store
  })
}

export const SessionLayoutRoute = ({ component: Component, ...rest }) => {
  const store = useSelector(store => store)
  return middlewareRoute({
    Layout: SessionLayout,
    Component,
    rest,
    store
  })
}

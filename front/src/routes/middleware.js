import { Route } from 'react-router-dom'
import { Redirect } from 'react-router'

export const MIDDLEWARE_AUTH = 'MIDDLEWARE_AUTH'
export const MIDDLEWARE_GUEST = 'MIDDLEWARE_GUEST'

const render = ({ redirect = '/', checked = true, Layout, Component, rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        checked
          ? <Layout> <Component {...props} /> </Layout>
          : <Redirect to={ { pathname: redirect }} />
      )}
    />
  )
}

export const middlewareRoute = ({ Layout, Component, rest, store }) => {
  const { middleware } = rest
  const { user } = store.auth
  let initialState = {
    Layout,
    Component,
    rest
  }
  switch (middleware) {
    case MIDDLEWARE_GUEST :
      initialState = {
        ...initialState,
        redirect: '/',
        checked: user == null
      }
      break
    case MIDDLEWARE_AUTH :
      initialState = {
        ...initialState,
        redirect: '/login',
        checked: user != null
      }
      break
    default :
      break
  }
  return render(initialState)
}

import { Switch, BrowserRouter } from 'react-router-dom'
import { DefaultLayoutRoute, SessionLayoutRoute } from './layoutRoutes'
import { MIDDLEWARE_AUTH, MIDDLEWARE_GUEST } from './middleware'

import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import Register from '../components/Register'
import NotFound from '../components/NotFound'

const router = () => (
    <BrowserRouter>
    <Switch>
        <DefaultLayoutRoute exact path="/" component={Home} />
        <DefaultLayoutRoute path="/about" component={About} middleware={ MIDDLEWARE_AUTH } />
        <SessionLayoutRoute path="/login" component={Login} middleware={ MIDDLEWARE_GUEST } />
        <SessionLayoutRoute path="/register" component={Register} middleware={ MIDDLEWARE_GUEST } />
        <DefaultLayoutRoute path='*' component={NotFound} />
    </Switch>
    </BrowserRouter>
)

export default router

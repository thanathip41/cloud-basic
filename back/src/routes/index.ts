import { useState } from '../utils'
import defalut from './default.route'
import auth from './auth.route'
import user from './user.route'
import project from './project.route'

const [ routers , setRouter] = useState([])

setRouter({prefix : 'api', route : auth})
setRouter({prefix : 'api/users', route : user})
setRouter({prefix : 'api/users/projects', route : project})

export default [...routers(), {
    prefix : '*',
    route : defalut
}]
import express , { Router } from 'express'
import AuthMiddleware from '../http/middlewares/auth.middleware'
import {
    UserController
} from '../http/controllers/user/user.controller'

const router : Router = express.Router()
const user = new UserController()
router.get('/profile',  AuthMiddleware ,user.index)

export default router
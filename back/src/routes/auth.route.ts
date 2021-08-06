import express from 'express'
import AuthMiddleware from '../http/middlewares/auth.middleware'
import { AuthController } from '../http/controllers/auth/auth.controller'

const router = express.Router()
const auth = new AuthController()

router.get('/test',auth.test)
router.post('/login', auth.login)
router.post('/register',auth.register)
router.delete('/logout', AuthMiddleware ,auth.logout)

export default router
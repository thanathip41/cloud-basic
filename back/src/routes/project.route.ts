import express , { Router } from 'express'
import AuthMiddleware from '../http/middlewares/auth.middleware'
import { ProjectController }  from  '../http/controllers/project/project.controller'

const router : Router = express.Router()
const project = new ProjectController()

router.get('/',  AuthMiddleware ,project.index)
router.post('/',  AuthMiddleware ,project.store)
router.get('/:id',  AuthMiddleware ,project.show)
router.put('/:id',  AuthMiddleware ,project.update)
router.patch('/:id',  AuthMiddleware ,project.update)
router.delete('/:id',  AuthMiddleware ,project.destroy)

export default router
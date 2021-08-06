import express  ,{ Request , Response , NextFunction }from 'express'
const router = express.Router()

router.use(((_ : Request, res : Response, next : NextFunction) => {
    return res.status(404).json({
      success : false,
      message: 'Not Found',
      code : 404
    })
}))

export default router
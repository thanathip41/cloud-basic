import express , { Application } from 'express'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import helmet from "helmet"
import nocache from 'nocache'
import { handlerError } from './context'
import routers from './routes'

const app : Application = express()
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(path.join(path.resolve(),'src/public')))
app.use(nocache())
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.set('trust proxy',true)

routers.forEach(router => {
  app.use(`/${router.prefix}`, router.route)
})

app.use(handlerError)

export default app
import app from './app'
import env from './config/env'
import http , { Server }  from 'http'
import { onListening , onError } from './context'

const port : number = +env.PORT ?? 8000

const server : Server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
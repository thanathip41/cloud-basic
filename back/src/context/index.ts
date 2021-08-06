import { networkInterfaces } from 'os'
import env from '../config/env'
import { Request , Response ,NextFunction} from 'express'
import { Logger } from 'tspace-utils'

export const handlerError = async (err : any, _ : Request, res : Response , next : NextFunction) => {
  const code = err.code || 500
  const message =  err.message || 'error'
  if(code === 500) new Logger().error(err)

  return res
    .status(code)
    .json({
        success : false,
        message,
        code
    })
  }
  
export const getLocalNetwork = () => {
    try {
      return Object.values(networkInterfaces())
            ?.map(data => data)
            ?.shift()
            ?.filter(details => details?.family === 'IPv4' && !details?.internal)
            ?.pop()?.address
    } catch(err) {
      return 'localhost'
    }
  }

export const onError = (err :any) => {
    const port = env.PORT ?? 8000
    switch (err.code) {
        case 'EACCES':
          console.log(`\n\x1b[1m\x1b[31m ${err.message}\x1b[0m`)
        break
        case 'EADDRINUSE':
          console.log(`\n\x1b[1m\x1b[31m port :${port} is already in use \x1b[0m`)
        break
        default:
          throw err;
    }
}
  
export const onListening = () => {
    const port = env.PORT ?? 8000
    console.log(`\n\x1b[1m\x1b[34m app start environment ${env.NODE_ENV} mode
      Local http://localhost:${port}
      Network http://${getLocalNetwork()}:${port}
      \x1b[0m`
    )
}
import redis from 'redis'
import env from '../../config/env'

const options:any = {
    development : {
        host     : env.REDIS_HOST, 
        port     : env.REDIS_PORT,
        password : env.REDIS_PASSWORD,
    },
    production : {
        host     : env.REDIS_HOST_PROD, 
        port     : env.REDIS_PORT_PROD,
        password : env.REDIS_PASSWORD_PROD,
    }
}

const config = options[env.NODE_ENV || 'development']

const client = redis.createClient(config)

client.on("error", (err) => {
    if(err) client.quit()
    if(env.REDIS_USED || env.REDIS_USED_PROD) console.log('redis connected lost !')
})
  
export default client
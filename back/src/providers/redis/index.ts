import client from './redis.config'
import { promisify } from 'util'

export const redisGet = promisify(client.get).bind(client);
export const redisSet = promisify(client.set).bind(client);
export const redisSetExpire = promisify(client.setex).bind(client);
export const redisDelete = promisify(client.del).bind(client);

export default {
    get : redisGet, 
    set : redisSet,
    del : redisDelete,
    setex: redisSetExpire
}
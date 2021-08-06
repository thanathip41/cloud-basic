import { Request , Response} from 'express'
import { Validate , Rule } from 'tspace-utils'
import { Controller } from '..'
import { RequestAuth } from '../../../inferfaces'
import { encodeToken , useState } from '../../../utils'
import bcrypt from 'bcryptjs'
import env from '../../../config/env'
import redis from '../../../providers/redis'

import User from '../../../models/User'
import OauthAccessToken from '../../../models/OauthAccessToken'

export class AuthController extends Controller {

  public login = async ( req : Request, res : Response) => {
    try {
      
      new Validate().check(req.body, { 
        email : new Rule().required().email(),
        password : new Rule().required()
      })
      
      const { email , password } = req.body
      
      const user = await new User()
              .where('email',email)
              .first()
      
      if(!user) throw this.unauthorized()
  
      const match = await bcrypt.compare(password, user.password)
  
      if(!match) throw this.unauthorized()
      
      delete user.password
     
      const [accessToken , setAccessToken] = useState('')
  
      switch (env.REDIS_USED) {
        case true: 
          setAccessToken(encodeToken(user.id))
          const cached : any = await redis.get('accessTokens')
          const currentCached = JSON.parse(cached) || []
          const data = { accessToken : accessToken(), user }
          const newCached = [...currentCached ,data]
          const TIME = +env.REDIS_TIME
  
          await redis.setex('accessTokens',TIME,JSON.stringify(newCached))
          break;
      
        default: 
          const oauth = await new OauthAccessToken()
            .create({
              user_id : user.id,
              revoked : 0
          }).save()
  
          setAccessToken(encodeToken(oauth.id))
        break;
      }
      
      return this.ok(res,{
          user,
          access_token : accessToken()
      })
  
    } catch (err) {
      return this.error(res , err)
    }
  }
  
  public register = async ( req : Request, res : Response) => {
      try {
        new Validate().check(req.body, { 
            name : new Rule().required(),  
            email :  new Rule().required().email(), 
            password : new Rule().required().confirm('password_confirmation'),
            password_confirmation : new Rule().required()
        })
        
        const { name , email , password } = req.body
  
        const hash = bcrypt.hashSync(password, 3)
  
        const user = await new User()
            .where('email',email)
            .createNotExists({ 
                name , 
                email , 
                password: hash
            }).save()
  
        if(!user) return this.badRequest('email is unique')
  
        const [accessToken , setAccessToken] = useState('')
  
        switch (env.REDIS_USED) {
            case true: 
                setAccessToken(encodeToken(user.id))
                const cached:any = await redis.get('accessTokens')
                const currentCached : Array<Object> = JSON.parse(cached) || []
                const data :Object = { accessToken : accessToken(), user }
                const newCached  : Array<Object>= [...currentCached ,data]
                const TIME = +env.REDIS_TIME
  
                await redis.setex('accessTokens',TIME,JSON.stringify(newCached))
  
                break;
            
            default: 
                const oauth = await new OauthAccessToken().create({
                    user_id : user.id,
                    revoked : 0
                }).save()
        
                setAccessToken(encodeToken(oauth.id))
            break;
        }
  
        return this.created(res,{
            user,
            access_token : accessToken()
        })
      } 
      catch (err) {
       return this.error(res , err)
      }
  }
  
  public logout = async ( req : RequestAuth, res : Response) => {
      try {
        const oauthAccessToken = req.oauthAccessToken
        switch (env.REDIS_USED) {
          case true: {
            const cached = await redis.get('accessTokens')
            if(!cached) return res.status(204).json()
            const currentCached = JSON.parse(cached) || []
            const TIME = +env.REDIS_TIME
            const newCached = currentCached.filter((data: { accessToken: any }) => data.accessToken !== oauthAccessToken)
          
            await redis.setex('accessTokens',TIME,JSON.stringify(newCached))
            break;
            
          }
          default: {
            const deleted = await new OauthAccessToken()
              .update({
                  revoked : true
              })
              .where('id',oauthAccessToken)
              .save()
              
            if(!deleted) return this.badRequest('invalid authorization token')
    
            break;
          }
        }
        return this.noContent(res)
      } 
      catch (err) {
        return this.error(res , err)
      }
  }
}
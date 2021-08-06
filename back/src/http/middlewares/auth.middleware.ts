import { Response , NextFunction } from 'express'
import { RequestAuth } from '../../inferfaces'
import OauthAccessToken from '../../models/OauthAccessToken'
import { decodeToken } from '../../utils'
import { Unauthorized , BadRequest } from '../../exception'
import env from '../../config/env'
import redis from '../../providers/redis'

export default async (req : RequestAuth, _ : Response ,next : NextFunction) => {
  try {
    const [bearer , token] = req.headers.authorization?.split(' ') ?? []
    
    if(!["bearer","Bearer"].includes(bearer) || token ==  null) return BadRequest('Required Bearer Token')

    switch (env.REDIS_USED) {
      case true:{
        const cached = await redis.get('accessTokens')
          if(!cached) return Unauthorized()
            const currentCached :Array<any> = JSON.parse(cached) || []
            const userCached : { user? : object} = currentCached.find((data: { accessToken: string }) => data.accessToken === token)
            const user = userCached ? userCached.user : null
  
            if(user == null) return Unauthorized()
              req.authUser = user
              req.oauthAccessToken = token
            return next()
      }
      default: {
        const decode : number = decodeToken(token)

        const oauth = await new OauthAccessToken()
                  .with('user')
                  .where('revoked',false)
                  .where('id',decode)
                  .first()

        if(oauth?.user == null) return Unauthorized()

          req.authUser = oauth.user
          req.oauthAccessToken = oauth.id

        return next()
      }
    }

  } catch (err) {
    return next(err)
  }
}
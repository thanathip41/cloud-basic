import { Response } from 'express'
import { RequestAuth } from '../../../inferfaces'
import { Controller } from '..'

export class UserController extends Controller {
  public index = async ( req : RequestAuth, res : Response) => {
    try {
      const user = req.authUser
      delete user.password

      return this.ok(res,{ 
        user : req.authUser 
      })
    } catch (err) {
      return this.error(res,err)
    }
  }
}
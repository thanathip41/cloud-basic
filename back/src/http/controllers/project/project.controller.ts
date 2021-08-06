import { Response} from 'express'
import { Validate , Rule } from 'tspace-utils'
import { RequestAuth } from '../../../inferfaces'
import Project from '../../../models/Project'
import { Controller } from '..'

export class ProjectController extends Controller {
  
  public index = async( req : RequestAuth, res : Response) => {
    try {

      const user = req.authUser

      const projects = await new Project().whereUser(user.id).get();

      return this.ok(res , { 
        projects
      })

    } catch (err) {
      return this.error(res,err)
    }
  }

  public store = async( req : RequestAuth, res : Response) => {
    try {
      new Validate().check(req.body, { 
        name : new Rule().required(),
        cost : new Rule().required().number()
      })
  
      const { name , cost } = req.body
  
      const project = await new Project()
          .create({
            user_id : req.authUser.id,
            name,
            cost
        }).save()
  
      
      return this.created(res,{ 
        project
      })
  
    } catch (err) {
      return this.error(res,err)
    }
  }

  public show = async ( req : RequestAuth, res : Response) => {
    try {
      const id:number = +req.params.id
  
      const project = await 
        new Project().where('id',id)
          .whereUser(req.authUser.id)
          .first()
  
      if(!project) throw this.notFound()  
  
      return this.ok(res,{ 
        project
      })
  
    } catch (err) {
      return this.error(res,err)
    }
  }

  public update =  async  ( req : RequestAuth, res : Response) => {
    try {

      new Validate().check(req.body, { 
        name : new Rule().required(),
        cost : new Rule().required()
      })

      const id:number = +req.params.id
      const { name , cost } = req.body
  
      const project = await new Project().where('id',id)
          .whereUser(req.authUser.id)
          .update({
            name,
            cost
          }).save()
  
      return this.ok(res,{ 
        project
      })
  
    } catch (err) {

      return this.error(res,err)

    }
  }

  public destroy =  async  ( req : RequestAuth, res : Response) => {

    try {
      const id:number = +req.params.id
  
      const project = await new Project().where('id',id)
          .whereUser(req.authUser.id)
          .delete()
  
      if(!project) throw this.forbidden()
  
      return this.noContent(res)
  
    } catch (err) {

      return this.error(res,err)
    }
  }

}
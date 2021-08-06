import jwt from 'jsonwebtoken'
import env from '../config/env'

export const encodeToken = (data : object) => {
    const accessToken =  jwt.sign({
       data
    }, env.JWT_SECRET , { expiresIn: +env.JWT_EXPIRE_HOUR })
    return accessToken  
}

export const decodeToken = (token : string) => {
    try {
        const decoded: any = jwt.verify(token, env.JWT_SECRET)
        return decoded.data
    } catch (err:any) {
        const error:any = new Error(err.message)
              error.code = 400
        throw error      
    }
}

export const useState = (defaultState: any = null ) : [Function, Function] => {
    const type = (data : any) => Object.prototype.toString.apply(data).slice(8, -1)
    const checkType = (oldState?: any , newState?: any) => {
      switch (type(oldState)) {
          case 'Array' : {
            oldState = [...oldState , newState]
            break
          }
          case 'Object': {
            if(type(newState) !== 'Object' ) throw new TypeError('this state allow object only')
            oldState = {...oldState , ...newState}
            break
          }
          case 'Boolean' : {
            if(type(newState) !== 'Boolean' ) throw new TypeError('this state allow boolean only')
            oldState = newState
            break
          }
          case 'Number' : {
            if(type(newState) !== 'Number' ) throw new TypeError('this state allow number only')
            oldState = newState
            break
          }
          case 'String' : {
            if(type(newState) !== 'String' ) throw new TypeError('this state allow string only')
            oldState = newState
            break
          }
          case 'Null' || 'Undefined' : {
            oldState = newState
            break
          }
          default : {
            throw new Error("Can't set state")
          }
      }
      return oldState
    }

    const getState = () => defaultState

    const setState = (newState : any) => defaultState = checkType(defaultState ,newState)

    return [getState , setState];
}

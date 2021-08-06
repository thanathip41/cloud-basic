import { Response } from 'express'
import { Logger } from 'tspace-utils'
import env from '../../config/env'

export class Controller 
{
    protected env : any | unknown
    constructor() {
        this.env = env
    }
    
    public success (res:Response , data:object) {
        data = {
            success : true , 
            ...data , 
            code : 200 
        }
        return res.json(data)
    }

    public ok (res:Response , data:object) {
        data = {
            success : true , 
            ...data , 
            code : 200 
        }
        return res.json(data)
    }

    public noContent (res:Response) {
        return res.status(204).json([])
    }
    
    public created (res:Response , data:object) {
        data = {
            success : true , 
            ...data , 
            code : 201
        }
        return res.status(201).json(data)
    }

    public error (res:Response , err: any) {
        const code = err.code || 500
        const message =  err.message || 'error'
        if(code === 500) new Logger().error(err)

        const data = {
            success : false , 
            message , 
            code 
        }
        return res.status(code).json(data)
    }

    public badRequest = (message = 'Bad Request') => {
        throw this._handlerError({
            message , 
            code : 400
        })
    }

    public unauthorized = (message = 'Unauthorized') => {
        throw this._handlerError({
            message , 
            code : 401
        })
    }
    
    public paymentRequired = (message = 'Payment Required') => {
        throw this._handlerError({
            message , 
            code : 402
        })
    }
    
    public forbidden = (message = 'Forbidden') => {
        throw this._handlerError({
            message , 
            code : 403
        })
    }
    
    public notFound = (message = 'Not Found') => {
        throw this._handlerError({
            message , 
            code : 404
        })
    }
    public serverError = (message = 'Internal Server Error') => {
        throw this._handlerError({
            message , 
            code : 500
        })
    }
    private _handlerError = ({message , code} : { message :string , code : number}) => {
        class HttpError extends Error {
            code: any;
            constructor(message: string | undefined , code: any) {
              super(message);
              this.code = code;
            }
        }
        return new HttpError(message,code)
    }
}
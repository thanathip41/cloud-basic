export const handlerError = ({message , code} : { message :string , code : number}) => {
    class HttpError extends Error {
        code: any;
        constructor(message: string | undefined , code: any) {
          super(message);
          this.code = code;
        }
    }
    return new HttpError(message,code)
}

export const BadRequest = (message = 'Bad Request') => {
    throw handlerError({
        message , 
        code : 400
    })
}

export const Unauthorized = (message = 'Unauthorized') => {
    throw handlerError({
        message , 
        code : 401
    })
}

export const PaymentRequired = (message = 'Payment Required') => {
    throw handlerError({
        message , 
        code : 402
    })
}

export const Forbidden = (message = 'Forbidden') => {
    throw handlerError({
        message , 
        code : 403
    })
}

export const NotFound = (message = 'Not Found') => {
    throw handlerError({
        message , 
        code : 404
    })
}
export const ServerError = (message = 'Internal Server Error') => {
    throw handlerError({
        message , 
        code : 500
    })
}
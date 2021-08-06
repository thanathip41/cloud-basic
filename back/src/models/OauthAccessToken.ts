import { Model } from 'tspace-sqlorm'
import User from './User'

class OauthAccessToken extends Model {
    constructor(){
        super()  
        this.belongsTo({ model : User ,name :'user' })
    }
}

export default OauthAccessToken

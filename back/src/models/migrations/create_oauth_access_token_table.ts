import { Schema , Blueprint } from 'tspace-sqlorm'
(async () => {
    await new Schema().table('oauth_access_tokens',{ 
        id :  new Blueprint().int().notNull().primary().autoIncrement(),
        user_id : new Blueprint().int().notNull(),
        revoked : new Blueprint().tinyInt().default(0)
    })
})()

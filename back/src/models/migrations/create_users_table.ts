import { Schema , Blueprint } from 'tspace-sqlorm'
(async () => {
    await new Schema().table('users',{ 
        id :  new Blueprint().int().notNull().primary().autoIncrement(),
        name : new Blueprint().varchar(120).notNull(),
        email : new Blueprint().varchar(255).notNull().unique(),
        password : new Blueprint().varchar(255).notNull(),
    })
})()

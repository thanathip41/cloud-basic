import { Schema , Blueprint } from 'tspace-sqlorm'
(async () => {
    await new Schema().table('projects',{ 
        id :  new Blueprint().int().notNull().primary().autoIncrement(),
        user_id : new Blueprint().int().notNull(),
        name : new Blueprint().varchar(120).notNull(),
        cost : new Blueprint().double().notNull()
    })
})()

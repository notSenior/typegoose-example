import { FastifyPluginCallback } from "fastify"
import fp from "fastify-plugin"
import * as mongoose from "mongoose"

// mongoose.set("useNewUrlParser", true)
// mongoose.set('useFindAndModify', false)
// mongoose.set('useCreateIndex', true)
// mongoose.set("useUnifiedTopology", true)

const myPluginCallback: FastifyPluginCallback = (fastify, options, done) => {
    mongoose.connection.once("open", () => {
        console.log("connected to the database")
    })

    mongoose.connect(fastify.config.DB_HOST).then(() => done())
}

export default fp(myPluginCallback)

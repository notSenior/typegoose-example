import Fastify from "fastify"

import envPlugin from "./src/plugins/env.plugin"
import mongoosePlugin from "./src/plugins/mongoose.plugin"
import sessionPlugin from "./src/plugins/session.plugin"

import router from "./src/router"

const fastify = Fastify({
    logger: true,
})

fastify.register(envPlugin)
fastify.register(mongoosePlugin)

fastify.register(sessionPlugin)

fastify.register(router, { prefix: "api" })

fastify.ready(() => {
    fastify.listen(fastify.config.PORT, function (err) {
        if (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    })
})

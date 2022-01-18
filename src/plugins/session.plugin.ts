import fp from "fastify-plugin"
import cookie from "fastify-cookie"
import session from "@fastify/session"

declare module "fastify" {
    interface Session {
        user_id: string
    }
}

export default fp(async (fastify) => {
    fastify.register(cookie)
    fastify.register(session, {
        secret: fastify.config.SESSION_SECRET,
        cookie: {
            httpOnly: true,
        },
    })
})

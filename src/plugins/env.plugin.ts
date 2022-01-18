import { FastifyPluginCallback } from "fastify"
import fastifyEnv from "fastify-env"
import fp from "fastify-plugin"

declare module "fastify" {
    interface FastifyInstance {
        config: {
            PORT: number
            DB_HOST: string
            SESSION_SECRET: string
        }
    }
}

const schema = {
    type: "object",
    required: ["DB_HOST", "SESSION_SECRET"],
    properties: {
        PORT: {
            type: "number",
            default: 3000,
        },
        DB_HOST: {
            type: "string",
        },
        SESSION_SECRET: {
            type: "string",
        },
    },
}

const myPluginCallback: FastifyPluginCallback = (fastify, options, done) => {
    fastify.register(fastifyEnv, { schema, dotenv: true }).then(() => {
        done()
    })
}

export default fp(myPluginCallback)

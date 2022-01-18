import authService from "../services/auth.service"
import { FastifyRequest, FastifyReply } from "fastify"

type loginRequest = FastifyRequest<{
    Body: { login: string; password: string }
}>

export default {
    async loginAction(request: loginRequest, reply: FastifyReply) {
        const login = request.body?.login
        const password = request.body?.password

        if (typeof login != "string" || typeof password != "string") {
            reply.status(400)
            throw new Error("Invalid type login or password")
        }

        let user_id = await authService.authentication(login, password)

        if (!user_id) {
            reply.status(401)
            throw new Error("bad login")
        }

        return "Ok"
    },
}

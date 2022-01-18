import { FastifyInstance } from "fastify"
import userController from "./controllers/user.controller"

export default async (fastify: FastifyInstance) => {
    fastify.post("/login", userController.loginAction)
}

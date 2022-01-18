import { AdminModel } from "../db/user_module/admin.model"
import { StudetModel } from "../db/user_module/studet.model"

export default {
    async authentication(login: string, password: string): Promise<string | null> {
        const results = await Promise.all([
            AdminModel.findOne({ login }),
            StudetModel.findOne({ login }),
        ])

        const user = results.find((doc) => doc?.checkPassword(password))

        return user ? user._id : null
    },
}

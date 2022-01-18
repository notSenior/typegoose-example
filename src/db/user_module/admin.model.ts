import { prop, getDiscriminatorModelForClass } from "@typegoose/typegoose"
import * as bcrypt from "bcrypt"
import { UserClass, UserModel } from "./user.model"

const saltRounds = 10 // ~ 20 hasg/sec

class Admin extends UserClass {
    @prop({ required: true })
    private _hashedPassword!: string

    public set password(password: string) {
        this._hashedPassword = bcrypt.hashSync(password, saltRounds) // worth replacing ASYNC
    }

    public async checkPassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this._hashedPassword)
    }
}

export const AdminClass = Admin
export const AdminModel = getDiscriminatorModelForClass(UserModel, Admin)

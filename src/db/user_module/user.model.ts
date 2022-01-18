import { prop, getModelForClass, modelOptions } from "@typegoose/typegoose"

@modelOptions({ schemaOptions: { collection: "user", timestamps: true } })
class User {
    @prop({ required: true, unique: true })
    public login!: string

    @prop()
    public firstName?: string

    @prop()
    public lastName?: string
}

export const UserClass = User
export const UserModel = getModelForClass(User)

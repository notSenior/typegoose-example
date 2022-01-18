import { prop, getDiscriminatorModelForClass, Ref } from "@typegoose/typegoose"
import { UserClass, UserModel } from "./user.model"

class Student {
    @prop({ required: true })
    public password!: string

    @prop({ required: true, ref: () => UserClass })
    public teacher: Ref<typeof UserClass>

    public checkPassword(password: string): boolean {
        return password === this.password
    }
}

export const StudetModel = getDiscriminatorModelForClass(UserModel, Student)
export const StudentClass = Student

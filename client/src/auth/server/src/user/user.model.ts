import {Base, TimeStamps} from "@typegoose/typegoose/lib/defaultClasses";
import {prop} from "@typegoose/typegoose";

export interface UserModel extends Base {}

export class UserModel extends TimeStamps{
    @prop()
    name: string

    @prop()
    phone: string

    @prop({unique: true})
    email: string

    @prop()
    password: string

    @prop()
    createdAt: Date
}
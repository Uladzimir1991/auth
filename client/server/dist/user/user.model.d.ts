import { Base, TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    name: string;
    phone: string;
    email: string;
    password: string;
    createdAt: Date;
}

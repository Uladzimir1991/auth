/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserModel } from "../user/user.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { JwtService } from "@nestjs/jwt";
import { AuthDto } from "./auth.dto";
export declare class AuthService {
    private readonly UserModel;
    private readonly JwtService;
    constructor(UserModel: ModelType<UserModel>, JwtService: JwtService);
    getAllUsers(): Promise<UserModel[]>;
    getUser(id: string): Promise<UserModel>;
    login(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            email: string;
            created: Date;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            name: string;
            phone: string;
            email: string;
            created: Date;
        };
    }>;
    ValidateUser(dto: AuthDto): Promise<import("mongoose").Document<import("mongoose").Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    issueTokenPair(_id: string): Promise<{
        accessToken: string;
    }>;
    returnRegisterUserFields(user: UserModel): {
        _id: import("mongoose").Types.ObjectId;
        name: string;
        phone: string;
        email: string;
        created: Date;
    };
    returnLoginUserFields(user: UserModel): {
        _id: import("mongoose").Types.ObjectId;
        email: string;
        created: Date;
    };
}

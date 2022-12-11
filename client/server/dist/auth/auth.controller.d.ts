import { AuthDto } from "./auth.dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly AuthService;
    constructor(AuthService: AuthService);
    getAllUsers(): Promise<import("../user/user.model").UserModel[]>;
    getUser(id: string): Promise<import("../user/user.model").UserModel>;
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
    updateUser(dto: AuthDto): Promise<{
        accessToken: string;
        user: {
            _id: import("mongoose").Types.ObjectId;
            name: string;
            phone: string;
            email: string;
            created: Date;
            updated: number;
        };
    }>;
    removeUser(dto: AuthDto): Promise<any>;
}

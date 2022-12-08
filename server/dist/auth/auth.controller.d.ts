import { AuthDto } from "./auth.dto";
import { AuthService } from "./auth.service";
export declare class AuthController {
    private readonly AuthService;
    constructor(AuthService: AuthService);
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
            email: string;
            created: Date;
        };
    }>;
}

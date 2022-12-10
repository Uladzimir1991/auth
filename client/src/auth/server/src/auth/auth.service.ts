import {UserModel} from "../user/user.model";
import {ModelType} from "@typegoose/typegoose/lib/types";
import {InjectModel} from "nestjs-typegoose";
import {BadRequestException, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {AuthDto} from "./auth.dto";
import {compare, genSalt, hash} from "bcryptjs";

@Injectable()
export class AuthService {
    constructor(@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
                private readonly JwtService: JwtService) {}

    async getAllUsers(): Promise<UserModel[]> {
        return this.UserModel.find()
    }

    async getUser(id: string): Promise<UserModel> {
        return this.UserModel.findOne({id: id})
    }

    async login(dto: AuthDto) {
        const user = await this.ValidateUser(dto)

        const tokens = await this.issueTokenPair(String(user._id))

        return {
            user: this.returnLoginUserFields(user),
            ...tokens
        }
    }

    async register(dto: AuthDto) {
        const oldUser = await this.UserModel.findOne({email: dto.email})
        if(oldUser) {
            throw new BadRequestException('User with this email is already in the system')
        }

        const salt = await genSalt(10)

        const newUser = new this.UserModel({name: dto.name, phone: dto.phone, email: dto.email, password: await hash(dto.password, salt)})

        const user = await newUser.save()

        const tokens = await this.issueTokenPair(String(user._id))

        return {
            user: this.returnRegisterUserFields(user),
            ...tokens
        }
    }

    async ValidateUser(dto: AuthDto) {
        const user = await this.UserModel.findOne({email: dto.email})
        if(!user) {
            throw new UnauthorizedException('User not found')
        }

        const isValidPass = await compare(dto.password, user.password)
        if(!isValidPass) {
            throw new UnauthorizedException('Invalid password')
        }

        return user
    }

    async issueTokenPair(_id: string) {
        const data = {_id}

        const accessToken = await this.JwtService.signAsync(data, {
            expiresIn: '1d'
        })

        return { accessToken }
    }

    returnRegisterUserFields(user: UserModel) {
        return {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            created: new Date(user.createdAt)
        }
    }

    returnLoginUserFields(user: UserModel) {
        return {
            _id: user._id,
            email: user.email,
            created: new Date(user.createdAt)
        }
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const user_model_1 = require("../user/user.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
let AuthService = class AuthService {
    constructor(UserModel, JwtService) {
        this.UserModel = UserModel;
        this.JwtService = JwtService;
    }
    async getAllUsers() {
        return this.UserModel.find();
    }
    async getUser(id) {
        return this.UserModel.findOne({ _id: Object(id) });
    }
    async login(dto) {
        const user = await this.ValidateUser(dto);
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnLoginUserFields(user) }, tokens);
    }
    async register(dto) {
        const oldUser = await this.UserModel.findOne({ email: dto.email });
        if (oldUser) {
            throw new common_1.BadRequestException('User with this email is already in the system');
        }
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const newUser = new this.UserModel({ name: dto.name, phone: dto.phone, email: dto.email, password: await (0, bcryptjs_1.hash)(dto.password, salt) });
        const user = await newUser.save();
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.returnRegisterUserFields(user) }, tokens);
    }
    async updateUser(dto) {
        const oldUser = await this.UserModel.findOne({ password: dto.password });
        const user = await oldUser.updateOne({ name: dto.name, phone: dto.phone, email: dto.email, password: dto.password });
        const tokens = await this.issueTokenPair(String(user._id));
        return Object.assign({ user: this.updateUserFields(user) }, tokens);
    }
    async removeUser(dto) {
        const user = await this.UserModel.findOne({ email: dto.email });
        return user.deleteOne();
    }
    async ValidateUser(dto) {
        const user = await this.UserModel.findOne({ email: dto.email });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const isValidPass = await (0, bcryptjs_1.compare)(dto.password, user.password);
        if (!isValidPass) {
            throw new common_1.UnauthorizedException('Invalid password');
        }
        return user;
    }
    async issueTokenPair(_id) {
        const data = { _id };
        const accessToken = await this.JwtService.signAsync(data, {
            expiresIn: '1d'
        });
        return { accessToken };
    }
    returnRegisterUserFields(user) {
        return {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            created: new Date(user.createdAt)
        };
    }
    returnLoginUserFields(user) {
        return {
            _id: user._id,
            email: user.email,
            created: new Date(user.createdAt)
        };
    }
    updateUserFields(user) {
        return {
            _id: user._id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            created: new Date(user.createdAt),
            updated: Date.now()
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(user_model_1.UserModel)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
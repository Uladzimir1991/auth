import {Controller, UsePipes, ValidationPipe, Get, Post, HttpCode, Body, Param, Put, Delete} from '@nestjs/common';
import {AuthDto} from "./auth.dto";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Get('users')
    async getAllUsers() {
        return this.AuthService.getAllUsers()
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Get('user/:_id')
    async getUser(@Param() id: string) {
        return this.AuthService.getUser(id)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthDto) {
        return this.AuthService.login(dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('register')
    async register(@Body() dto: AuthDto) {
        return this.AuthService.register(dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Put('user/update')
    async updateUser(@Body() dto: AuthDto) {
        return this.AuthService.updateUser(dto)
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Delete('user/remove')
    async removeUser(@Body() dto: AuthDto) {
        return this.AuthService.removeUser(dto)
    }
}
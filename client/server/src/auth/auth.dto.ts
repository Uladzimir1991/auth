import {IsEmail, IsString, Matches, MaxLength, MinLength} from "class-validator";

export class AuthDto {
    // @MinLength(1, {
    //     message: 'Name cannot be less than 1 characters!'
    // })
    // @MaxLength(25, {
    //     message: 'Name cannot be more than 25 characters'
    // })
    @IsString()
    name?: string

    // @MinLength(8, {
    //     message: 'Phone cannot be less than 10 characters!'
    // })
    // @MaxLength(17, {
    //     message: 'Phone cannot be more than 17 characters'
    // })
    // @Matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){8,17}(\s*)?$/, {
    //     message: 'Incorrect phone'
    // })
    @IsString()
    phone?: string

    @MinLength(6, {
        message: 'Email cannot be less than 6 characters!'
    })
    @MaxLength(50, {
        message: 'Email cannot be more than 50 characters'
    })
    @Matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, {
        message: 'Incorrect Email'
    })
    @IsEmail()
    email: string

    @MinLength(6, {
        message: 'Password cannot be less than 6 characters!'
    })
    @IsString()
    password: string
}
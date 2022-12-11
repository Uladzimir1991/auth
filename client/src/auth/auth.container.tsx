import {useState} from "react";
import {useMutation} from "react-query";
import { AuthService } from '../services/auth.service'
import {useAuth} from "../providers/auth.provider";
import * as React from "react";
import {
    FormStyled,
    WrapperStyled
} from "./auth.styled";
import {AuthContainerType} from "./auth.types";
import {LoginComponent} from "./login/login.component";
import {RegisterContainer} from "./register/register.container";

export const AuthContainer = ({
    setIsAuthed,
    currentUser,
}: AuthContainerType) => {

    const [data, setData] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        password: ''
    })
    const [authType, setAuthType] = useState<string>('login')
    const isAuthenticated: boolean = (authType === 'login')

    // @ts-ignore
    const {setUser} = useAuth()

    const {mutateAsync: loginAsync} = useMutation
    ('login', () => AuthService.login(
        data.name, data.phone, data.email, data.password
    ),{
        onError: (error => console.error(error)),
        onSuccess: ({data}) => {
            localStorage.setItem('token', data.user._id)
            setIsAuthed(true)
            setUser(data.user)
        }
    })

    const {mutateAsync: registerAsync} = useMutation
        ('register', () => AuthService.register(
            data.name, data.phone, data.email, data.password
        ),{
            onError: (error => console.error(error)),
            onSuccess: ({data}) => {
                setAuthType('login')
                setUser(data.user)
            }
        })

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        isAuthenticated ? loginAsync() : registerAsync()
    }

    const handleEmailChange = (event: { target: { value: any; }; }) => {
        setData({...data, email: event.target.value})
    }

    const handlePasswordChange = (event: { target: { value: any; }; }) => {
        setData({...data, password: event.target.value})
    }

    return (
        <WrapperStyled>
            <FormStyled onSubmit={handleSubmit}>
                <h1>{isAuthenticated ? 'Sign In' : 'Sign Up'}</h1>
                {isAuthenticated ? (
                    <LoginComponent
                        handleEmailChange={handleEmailChange}
                        handlePasswordChange={handlePasswordChange}
                        setAuthType={setAuthType}
                        data={data}
                    />
                ) :
                    <RegisterContainer
                        handleEmailChange={handleEmailChange}
                        handlePasswordChange={handlePasswordChange}
                        setAuthType={setAuthType}
                        data={data}
                        setData={setData}
                    />
                }
            </FormStyled>
        </WrapperStyled>
    )
}
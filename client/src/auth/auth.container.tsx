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
import CustomizedSnackbars from "./authMessage.component";

export const AuthContainer = ({
    setIsAuthed,
}: AuthContainerType) => {
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        password: ''
    })
    const [authType, setAuthType] = useState<string>('login')
    const [success, setSuccess] = useState<boolean>(false)
    const isAuthenticated: boolean = (authType === 'login')

    // @ts-ignore
    const {setUser} = useAuth()

    const {mutateAsync: loginAsync} = useMutation
    ('login', () => AuthService.login(
        data.name, data.phone, data.email, data.password
    ),{
        onError: (error => {
            console.error(error)
            setOpen(true)
            setSuccess(false)
        }),
        onSuccess: ({data}) => {
            localStorage.setItem('token', data.user._id)
            setIsAuthed(true)
            setUser(data.user)
            setSuccess(true)
        }
    })

    const {mutateAsync: registerAsync} = useMutation
        ('register', () => AuthService.register(
            data.name, data.phone, data.email, data.password
        ),{
            onError: (error => {
                console.error(error)
                setSuccess(false)
            }),
            onSuccess: ({data}) => {
                setAuthType('login')
                setOpen(true)
                setUser(data.user)
                setSuccess(true)
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
                    <>
                        <LoginComponent
                            handleEmailChange={handleEmailChange}
                            handlePasswordChange={handlePasswordChange}
                            setAuthType={setAuthType}
                            data={data}
                        />
                    </>
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
            <CustomizedSnackbars
                authType={authType}
                setAuthType={setAuthType}
                open={open}
                setOpen={setOpen}
                success={success}
            />
        </WrapperStyled>
    )
}
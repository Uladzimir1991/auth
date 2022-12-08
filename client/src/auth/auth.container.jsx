import {useState} from "react";
import {useMutation} from "react-query";
import { AuthService } from '../services/auth.service'
import {useAuth} from "../providers/auth.provider";
import * as React from "react";

export const AuthContainer = ({setIsAuthed}) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [authType, setAuthType] = useState('login')

    const {setUser} = useAuth()

    const {mutateAsync: loginAsync} = useMutation
        ('login', () => AuthService.login(data.email, data.password),{
            onError: (error => console.error(error)),
            onSuccess: ({data}) => {
                localStorage.setItem('token', data.accessToken)
                setIsAuthed(true)
                setUser(data.user)
            }
        })

    const {mutateAsync: registerAsync} = useMutation
        ('register', () => AuthService.register(data.email, data.password),{
            onError: (error => console.error(error)),
            onSuccess: ({data}) => {
                setUser(data.user)
            }
        })

    const isAuthenticated = authType === 'login'

    const handleSubmit = (event) => {
        event.preventDefault()

        if(isAuthenticated) {
            loginAsync()
        } else {
            registerAsync()
        }
    }

    const handleEmailChange = (event) => {
        setData({...data, email: event.target.value})
    }

    const handlePasswordChange = (event) => {
        setData({...data, password: event.target.value})
    }

    return (
        <>
            <h1>Authorization</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={data.email}
                    placeholder='Email'
                    onChange={handleEmailChange}
                    required
                />
                <input
                    type="password"
                    value={data.password}
                    placeholder='Password'
                    onChange={handlePasswordChange}
                    required
                />
                <button
                    type="submit"
                >
                    {isAuthenticated ? 'Login' : 'Register'}
                </button>

                <div
                    onClick={() => setAuthType(isAuthenticated ? 'register' : 'login')}
                >
                    I want {isAuthenticated ? 'register' : 'login'}
                </div>
            </form>
        </>
    )
}
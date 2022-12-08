import {useEffect, useState} from "react";
import {useAuth} from "./providers/auth.provider";
import {UserInfoContainer} from "./userInfo/userInfo.container";
import {AuthContainer} from "./auth/auth.container";

export const HomeContainer = () => {
    const {user} = useAuth()
    const [isAuthed, setIsAuthed] = useState(false)
    const [isToken, setIsToken] = useState(localStorage.getItem('token'))
    console.log(user)
    useEffect(() => {
        setIsToken(localStorage.getItem('token'))
    }, [isAuthed])

    return (
        user && isToken && isAuthed ?
            <UserInfoContainer
                user={user}
                setIsAuthed={setIsAuthed}
            />
            :
            <AuthContainer setIsAuthed={setIsAuthed} />
    )
}
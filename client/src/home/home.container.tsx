import {useEffect, useState} from "react";
import {useAuth} from "../providers/auth.provider";
import {UserInfoContainer} from "../userInfo/userInfo.container";
import {AuthContainer} from "../auth/auth.container";
import {AuthService} from "../services/auth.service";
import {UserModel} from "../../server/src/user/user.model";

export const HomeContainer = () => {
    let {user} = useAuth()
    const [isAuthed, setIsAuthed] = useState<boolean>(false)
    const [token, setToken] = useState<string>(localStorage.getItem('token'))
    const [currentUser, setCurrentUser] = useState<UserModel>(user)

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [isAuthed])

    return (
        token || isAuthed ?
            <UserInfoContainer
                user={user}
                setIsAuthed={setIsAuthed}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
            />
            :
            <AuthContainer
                setIsAuthed={setIsAuthed}
            />
    )
}
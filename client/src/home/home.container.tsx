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

    async function getUser() {
        await AuthService.getUser(token).then(
            response => setCurrentUser(response.data)
        )

        return currentUser
    }

    console.log(token, isAuthed)

    return (
        token || isAuthed ?
            <UserInfoContainer
                user={user || currentUser}
                setIsAuthed={setIsAuthed}
                getUser={getUser}
            />
            :
            <AuthContainer setIsAuthed={setIsAuthed} />
    )
}
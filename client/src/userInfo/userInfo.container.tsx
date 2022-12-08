import {ButtonStyled, ContainerForLogoutButton, ContainerForUserInfo, UserInfoBlock} from "./userInfo.styled";
import {UserInfoContainerType} from "./userInfo.types";
import {useEffect} from "react";

export const UserInfoContainer = ({user, setIsAuthed, getUser}: UserInfoContainerType) => {
    const options: {} = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
    const createdDate = new Date(user?.created || user?.createdAt).toLocaleString('ru-RU' || 'en-EN', options).replace(',', '').slice(3);

    const handleLogout = () => {
        setIsAuthed(false)
        localStorage.removeItem('token')
    }

    useEffect(() => {
        if(!user) {
            getUser()
            setIsAuthed(true)
        }
    }, [])

    return (
        <>
            <ContainerForLogoutButton>
                <ButtonStyled onClick={handleLogout}>Logout</ButtonStyled>
            </ContainerForLogoutButton>
            <ContainerForUserInfo>
                <UserInfoBlock>User email: {user?.email}</UserInfoBlock>
                <UserInfoBlock>Created: {createdDate}</UserInfoBlock>
            </ContainerForUserInfo>
        </>
    )
}
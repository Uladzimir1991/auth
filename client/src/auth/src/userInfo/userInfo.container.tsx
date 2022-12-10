import {ButtonStyled, ContainerForLogoutButton, ContainerForUserInfo, UserInfoBlock} from "./userInfo.styled";
import {UserInfoContainerType} from "./userInfo.types";
import {useEffect} from "react";

export const UserInfoContainer = ({
    user,
    setIsAuthed,
    currentUser,
    setCurrentUser,
    users
}: UserInfoContainerType) => {
    const options: {} = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
    const createdDate = new Date(user?.created || currentUser?.createdAt).toLocaleString('ru-RU' || 'en-EN', options).replace(',', '').slice(3);

    const handleLogout = () => {
        setIsAuthed(false)
        localStorage.removeItem('token')
    }

    function getUser() {
        setCurrentUser(users.filter(item => (
            String(item._id) === localStorage.getItem('token')
        ))[0])

        return currentUser
    }

    useEffect(() => {
        setIsAuthed(true)
    }, [])

    useEffect(() => {
        getUser()
    }, [getUser])

    return (
        <>
            <ContainerForLogoutButton>
                <ButtonStyled onClick={handleLogout}>Logout</ButtonStyled>
            </ContainerForLogoutButton>
            <ContainerForUserInfo>
                <UserInfoBlock>Name: {currentUser?.name}</UserInfoBlock>
                <UserInfoBlock>Phone: {currentUser?.phone}</UserInfoBlock>
                <UserInfoBlock>Email: {currentUser?.email}</UserInfoBlock>
                <UserInfoBlock>Created: {createdDate}</UserInfoBlock>
            </ContainerForUserInfo>
        </>
    )
}
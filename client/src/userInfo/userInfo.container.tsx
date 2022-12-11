import {
    ButtonStyled,
    ContainerForLogoutButton,
    ContainerForUserInfo,
    UserInfoBlock,
} from "./userInfo.styled"
import {UserInfoContainerType} from "./userInfo.types"
import {useEffect} from "react"
import {ServiceButtonsContainer} from "./serviceButtons/serviceButtons.container";
import {AuthService} from "../services/auth.service";

export const UserInfoContainer = ({
    user,
    setIsAuthed,
    currentUser,
    setCurrentUser,
}: UserInfoContainerType) => {
    const options: {} = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const createdDate = new Date(user?.created || currentUser?.createdAt).toLocaleString('ru-RU' || 'en-EN', options).replace(',', '').slice(3);
    const updatedDate = new Date(currentUser?.updatedAt).toLocaleString('ru-RU' || 'en-EN', options).replace(',', '').slice(3);

    const handleLogout = () => {
        setIsAuthed(false)
        localStorage.removeItem('token')
    }

    function getUser() {
        AuthService.getUser(localStorage.getItem('token'))
            .then(response => setCurrentUser(response.data))

        return currentUser
    }

    useEffect(() => {
        setIsAuthed(true)
    }, [setIsAuthed])

    useEffect(() => {
        getUser()
    }, [])

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
                {updatedDate !== createdDate ? (
                    <UserInfoBlock>Updated: {updatedDate}</UserInfoBlock>
                ) : null}
            </ContainerForUserInfo>
            <ServiceButtonsContainer
                setIsAuthed={setIsAuthed}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                getUser={getUser}
            />
        </>
    )
}
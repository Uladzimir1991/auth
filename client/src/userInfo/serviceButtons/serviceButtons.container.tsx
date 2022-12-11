import {useState} from "react";
import {ContainerForServiceButtons, IconStyled, ServiceButtonStyled} from "../userInfo.styled";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeleteIcon from "@mui/icons-material/Delete";
import {RemoveUserComponent} from "./removeUser.component";
import {ChangeUserContainer} from "./changeUserInfo/changeUser.container"
import {ServiceButtonsContainerType, UserInfoContainerType} from "../userInfo.types";

export const ServiceButtonsContainer = ({
    setIsAuthed,
    currentUser,
    setCurrentUser,
    getUser
}: ServiceButtonsContainerType) => {
    const [openChangeUser, setOpenChangeUser] = useState<boolean>(false)
    const [openRemoveUser, setOpenRemoveUser] = useState<boolean>(false)

    const handleOpenChangeUser = () => {
        setOpenChangeUser(true)
    }

    const handleOpenRemoveUser = () => {
        setOpenRemoveUser(true)
    }

    return (
        <>
            <ContainerForServiceButtons>
                <ServiceButtonStyled
                    onClick={handleOpenChangeUser}
                >
                    <IconStyled><ManageAccountsIcon /></IconStyled>
                    Change user info
                </ServiceButtonStyled>
                <ServiceButtonStyled
                    onClick={handleOpenRemoveUser}
                >
                    <IconStyled><DeleteIcon /></IconStyled>
                    Delete user
                </ServiceButtonStyled>
            </ContainerForServiceButtons>
            <ChangeUserContainer
                setOpenChangeUser={setOpenChangeUser}
                openChangeUser={openChangeUser}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                getUser={getUser}
                setIsAuthed={setIsAuthed}
            />
            <RemoveUserComponent
                setIsAuthed={setIsAuthed}
                currentUser={currentUser}
                setOpenRemoveUser={setOpenRemoveUser}
                openRemoveUser={openRemoveUser}
            />
        </>
    )
}
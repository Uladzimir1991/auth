import {RemoveUserComponentType} from "../userInfo.types";
import {
    RemoveUserInfoContainerBlock,
    PopupWrapper,
    ButtonCancelStyled,
    PopupButtonsContainer
} from "./serviceButtons.styled";
import * as React from "react";
import {ButtonStyled} from "../userInfo.styled";
import {AuthService} from "../../services/auth.service";
import {ChangeUserInfoTitle} from "./serviceButtons.styled";

export const RemoveUserComponent = ({
    setIsAuthed,
    currentUser,
    setOpenRemoveUser,
    openRemoveUser,
}: RemoveUserComponentType) => {

    const handleCloseRemoveUser = () => {
        setOpenRemoveUser(false)
    }

    const handleRemoveUser = async () => {
        await AuthService.removeUser(
            currentUser.name,
            currentUser.phone,
            currentUser.email,
            currentUser.password,
        ).then(response => {
            setIsAuthed(false)
            localStorage.removeItem('token')
        })
    }

    return (
        <>
            <PopupWrapper
                onClick={handleCloseRemoveUser}
                openRemoveUser={openRemoveUser}
            />
            <RemoveUserInfoContainerBlock
                openRemoveUser={openRemoveUser}
            >
                <ChangeUserInfoTitle>Remove user: "{currentUser?.name}".</ChangeUserInfoTitle>
                <ChangeUserInfoTitle>Are u sure?</ChangeUserInfoTitle>
                <PopupButtonsContainer>
                    <ButtonStyled
                        onClick={handleRemoveUser}
                    >
                        Confirm
                    </ButtonStyled>
                    <ButtonCancelStyled
                        onClick={handleCloseRemoveUser}
                    >
                        Cancel
                    </ButtonCancelStyled>
                </PopupButtonsContainer>
            </RemoveUserInfoContainerBlock>
        </>
    )
}
import {
    PopupWrapper,
    ChangeUserInfoContainerBlock,
    PopupButtonsContainer,
    ButtonCancelStyled
} from '../serviceButtons.styled'
import {ChangeUserComponentType} from "../../userInfo.types"
import * as React from "react"
import {ChangeUserInfoInputsComponent} from "./changeUserInfoInputs.component"
import {ButtonStyled} from '../../userInfo.styled'
import {AuthService} from "../../../services/auth.service";
import {useEffect, useState} from "react";
import {UserModel} from "../../../../server/src/user/user.model";

export const ChangeUserContainer = ({
    setOpenChangeUser,
    openChangeUser,
    currentUser,
    setCurrentUser,
    getUser,
}: ChangeUserComponentType) => {
    const [changedCurrentUser, setChangedCurrentUser] = useState<UserModel>(currentUser)

    useEffect(() => {
        setChangedCurrentUser(currentUser)
    }, [currentUser])

    const handleClose = () => {
        setOpenChangeUser(false)
    }

    const handleUpdateUser = async () => {
        await AuthService.updateUser(
            changedCurrentUser.name,
            changedCurrentUser.phone,
            changedCurrentUser.email,
            changedCurrentUser.password,
        ).then(response => {
            setCurrentUser(response.data.user)
            getUser()
            handleClose()
        })
    }

    return (
        <>
            <PopupWrapper
                onClick={handleClose}
                openChangeUser={openChangeUser}
            />
            <ChangeUserInfoContainerBlock
                openChangeUser={openChangeUser}
            >
                <ChangeUserInfoInputsComponent
                    changedCurrentUser={changedCurrentUser}
                    setChangedCurrentUser={setChangedCurrentUser}
                    setCurrentUser={setCurrentUser}
                    currentUser={currentUser}
                />
                <PopupButtonsContainer>
                    <ButtonStyled
                        onClick={handleUpdateUser}
                    >
                        Confirm
                    </ButtonStyled>
                    <ButtonCancelStyled
                        onClick={handleClose}
                    >
                        Cancel
                    </ButtonCancelStyled>
                </PopupButtonsContainer>
            </ChangeUserInfoContainerBlock>
        </>
    )
}
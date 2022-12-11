import React from "react";
import {UserModel} from "../../server/src/user/user.model";

export type UserInfoContainerType = {
    user: any | null
    setIsAuthed:  React.Dispatch<React.SetStateAction<boolean>>
    currentUser: UserModel
    setCurrentUser: React.Dispatch<React.SetStateAction<UserModel>>
}

export type ServiceButtonsContainerType = {
    getUser: () => UserModel
    setIsAuthed?:  React.Dispatch<React.SetStateAction<boolean>>
    currentUser: UserModel
    setCurrentUser: React.Dispatch<React.SetStateAction<UserModel>>
}

export type ChangeUserComponentType = ServiceButtonsContainerType & {
    openChangeUser: boolean
    setOpenChangeUser: React.Dispatch<React.SetStateAction<boolean>>
}

export type RemoveUserComponentType = {
    openRemoveUser: boolean
    setOpenRemoveUser: React.Dispatch<React.SetStateAction<boolean>>
    currentUser: UserModel
    setIsAuthed:  React.Dispatch<React.SetStateAction<boolean>>
}

export type PopupWrapperType = {
    openChangeUser?: boolean
    openRemoveUser?: boolean
}

export type ChangeUserInfoInputsType = {
    setCurrentUser: React.Dispatch<React.SetStateAction<UserModel>>
    setChangedCurrentUser: React.Dispatch<React.SetStateAction<UserModel>>
    currentUser: UserModel
    changedCurrentUser: UserModel
}
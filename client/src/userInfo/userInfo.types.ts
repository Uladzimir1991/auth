import React from "react";
import {UserModel} from "../../server/src/user/user.model";

export type UserInfoContainerType = {
    user: any | null
    setIsAuthed:  React.Dispatch<React.SetStateAction<boolean>>
    currentUser: UserModel
    setCurrentUser: React.Dispatch<React.SetStateAction<UserModel>>
    users: UserModel[]
}
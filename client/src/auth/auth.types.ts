import React from "react";
import {UserModel} from "../../server/src/user/user.model";

export type AuthContainerType = {
    setIsAuthed: React.Dispatch<React.SetStateAction<boolean>>
    currentUser: UserModel
    users: UserModel[]
    setUsers: React.Dispatch<React.SetStateAction<UserModel[]>>
}
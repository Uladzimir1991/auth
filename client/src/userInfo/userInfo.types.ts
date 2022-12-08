import React from "react";
import {UserModel} from "../../server/src/user/user.model";

export type UserInfoContainerType = {
    user: any | null
    setIsAuthed:  React.Dispatch<React.SetStateAction<boolean>>
    getUser: () => Promise<UserModel>
}
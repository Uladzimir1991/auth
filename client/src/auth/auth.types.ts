import React from "react";
import {UserModel} from "../../server/src/user/user.model";

export type AuthContainerType = {
    setIsAuthed: React.Dispatch<React.SetStateAction<boolean>>
}

export type RegisterContainerType = {
    setData: React.Dispatch<React.SetStateAction<{id: string, name: string, phone: string, email: string, password: string}>>
    data: {id: string, name: string, phone: string, email: string, password: string}
    handleEmailChange: (event: { target: { value: any; };}) => void
    handlePasswordChange: (event: { target: { value: any; };}) => void
    setAuthType?: React.Dispatch<React.SetStateAction<string>>
}
import React from "react";

export type UserInfoContainerType = {
    user: any | null
    setIsAuthed:  React.Dispatch<React.SetStateAction<boolean>>
}
import * as React from "react";
import {InputStyled, LabelForInput} from "../../../auth/auth.styled";
import {ChangeUserInfoInputsType} from "../../userInfo.types";
import {ChangeUserInfoTitle} from "../serviceButtons.styled";

export const ChangeUserInfoInputsComponent = ({
    setChangedCurrentUser,
    changedCurrentUser,
    currentUser,
}: ChangeUserInfoInputsType) => {

    const handleEmailChange = (event: { target: { value: string; }; }) => {
        setChangedCurrentUser({...changedCurrentUser, email: event.target.value})
    }

    const handleNameChange = (event: { target: { value: string; }; }) => {
        setChangedCurrentUser({...changedCurrentUser, name: event.target.value})
    }

    const handlePhoneChange = (event: { target: { value: string; }; }) => {
        setChangedCurrentUser({...changedCurrentUser, phone: event.target.value})
    }

    return (
        <>
            <ChangeUserInfoTitle>Change information about user:</ChangeUserInfoTitle>
            <LabelForInput htmlFor="name">Name</LabelForInput>
            <InputStyled
                id="name"
                type="name"
                value={changedCurrentUser?.name}
                placeholder='Name'
                onChange={handleNameChange}
                required
            />
            <LabelForInput htmlFor="phone">Phone</LabelForInput>
            <InputStyled
                id="phone"
                type="phone"
                value={changedCurrentUser?.phone}
                placeholder='Phone'
                onChange={handlePhoneChange}
                required
            />
            <LabelForInput htmlFor="email">Email</LabelForInput>
            <InputStyled
                id="email"
                type="email"
                value={changedCurrentUser?.email}
                placeholder='Email'
                onChange={handleEmailChange}
                required
            />
        </>
    )
}
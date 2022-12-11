import * as React from "react";
import {InputStyled} from "../auth.styled";
import {RegisterContainerType} from "../auth.types";

export const RegisterInputsComponent = ({
    setData,
    data,
    handleEmailChange,
    handlePasswordChange,
}: RegisterContainerType) => {

    const handleNameChange = (event: { target: { value: any; }; }) => {
        setData({...data, name: event.target.value})
    }

    const handlePhoneChange = (event: { target: { value: any; }; }) => {
        setData({...data, phone: event.target.value})
    }

    return (
        <>
            <InputStyled
                type="name"
                value={data.name}
                placeholder='Name'
                onChange={handleNameChange}
                required
            />
            <InputStyled
                type="phone"
                value={data.phone}
                placeholder='Phone'
                onChange={handlePhoneChange}
                required
            />
            <InputStyled
                type="email"
                value={data.email}
                placeholder='Email'
                onChange={handleEmailChange}
                required
            />
            <InputStyled
                type="password"
                value={data.password}
                placeholder='Password'
                onChange={handlePasswordChange}
                required
                />
        </>
    )
}
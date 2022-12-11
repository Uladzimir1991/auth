import {ContainerForFormButtons, ContainerForSwitchSession, InputStyled, SwitchSession} from "../auth.styled";
import {ButtonStyled} from "../../userInfo/userInfo.styled";
import * as React from "react";

export const RegisterComponent = ({
    setData,
    data,
    handleEmailChange,
    handlePasswordChange,
    setAuthType
}) => {

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
            <ContainerForFormButtons>
                <ButtonStyled
                    type="submit"
                >
                    Register
                </ButtonStyled>

                <ContainerForSwitchSession>
                    I want
                    <SwitchSession
                        onClick={() => setAuthType('login')}
                    >
                        {' login'}
                    </SwitchSession>
                </ContainerForSwitchSession>
            </ContainerForFormButtons>
        </>
    )
}
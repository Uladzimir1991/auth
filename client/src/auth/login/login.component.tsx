import {ContainerForFormButtons, ContainerForSwitchSession, InputStyled, SwitchSession} from "../auth.styled";
import {ButtonStyled} from "../../userInfo/userInfo.styled";
import * as React from "react";

export const LoginComponent = ({
   handlePasswordChange,
   handleEmailChange,
   setAuthType,
   data,
}) => {
    return (
        <>
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
                    Login
                </ButtonStyled>

                <ContainerForSwitchSession>
                    I want
                    <SwitchSession
                        onClick={() => setAuthType('register')}
                    >
                        {' register'}
                    </SwitchSession>
                </ContainerForSwitchSession>
            </ContainerForFormButtons>
        </>
    )
}
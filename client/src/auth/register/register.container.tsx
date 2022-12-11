import {ContainerForFormButtons, ContainerForSwitchSession, SwitchSession} from "../auth.styled";
import {ButtonStyled} from "../../userInfo/userInfo.styled";
import * as React from "react";
import {RegisterInputsComponent} from "./registerInputs.component";
import {RegisterContainerType} from "../auth.types";

export const RegisterContainer = ({
    setData,
    data,
    handleEmailChange,
    handlePasswordChange,
    setAuthType
}: RegisterContainerType) => {

    return (
        <>
            <RegisterInputsComponent
                setData={setData}
                data={data}
                handleEmailChange={handleEmailChange}
                handlePasswordChange={handlePasswordChange}
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
import styled from 'styled-components'
import {PopupWrapperType} from "../userInfo.types";

export const PopupWrapper = styled.div<PopupWrapperType>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  ${prop => prop.openChangeUser || prop.openRemoveUser ? 
          'opacity: 1; pointer-events: all;' : 
          'opacity: 0; pointer-events: none;'
    };
  transition: all .4s linear;
`

export const ChangeUserInfoContainerBlock = styled.div<PopupWrapperType>`
  background: #fff;
  width: 50vw;
  position: absolute;
  left: ${prop => prop.openChangeUser ? '25vw' : '-100vw'};
  top: 20vh;
  border-radius: 10px;
  padding: 20px;
  transition: all .4s linear;
`

export const RemoveUserInfoContainerBlock = styled(ChangeUserInfoContainerBlock)<PopupWrapperType>`
  left: ${prop => prop.openRemoveUser ? '25vw' : '-100vw'};
  top: 30vh;
`

export const ChangeUserInfoTitle = styled.h3`
  text-align: center;
`

export const PopupButtonsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
`

export const ButtonCancelStyled = styled.button`
  margin-left: 20px;
  border: 0.5px solid #A0627B;
  background: #FFFFFF;
  border-radius: 4px;
  box-shadow: 2px 1px 4px rgba(0,0,0,0.3);
  font-size: 16px;
  line-height: 22px;
  color: #A0627B;
  max-width: 130px;
  padding: 8px 30px;
  cursor: pointer;
  font-weight: bold;
  transition: all .2s linear;

  &:hover {
    box-shadow: 4px 2px 10px rgba(0,0,0,0.5);
    transition: all .2s linear;
  }

  &:active {
    background: #964d4d;
    color: #FFF;
    box-shadow: none;
    transition: all .2s linear;
  }
`
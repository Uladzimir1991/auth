import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: 0.5px solid #A0627B;
  background: #A0627B;
  border-radius: 4px;
  box-shadow: 2px 1px 4px rgba(0,0,0,0.3);
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  max-width: 130px;
  padding: 8px 30px;
  cursor: pointer;
  font-weight: bold;
  transition: all .2s linear;
  
  &:hover {
    background-color: #A03352;
    box-shadow: 4px 2px 10px rgba(0,0,0,0.5);
    transition: all .2s linear;
  }
  
  &:active {
    background: #A0627B;
    box-shadow: none;
    transition: all .2s linear;
  }
`

export const ServiceButtonStyled = styled.button`
  border: 1px solid #A0627B;
  background: #A0627B;
  border-radius: 4px;
  box-shadow: 2px 1px 4px rgba(0,0,0,0.3);
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  width: 200px;
  padding: 8px 30px;
  cursor: pointer;
  transition: all .2s linear;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  
  &:hover {
    background-color: #A03352;
    box-shadow: 4px 2px 10px rgba(0,0,0,0.5);
    transition: all .2s linear;
  }
  
  &:active {
    background: #A0627B;
    box-shadow: none;
    transition: all .2s linear;
  }
`

export const ContainerForLogoutButton = styled.div`
  position: absolute; 
  right: 50px; 
  top: 30px;
`

export const ContainerForUserInfo = styled.div`
  margin-left: 5%; 
  margin-top: 60px;
`

export const UserInfoBlock = styled.div`
  margin-bottom: 20px;
`

export const ContainerForServiceButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5%;
  margin-top: 40px;
  height: 100px;
`

export const IconStyled = styled.span`
  position: absolute;
  left: 15px;
  top: 7px;
`
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
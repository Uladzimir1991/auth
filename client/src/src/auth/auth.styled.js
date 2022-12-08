import styled from 'styled-components'

export const WrapperStyled = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
`

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  min-width: 360px;
  width: 50%;
  height: 50%;
`

export const InputStyled = styled.input`
  font-size: 14px;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  border:0.5px solid #A0627B;
  
  &::placeholder {
    color: #BBB;
  }
`

export const ContainerForFormButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100px;
`

export const ContainerForSwitchSession = styled.div``

export const SwitchSession = styled.span`
  color: dodgerblue;
  cursor: pointer;
`
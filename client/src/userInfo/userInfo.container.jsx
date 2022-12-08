import {ButtonLogoutStyled} from "./userInfo.styles";

export const UserInfoContainer = ({user, setIsAuthed}) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'UTC' };
    const createdDate = new Date(user.created).toLocaleString('ru-RU' || 'en-EN', options).replace(',', '').slice(3);

    const handleLogout = () => {
        setIsAuthed(false)
        localStorage.removeItem('token')
    }

    return (
        <>
            {/*<div style={{position: 'absolute', right: '50px', top: '30px'}}>*/}
                <ButtonLogoutStyled type='button' onClick={handleLogout}>Logout</ButtonLogoutStyled>
            {/*</div>*/}
            <div style={{marginLeft: '30px', marginTop: '60px'}}>
                <div style={{marginBottom: '20px'}}>User email: {user.email}</div>
                <div>Created: {createdDate}</div>
            </div>
        </>
    )
}
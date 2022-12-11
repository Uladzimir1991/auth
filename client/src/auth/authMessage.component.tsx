import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import {SwitchSession} from "./auth.styled";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({
    authType,
    setAuthType, 
    open, 
    setOpen,
    success
}) {

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleGoToRegister = () => {
        setAuthType('register')
        setOpen(false);
    }

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={success ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {success ? (
                        'Success! User was registered.'
                        ) : (
                        'User not found!'
                        )
                    }
                    <SwitchSession
                        onClick={handleGoToRegister}
                    >
                        {success ? null : ' Register here'}
                    </SwitchSession>
                </Alert>
            </Snackbar>
        </Stack>
    );
}
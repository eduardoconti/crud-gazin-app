import React from 'react'
import Alert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'

export default function AlertComponent(props){
    const { alert, setAlert } = props
    const handleClose = (e, reason) => {
        setAlert({
            ...alert,
            isOpen: false
        })
    }
    return (
        <Snackbar
            open={alert.isOpen}
            onClose={handleClose}>
            <Alert
                variant="filled"
                severity={alert.type}
                onClose={handleClose}>
                {alert.message}
            </Alert>

        </Snackbar>
    )
}
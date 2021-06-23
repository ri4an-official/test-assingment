import { Button, Collapse, IconButton } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../models/store'

export const UserInfo = () => {
    const user = useSelector((s: State) => s.userReducer.user)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    return (
        <p>
            <Collapse className='alert' in={open}>
                {user.name ? (
                    <Alert
                        action={
                            <IconButton
                                onClick={() => setOpen(false)}
                                color='inherit'
                                size='small'
                            >
                                X
                            </IconButton>
                        }
                        severity='success'
                    >
                        <AlertTitle>User</AlertTitle>
                        <p>
                            <p>
                                Id: <b>{user.id}</b>
                            </p>
                            <p>
                                Name: <b>{user.name}</b>
                            </p>
                            <p>
                                Email: <b>{user.email}</b>
                            </p>
                        </p>
                    </Alert>
                ) : (
                    <Alert severity='error'>
                        Error! User with this ID doesn't exist!
                    </Alert>
                )}
            </Collapse>
            <Button
                onClick={() => {
                    dispatch({ type: 'setUser' })
                    setOpen(true)
                }}
            >
                Test GraphQL
            </Button>
        </p>
    )
}

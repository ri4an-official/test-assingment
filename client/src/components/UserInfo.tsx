import { Button, Collapse, IconButton, TextField } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { useStore } from 'effector-react'
import { useState } from 'react'
import { useInput } from '../hooks/useInput'
import { $user, getUserFx } from '../models/getUser'

export const UserInfo = () => {
    const user = useStore($user)
    const userInput = useInput()
    const [open, setOpen] = useState(false)
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
            <TextField
                required
                type='number'
                placeholder='Enter user id...'
                defaultValue={1}
                {...userInput}
            />
            <Button
                onClick={() => {
                    getUserFx(+userInput.value)
                    setOpen(true)
                }}
            >
                Test GraphQL
            </Button>
        </p>
    )
}

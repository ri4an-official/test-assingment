import { Button, Collapse, IconButton, TextField } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { useEffect, useState } from 'react'
import { useInput } from '../hooks/useInput'
import { getUser } from '../models/query'
import { User } from '../models/User'

export const UserInfo = () => {
    const [user, setUser] = useState({} as User)
    const userInput = useInput()
    const [open, setOpen] = useState(false)
    useEffect(() => {})
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
                    setUser(getUser(+userInput.value).next().value ?? user)
                    setOpen(true)
                }}
            >
                Test GraphQL
            </Button>
        </p>
    )
}

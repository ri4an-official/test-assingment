import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from '../hooks/useInput'
import { State } from '../models/store'
import { addTodo, deleteTodo } from '../models/todosReducer'
import { UserInfo } from './UserInfo'

export const Todos = () => {
    const todos = useSelector((s: State) => s.todosReducer.todos)
    const dispatch = useDispatch()
    const { clear, isError, ...input } = useInput('', true)
    return (
        <>
            <h2>Todos</h2>
            <UserInfo />
            <form>
                <TextField
                    {...input}
                    placeholder='Enter todo title...'
                    error={isError}
                    helperText='Title todo'
                    required
                    label='Required'
                />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => {
                        if (!input.value) return
                        if (globalThis.confirm('Вы уверены?')) {
                            dispatch(addTodo(input.value))
                            clear?.call(this)
                        }
                    }}
                >
                    Add Todo
                </Button>
            </form>
            <p className='todos'>
                {todos.map((t) => (
                    <p className='todo'>
                        <text>{t.title}</text>
                        <Button
                            className='right'
                            size='small'
                            variant='outlined'
                            color='secondary'
                            onClick={() =>
                                globalThis.confirm('Вы уверены?') &&
                                dispatch(deleteTodo(t.id))
                            }
                        >
                            Delete
                        </Button>
                    </p>
                ))}
            </p>
        </>
    )
}

import { createSlice } from '@reduxjs/toolkit'

type Todo = {
    id: number
    title: string
}

const slice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            { id: 1, title: '1st Todo' },
            { id: 2, title: '2nd Todo' },
            { id: 3, title: '3rd Todo' },
        ] as Todo[],
    },
    reducers: {
        addTodo(s, { payload }: { payload: string }) {
            s.todos.push({ id: Math.random(), title: payload })
        },
        deleteTodo(s, { payload }: { payload: number }) {
            s.todos = s.todos.filter((t) => t.id != payload)
        },
    },
})
export default slice.reducer
export const { addTodo, deleteTodo } = slice.actions

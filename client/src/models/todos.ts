import { createEvent, createStore } from 'effector'

type Todo = {
    id: number
    title: string
}
const testTodos: Todo[] = [
    { id: 1, title: '1st Todo' },
    { id: 2, title: '2nd Todo' },
    { id: 3, title: '3rd Todo' },
]

export const addTodo = createEvent<string>()
export const deleteTodo = createEvent<number>()

export const $todos = createStore<Todo[]>(testTodos)
    .on(addTodo, (tds, title) => [{ id: Math.random(), title }, ...tds])
    .on(deleteTodo, (tds, id) => tds.filter((t) => t.id !== id))

import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { useStore } from "effector-react"
import { useInput } from "../hooks/useInput"
import { $todos, addTodo, deleteTodo } from "../models/todos"

export const Todos = () => {
    const todos = useStore($todos)
    const { clear, isError, ...input } = useInput("Todo")
    return (
        <>
            <h2>Todos</h2>
            <form>
                <TextField
                    {...input}
                    error={isError}
                    helperText="Title todo"
                    required
                    label="Required"
                    defaultValue="Todo..."
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        if (!input.value) return
                        if (globalThis.confirm("Вы уверены?")) {
                            addTodo(input.value)
                            clear()
                        }
                    }}
                >
                    Add Todo
                </Button>
                <Button>Test GraphQL</Button>
            </form>
            <p className="todos">
                {todos.map((t) => (
                    <p className="todo">
                        <text>{t.title}</text>
                        <Button
                            className="right"
                            size="small"
                            variant="outlined"
                            color="secondary"
                            onClick={() =>
                                globalThis.confirm("Вы уверены?") && deleteTodo(t.id)
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

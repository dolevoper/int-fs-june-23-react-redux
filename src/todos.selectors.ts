import { useTodosStore } from "./todos";

export function useVisibleTodos() {
    const [state] = useTodosStore();
    return state.filter === "all"
        ? state.todos
        : state.todos.filter((todo) => todo.state === state.filter);
}
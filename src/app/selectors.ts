import { useSelector } from "react-redux";
import { RootState } from "./store";

export function useVisibleTodos() {
    return useSelector(({ filter, todos }: RootState) =>
        !filter ? todos : todos.filter((todo) => todo.state === filter)
    );
}

export function useTodos() {
    return useSelector(({ todos }: RootState) => todos);
}

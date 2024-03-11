import { useTodosStore } from "./todos";
import { useVisibleTodos } from "./todos.selectors";

export function TodosCount() {
  const [state] = useTodosStore();
  const visibleTodos = useVisibleTodos();

  return (
    <p>
      Count: {visibleTodos.length} (All todos: {state.todos.length})
    </p>
  );
}

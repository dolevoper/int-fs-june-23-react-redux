import { useTodos, useVisibleTodos } from "./app/selectors";

export function TodosCount() {
  const todos = useTodos();
  const visibleTodos = useVisibleTodos();

  return (
    <p>
      Count: {visibleTodos.length} (All todos: {todos.length})
    </p>
  );
}

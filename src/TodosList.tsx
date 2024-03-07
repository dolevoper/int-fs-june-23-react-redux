import { Todo, useTodosStore } from "./todos";

export function TodosList() {
  const [state, dispatch] = useTodosStore();
  const visibleTodos =
    state.filter === "all"
      ? state.todos
      : state.todos.filter((todo) => todo.state === state.filter);

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onClick={() =>
            dispatch({
              type: "toggle todo",
              id: todo.id,
            })
          }
        />
      ))}
    </ul>
  );
}

type TodoListItemProps = {
  todo: Todo;
  onClick(): void;
};

function TodoListItem({ todo, onClick }: TodoListItemProps) {
  return (
    <li
      style={{
        textDecoration: todo.state === "completed" ? "line-through" : undefined,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {todo.text}
    </li>
  );
}

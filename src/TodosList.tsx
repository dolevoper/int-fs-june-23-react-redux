import { useTodosStore } from "./todos";
import { toggleTodo } from "./todos.actions";
import { Todo } from "./todos.reducer";
import { useVisibleTodos } from "./todos.selectors";

export function TodosList() {
  const [, dispatch] = useTodosStore();
  const visibleTodos = useVisibleTodos();

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onClick={() =>
            dispatch({
              type: "todo",
              action: toggleTodo(todo.id),
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

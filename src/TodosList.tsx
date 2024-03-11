import { useDispatch } from "react-redux";
import { Todo, toggleTodo } from "./app/todosSlice";
import { useVisibleTodos } from "./app/selectors";

export function TodosList() {
  const dispatch = useDispatch();
  const visibleTodos = useVisibleTodos();

  return (
    <ul>
      {visibleTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onClick={() => dispatch(toggleTodo(todo.id))}
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

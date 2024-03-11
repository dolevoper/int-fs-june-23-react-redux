import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Todo, toggleTodo } from "./app/todosSlice";

export function TodosList() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
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

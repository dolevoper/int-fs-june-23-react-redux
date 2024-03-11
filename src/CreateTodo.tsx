import { useTodosStore } from "./todos";
import styles from "./CreateTodo.module.scss";
import { createTodo } from "./todos.actions";

export function CreateTodo() {
  const [, dispatch] = useTodosStore();

  return (
    <form
      className={styles.wrapper}
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        dispatch({
          type: "todo",
          action: createTodo(formData.get("text")!.toString()),
        });

        e.currentTarget.reset();
      }}
    >
      <h2>Create todo</h2>
      <div className={styles.formField}>
        <label htmlFor="todo-text">Text</label>
        <input type="text" name="text" id="todo-text" />
      </div>
      <button type="submit">Add</button>
    </form>
  );
}

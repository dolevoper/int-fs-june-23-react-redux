import { useTodosStore } from "./todos";

export function CreateTodo() {
  const [, dispatch] = useTodosStore();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        dispatch({
          type: "create todo",
          text: formData.get("text")!.toString(),
        });

        e.currentTarget.reset();
      }}
    >
      <h2>Create todo</h2>
      <label htmlFor="todo-text">Text</label>
      <input type="text" name="text" id="todo-text" />
      <button type="submit">Add</button>
    </form>
  );
}

import { TodoAction } from "./todos.actions";

export type Todo = {
  id: string;
  text: string;
  state: "pending" | "completed";
};

export function todos(state: Todo[], action: TodoAction): Todo[] {
  switch (action.type) {
    case "create todo":
      return [
        ...state,
        {
          id: crypto.randomUUID(),
          text: action.text,
          state: "pending",
        },
      ];
    case "toggle todo":
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : {
            ...todo,
            state: todo.state === "completed" ? "pending" : "completed",
          }
      );
    case "delete todo":
      return state.filter((todo) => todo.id !== action.id);
  }
}

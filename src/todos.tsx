import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

export type Todo = {
  id: string;
  text: string;
  state: "pending" | "completed";
};

export type Filter = "all" | Todo["state"];

type State = {
  todos: Todo[];
  filter: Filter;
};

type Action =
  | { type: "create todo"; text: string }
  | { type: "toggle todo"; id: string }
  | { type: "delete todo"; id: string }
  | { type: "change filter"; filter: Filter };

function todos(state: State, action: Action): State {
  switch (action.type) {
    case "create todo":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: crypto.randomUUID(),
            text: action.text,
            state: "pending",
          },
        ],
      };
    case "toggle todo":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id !== action.id
            ? todo
            : {
                ...todo,
                state: todo.state === "completed" ? "pending" : "completed",
              }
        ),
      };
    case "delete todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "change filter":
      return {
        ...state,
        filter: action.filter,
      };
  }
}

const initialState: State = {
  todos: [],
  filter: "all",
};

const useTodos = () => useReducer(todos, initialState);

const todosContext = createContext<ReturnType<typeof useTodos> | undefined>(
  undefined
);

export function useTodosStore() {
  const store = useContext(todosContext);

  if (!store) {
    throw new Error("Must call useTodosStore under a TodosStoreProvider");
  }

  return store;
}

export function TodosStoreProvider({ children }: PropsWithChildren) {
  const store = useTodos();

  return (
    <todosContext.Provider value={store}>{children}</todosContext.Provider>
  );
}

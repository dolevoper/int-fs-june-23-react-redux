import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { TodoAction } from "./todos.actions";
import { Filter, FilterAction, filter } from "./filterReducer";
import { Todo, todos } from "./todos.reducer";

type State = {
  todos: Todo[];
  filter: Filter;
};

type Action =
  | { type: "todo"; action: TodoAction }
  | { type: "filter"; action: FilterAction };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "todo":
      return {
        ...state,
        todos: todos(state.todos, action.action),
      };
    case "filter":
      return {
        ...state,
        filter: filter(state.filter, action.action),
      };
  }
}

const initialState: State = {
  todos: [],
  filter: "all",
};

const useTodos = () => useReducer(reducer, initialState);

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

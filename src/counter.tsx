import {
  useReducer,
  createContext,
  useContext,
  PropsWithChildren,
} from "react";

type State = number;
type Action = "increment" | "decrement" | "double";

function counter(state: State, action: Action) {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "double":
      return state * 2;
  }
}

const initialState: State = 0;

const useCounter = () => useReducer(counter, initialState);

const counterContext = createContext<ReturnType<typeof useCounter> | undefined>(
  undefined
);

export function CounterProvider({ children }: PropsWithChildren) {
  const store = useCounter();

  return (
    <counterContext.Provider value={store}>{children}</counterContext.Provider>
  );
}

export function useStore() {
  const store = useContext(counterContext);

  if (!store) {
    throw new Error("Must call useStore inside a CounterProvider");
  }

  return store;
}

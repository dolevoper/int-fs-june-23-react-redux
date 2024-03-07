type Todo = {
  id: string;
  text: string;
  state: "pending" | "completed";
};

type State = Todo[];
type Action =
  | { type: "create todo"; text: string }
  | { type: "toggle todo"; id: string }
  | { type: "delete todo"; id: string };

function todo(state: State, action: Action) {
  switch (action.type) {
    case "create todo":
      return state;
    case "toggle todo":
      return state;
    case "delete todo":
      return state;
  }
}

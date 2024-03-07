import { CreateTodo } from "./CreateTodo";
import { Filters } from "./Filters";
import { TodosList } from "./TodosList";

function App() {
  return (
    <main>
      <h1>Todo</h1>
      <CreateTodo />
      <Filters />
      <TodosList />
    </main>
  );
}

export default App;

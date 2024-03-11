import { CreateTodo } from "./CreateTodo";
import { Filters } from "./Filters";
import { TodosCount } from "./TodosCount";
import { TodosList } from "./TodosList";

function App() {
  return (
    <main>
      <h1>Todo</h1>
      <CreateTodo />
      <Filters />
      <TodosList />
      <TodosCount />
    </main>
  );
}

export default App;

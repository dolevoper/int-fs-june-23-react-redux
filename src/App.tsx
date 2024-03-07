import { useStore } from "./counter";

function App() {
  return (
    <main>
      <Counter />
      <Counter />
      <Counter />
    </main>
  );
}

function Counter() {
  const [state, dispatch] = useStore();

  return (
    <article>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
    </article>
  );
}

export default App;

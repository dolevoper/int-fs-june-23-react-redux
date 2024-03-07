import React from "react";
import ReactDOM from "react-dom/client";
import { TodosStoreProvider } from "./todos.tsx";
import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodosStoreProvider>
      <App />
    </TodosStoreProvider>
  </React.StrictMode>
);

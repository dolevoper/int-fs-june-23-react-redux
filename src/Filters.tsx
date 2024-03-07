import { PropsWithChildren } from "react";
import { Filter, useTodosStore } from "./todos";

export function Filters() {
  return (
    <menu>
      <li>
        <FilterLink filter="all">All</FilterLink>
      </li>
      <li>
        <FilterLink filter="pending">Pending</FilterLink>
      </li>
      <li>
        <FilterLink filter="completed">Completed</FilterLink>
      </li>
    </menu>
  );
}

type FilterLinkProps = {
  filter: Filter;
};

function FilterLink({ filter, children }: PropsWithChildren<FilterLinkProps>) {
  const [state, dispatch] = useTodosStore();

  if (state.filter === filter) {
    return children;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        dispatch({
          type: "change filter",
          filter,
        });
      }}
    >
      {children}
    </a>
  );
}

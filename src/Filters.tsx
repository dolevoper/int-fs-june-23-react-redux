import { PropsWithChildren } from "react";
import { useTodosStore } from "./todos";
import styles from "./Filters.module.scss";
import { Filter, changeFilter } from "./filterReducer";

export function Filters() {
  return (
    <menu className={styles.wrapper}>
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
          type: "filter",
          action: changeFilter(filter),
        });
      }}
    >
      {children}
    </a>
  );
}

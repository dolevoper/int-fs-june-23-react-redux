import { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Filter, changeFilter } from "./app/filterSlice";
import styles from "./Filters.module.scss";

export function Filters() {
  return (
    <menu className={styles.wrapper}>
      <li>
        <FilterLink>All</FilterLink>
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
  filter?: Filter;
};

function FilterLink({
  filter = null,
  children,
}: PropsWithChildren<FilterLinkProps>) {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state: RootState) => state.filter);

  if (activeFilter === filter) {
    return children;
  }

  return (
    <a
      href=""
      onClick={(e) => {
        e.preventDefault();
        dispatch(changeFilter(filter));
      }}
    >
      {children}
    </a>
  );
}

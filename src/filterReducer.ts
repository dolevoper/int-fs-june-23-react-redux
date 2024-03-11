import { Todo } from "./todos.reducer";

export type Filter = "all" | Todo["state"];

type ChangeFilterAction = {
    type: "change filter";
    filter: Filter;
};

export type FilterAction = ChangeFilterAction;

export function changeFilter(filter: Filter): ChangeFilterAction {
    return {
        type: "change filter",
        filter,
    };
}

export function filter(currentState: Filter, action: FilterAction): Filter {
    return action.filter;
}
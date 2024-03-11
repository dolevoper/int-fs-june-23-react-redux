type CreateTodoAction = {
    type: "create todo";
    text: string;
};

type ToggleTodoAction = {
    type: "toggle todo";
    id: string;
};

type DeleteTodoAction = {
    type: "delete todo";
    id: string;
};

export type TodoAction =
    | CreateTodoAction
    | ToggleTodoAction
    | DeleteTodoAction

export function createTodo(text: string): CreateTodoAction {
    return {
        type: "create todo",
        text,
    };
}

export function toggleTodo(id: string): ToggleTodoAction {
    return {
        type: "toggle todo",
        id,
    };
}

export function deleteTodo(id: string): DeleteTodoAction {
    return {
        type: "delete todo",
        id,
    };
}
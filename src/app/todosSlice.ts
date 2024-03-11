import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Todo = {
    id: string;
    text: string;
    state: "pending" | "completed";
};

const todosSlice = createSlice({
    name: "todos",
    initialState: [] as Todo[],
    reducers: {
        addTodo: {
            reducer(state, action: PayloadAction<Todo>) {
                state.push(action.payload);
            },
            prepare(text: string) {
                return {
                    payload: {
                        id: crypto.randomUUID(),
                        text,
                        state: "pending"
                    } as Todo
                };
            }
        },
        toggleTodo: {
            reducer(state, action: PayloadAction<string>) {
                const todo = state.find((todo) => todo.id === action.payload);

                if (!todo) {
                    throw new Error();
                }

                todo.state = todo.state === "completed" ? "pending" : "completed";
            },
            prepare(id: string) {
                return { payload: id };
            }
        }
    }
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

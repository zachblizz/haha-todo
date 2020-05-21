import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TodoType = {
    id: number;
    value: string;
    complete: boolean;
}

const initialState: TodoType[] = [];

let nextTodo = 0;
const TODO_LIST = "todo-list";

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        init: (state) => {
            try {
                const todosStr = window.localStorage.getItem(TODO_LIST);

                if (!!todosStr === true) {
                    const todos = JSON.parse(todosStr ?? "");
                    nextTodo = todos.reduce((idx: number, t: TodoType) => {
                        if (idx < t.id) {
                            idx = t.id;
                        }

                        return idx;
                    }, 0) + 1;

                    return todos;
                }
            } catch { }

            return state;
        },
        add: {
            reducer(state, {payload}: PayloadAction<{id: number, value: string}>) {
                const { id, value } = payload;

                state.push({value, id, complete: false});
                window.localStorage.setItem(TODO_LIST, JSON.stringify(state));
            },
            prepare(value: string) {
                return {payload: { value, id: nextTodo++, complete: false }};
            }
        },
        toggle: (state, { payload }: PayloadAction<number>) => {
            const t = state.find(t => t.id === payload);

            if (t) {
                t.complete = !t.complete;
            }
        },
        remove: (state, { payload }: PayloadAction<number>) => {
            const newState = state.filter(t => t.id !== payload);
            window.localStorage.setItem(TODO_LIST, JSON.stringify(newState));

            return newState;
        }
    }
});

export const { init, add, toggle, remove } = todoSlice.actions;

export default todoSlice.reducer;

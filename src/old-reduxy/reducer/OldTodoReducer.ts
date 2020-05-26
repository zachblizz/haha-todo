import { TodoType } from "../../utils/types";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/old-todo-actions";

export type State = TodoType[];

const initialState: TodoType[] = [];

type ActionPayload<T = string | number> = {
    type: string;
    payload?: T;
};

let todoId = 0;

export default function OldTodoReducer(
    state: State = initialState,
    { type, payload }: ActionPayload
) {
    switch (type) {
        case ADD_TODO: {
            const todos = [
                ...state,
                {
                    id: todoId++,
                    value: payload,
                    complete: false,
                }
            ];

            return todos;
        }
        case REMOVE_TODO: {
            if (!payload) {
                return state;
            }

            const id: number = +payload;
            const todos = [ ...state ].filter((t) => t.id !== id);

            return todos ?? [];
        }
        case TOGGLE_TODO: {
            if (!payload) {
                return state;
            }

            const id: number = +payload;
            const todos = [ ...state ].filter((t) => t.id !== id);
            const todo = [ ...state ].find((t) => t.id === id);

            if (!todo) {
                return state;
            }

            todo.complete = !todo.complete;

            return [ ...todos, todo ];
        }
        default:
            return state;
    }
}

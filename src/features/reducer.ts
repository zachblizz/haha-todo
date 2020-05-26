import { combineReducers } from "redux";

import counterReducer from "./counter/counterSlice";
import filtersReducer from "./filters/filtersSlice";
import todoReducer from "./todo/todoSlice";
import oldTodoReducer from "../old-reduxy/reducer/OldTodoReducer";

const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    filter: filtersReducer,
    oldTodo: oldTodoReducer
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;

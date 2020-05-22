import { combineReducers } from "redux";

import counterReducer from "./counter/counterSlice";
import filtersReducer from "./filters/filtersSlice";
import todoReducer from "./todo/todoSlice";

const reducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    filter: filtersReducer,
});

export type RootState = ReturnType<typeof reducer>;

export default reducer;

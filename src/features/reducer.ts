import { combineReducers } from "redux";

import counterReducer from "./counter/counterSlice";
import todoReducer from "./todo/todoSlice";

export default combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});

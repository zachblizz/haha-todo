import { TodoType } from "../../utils/types";

export const ADD_TODO = "ADD_TODO";
export const addTodo = (payload: Pick<TodoType, "value">) => ({ type: ADD_TODO, payload });

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (payload: Pick<TodoType, "id">) => ({ type: REMOVE_TODO, payload });

export const TOGGLE_TODO = "TOGGLE_TODO";
export const toggleTodo = (payload: Pick<TodoType, "id">) => ({ type: TOGGLE_TODO, payload });
